export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const locationName = String(query.name || 'Medellin');

  try {
    const geoRes: any = await $fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(locationName)}&count=1&language=en&format=json`);
    if (!geoRes?.results) throw createError({ statusCode: 404, message: 'City not found' });
    const { latitude, longitude, name, country } = geoRes.results[0];

    // Pedimos TODO: hourly (detalles y lista completa) y daily (semana)
    const weatherRes: any = await $fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);

    const nowISO = weatherRes.current_weather.time;
    let i = weatherRes.hourly.time.findIndex((t: string) => t === nowISO);
    if (i === -1) i = 0;

    return {
      ubicacion: `${name}, ${country}`,
      actual: {
        temp: Math.round(weatherRes.current_weather.temperature),
        codigo: weatherRes.current_weather.weathercode,
        viento: Math.round(weatherRes.current_weather.windspeed),
        // ESTADÍSTICAS PROTEGIDAS
        sensacion: Math.round(weatherRes.hourly.apparent_temperature[i] ?? weatherRes.current_weather.temperature),
        humedad: weatherRes.hourly.relative_humidity_2m[i] ?? 0,
        precipitacion: weatherRes.hourly.precipitation[i] ?? 0
      },
      // Datos para Semana.vue
      semana: weatherRes.daily.time.map((date: string, index: number) => ({
        name: new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long' }),
        date: date,
        max: Math.round(weatherRes.daily.temperature_2m_max[index]),
        min: Math.round(weatherRes.daily.temperature_2m_min[index])
      })),
      // Datos para el filtrado de PronosticoHora.vue
      hourlyRaw: weatherRes.hourly.time.map((t: string, idx: number) => ({
        fullDate: t,
        hora: t.split('T')[1],
        temp: Math.round(weatherRes.hourly.temperature_2m[idx])
      }))
    };
  } catch (e) {
    throw createError({ statusCode: 500, message: 'Error de servidor' });
  }
});