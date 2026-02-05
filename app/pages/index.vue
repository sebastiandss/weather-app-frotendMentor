<script setup>
  const ciudadActiva = ref('Medellin');

  // useFetch observa 'ciudadActiva'. Si cambia, todo se actualiza.
  const { data: clima, pending, error } = await useFetch(
    () => `/api/weather?name=${ciudadActiva.value}`,
    { watch: [ciudadActiva], key: 'weather-main' }
  );

  const realizarBusqueda = (nuevaCiudad) => {
    if (nuevaCiudad) ciudadActiva.value = nuevaCiudad;
  };
</script>

<template>
  <div class="app-container"> 
    <Cabeza />

    <section class="hero-section">
      <h1>How's the sky looking today?</h1>
    </section>

    <Buscador @search="realizarBusqueda" :loading="pending" />

    <div v-if="clima && !pending" class="weather-grid">
      <div class="main-content">
        <ContenedorWeatherApp 
          :ciudad="clima.ubicacion" 
          :temperatura="clima.actual.temp" 
          :codigo="clima.actual.codigo"
        />
        
        <EstadisticasWeather 
          :sensacion="clima.actual.sensacion"
          :humedad="clima.actual.humedad"
          :viento="clima.actual.viento"
          :precipitacion="clima.actual.precipitacion"
        />
        
        <Semana :pronostico-semanal="clima.semana" />
      </div>

      <aside class="sidebar-content">
        <PronosticoHora 
          :hourly-data="clima.hourlyRaw" 
          :dias-disponibles="clima.semana" 
        />
      </aside>
    </div>

    <div v-if="pending" class="status-msg">Actualizando datos...</div>
    <div v-if="error" class="status-msg error">Ciudad no encontrada. Intenta de nuevo.</div>
  </div>
</template>

<style scoped>
  .hero-section { 
    text-align: center; 
    margin: 4rem 0 2rem 0; 
  }
  .hero-section h1 { 
    font-family: 'Bricolage Grotesque', sans-serif; 
    font-size: clamp(2rem, 5vw, 3.5rem); 
    font-weight: 800; 
    color: white; 
  }
  .weather-grid { 
    display: grid; 
    grid-template-columns: 1fr 350px; 
    gap: 2rem; 
    margin-top: 2rem; 
  }
  .main-content { 
    display: flex; 
    flex-direction: column; 
    gap: 1.5rem; 
  }
  .sidebar-content { 
    height: 780px; 
    margin-top: 1.5rem; 
  }
  .status-msg { 
    text-align: center; 
    padding: 5rem; 
    color: white; 
    font-size: 1.2rem;
  }
  @media (max-width: 1024px) { 
    .weather-grid { 
      grid-template-columns: 1fr; 
      } 
    }
</style>