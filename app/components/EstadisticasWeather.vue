<template>
  <div class="stats-grid">
    <div class="stat-card">
      <p class="stat-label">Feels Like</p>
      <h3 class="stat-value">18°</h3>
    </div>

    <div class="stat-card">
      <p class="stat-label">Humidity</p>
      <h3 class="stat-value">46%</h3>
    </div>

    <div class="stat-card">
      <p class="stat-label">Wind</p>
      <h3 class="stat-value">14 km/h</h3>
    </div>

    <div class="stat-card">
      <p class="stat-label">Precipitation</p>
      <h3 class="stat-value">0 mm</h3>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* Espaciado entre las 4 cajas */
  gap: 1.5rem;
  width: 100%;
  /* Margen superior para separarlo del MainWeatherCard */
  margin-top: 2rem; 
}

.stat-card {
  background-color: #1e1e38;
  border: 1px solid #373752;
  /* Redondeo de 12px para coincidir con el cuadro de arriba */
  border-radius: 12px;
  /* Aumentamos el padding para que el contenido respire mejor */
  padding: 1.8rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-label {
  font-family: 'DM Sans', sans-serif;
  color: #8e8ea0;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.6rem;
  text-transform: capitalize;
}

.stat-value {
  font-family: 'Bricolage Grotesque', sans-serif;
  color: #ffffff;
  /* Un poco más de tamaño para que resalten los datos */
  font-size: 2rem;
  font-weight: 700;
}

/* Responsivo */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>