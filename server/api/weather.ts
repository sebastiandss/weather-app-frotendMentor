export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  
  // Forzamos a que sea string. Si no viene nada, usamos 'Medellin'
  const locationName = String(query.name || 'Medellin'); 

  try {
    // Ahora encodeURIComponent no se quejará porque locationName es garantizadamente un string
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(locationName)}&count=1&language=es&format=json`;
    
    // ... resto del código
    const geoData: any = await $fetch(geoUrl);

    if (!geoData.results || geoData.results.length === 0) {
      throw createError({ statusCode: 404, statusMessage: 'Ubicación no encontrada' });
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // PASO 2: Obtener Clima con las coordenadas obtenidas
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,weathercode&timezone=auto`;
    const weatherData: any = await $fetch(weatherUrl);

    // PASO 3: Devolver un objeto limpio
    return {
      ubicacion: `${name}, ${country}`,
      actual: weatherData.current_weather,
      detalles: {
        latitud: latitude,
        longitud: longitude,
        zona_horaria: weatherData.timezone
      },
      // Enviamos las primeras 5 horas de pronóstico
      pronostico: weatherData.hourly.time.slice(0, 5).map((t: string, i: number) => ({
        hora: t.split('T')[1],
        temp: weatherData.hourly.temperature_2m[i]
      }))
    };

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error al procesar la solicitud del clima'
    });
  }
});