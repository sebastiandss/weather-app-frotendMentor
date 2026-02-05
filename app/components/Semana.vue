<template>
  <section class="daily-forecast">
    <h2 class="section-title">Daily forecast</h2>
    
    <div class="days-grid">
      <div v-for="day in forecastData" :key="day.name" class="day-card">
        <span class="day-name">{{ day.name }}</span>
        
        <img src="/images/icon-snow.webp" alt="Weather icon" class="day-icon" />
        
        <div class="day-temps">
          <span class="temp-max">{{ day.max }}°</span>
          <span class="temp-min">{{ day.min }}°</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    // Datos basados en la imagen de referencia
    const forecastData = [
        { name: 'Tue', max: 20, min: 14 },
        { name: 'Wed', max: 21, min: 15 },
        { name: 'Thu', max: 24, min: 14 },
        { name: 'Fri', max: 25, min: 13 },
        { name: 'Sat', max: 21, min: 15 },
        { name: 'Sun', max: 25, min: 16 },
        { name: 'Mon', max: 24, min: 15 }
    ]
</script>

<style scoped>
.daily-forecast {
  width: 100%;
  margin-top: 1rem;
}

.section-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  margin: 0px 0px 40px 0px;
}

.days-grid {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.day-card {
  background-color: #1e1e38;
  border: 1px solid #373752;
  border-radius: 12px;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  flex: 1; /* Hace que todos los cuadros tengan el mismo ancho */
  min-width: 80px;
}

.day-name {
  font-family: 'DM Sans', sans-serif;
  color: #8e8ea0;
  font-size: 0.85rem;
  font-weight: 600;
}

.day-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.day-temps {
  display: flex;
  flex-direction: row; /* Cambiado de column a row */
  align-items: center;
  justify-content: space-between; /* Distribuye las temperaturas a los extremos */
  width: 100%; /* Necesario para que el space-between tenga espacio que repartir */
  padding: 0 10px; /* Un poco de aire para que no peguen a los bordes de la tarjeta */
  gap: 0.5rem;
}

.temp-max {
  font-family: 'DM Sans', sans-serif;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
}

.temp-min {
  font-family: 'DM Sans', sans-serif;
  color: #8e8ea0;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Responsivo para no romper el flex */
@media (max-width: 768px) {
  .days-grid {
    overflow-x: auto; /* Permite scroll horizontal si no caben */
    padding-bottom: 1rem;
  }
}
</style>