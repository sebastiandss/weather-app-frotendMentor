<template>
  <div> 
    <Cabeza />

    <section class="hero-section">
      <h1>How's the sky looking today?</h1>
    </section>

    <Buscador />

    <div class="weather-grid">
      <div class="main-content">
        <ContenedorWeatherApp />
        <EstadisticasWeather />
        <Semana />
      </div>

      <aside class="sidebar-content">
        <PronosticoHora />
      </aside>
    </div>
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
}

.weather-grid {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  align-items: stretch; 
  margin-top: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-content {
  height: 780px; /* Tamaño total solicitado */
  /* Bajamos el componente para que el 'top' coincida exactamente con el cuadro azul */
  margin-top: 1.5rem; 
}

@media (max-width: 1024px) {
  .weather-grid {
    grid-template-columns: 1fr;
  }
  .sidebar-content {
    height: auto;
    margin-top: 0; /* Quitamos el margen en móviles para evitar huecos extraños */
  }
}
</style>