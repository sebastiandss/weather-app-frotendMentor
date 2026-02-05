<script setup>
  // Definimos las props que el padre (ContenedorWeatherApp) le enviará
  const props = defineProps({
    ciudad: {
      type: String,
      default: 'Cargando...'
    },
    temperatura: {
      type: Number,
      default: 0
    },
    codigoClima: {
      type: Number,
      default: 0
    }
  })

  // Lógica para la fecha actual formateada
  // Ejemplo: "Wednesday, Feb 4, 2026"
  const fechaFormateada = computed(() => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', opciones).format(new Date());
  });
</script>

<template>
  <div class="weather-card">
    <img src="/images/bg-today-large.svg" alt="Background" class="card-bg" />

    <div class="card-content">
      <div class="location-info">
        <h2>{{ ciudad }}</h2>
        <p>{{ fechaFormateada }}</p>
      </div>

      <div class="temp-info">
        <img src="/images/icon-sunny.webp" alt="Sunny" class="weather-icon" />
        <span class="temperature">{{ Math.round(temperatura) }}°</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .weather-card {
    position: relative;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 16 / 5.5;
    display: flex;
    align-items: center;
    margin-top: 2rem; 
  }

  .card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .card-content {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 3rem 4rem; 
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .location-info h2 {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
  }

  .location-info p {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.1rem;
    opacity: 0.9;
  }

  .temp-info {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .weather-icon {
    width: 90px;
    height: 90px;
  }

  .temperature {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 6.5rem;
    font-weight: 800;
    line-height: 1;
  }

  /* Responsivo */
  @media (max-width: 1024px) {
    .temperature { font-size: 4.5rem; }
  }

  @media (max-width: 768px) {
    .card-content {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }
    .temperature { font-size: 4rem; }
  }
</style>