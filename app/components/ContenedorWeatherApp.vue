<template>
  <div class="weather-card">
    <img src="/images/bg-today-large.svg" alt="Background" class="card-bg" />

    <div class="card-content">
      <div class="location-info">
        <h2>Berlin, Germany</h2>
        <p>Tuesday, Aug 5, 2025</p>
      </div>

      <div class="temp-info">
        <img src="/images/icon-sunny.webp" alt="Sunny" class="weather-icon" />
        <span class="temperature">20°</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-card {
  position: relative;
  width: 100%;
  border-radius: 12px; /* Bordes un poco más finos según la imagen */
  overflow: hidden;
  aspect-ratio: 16 / 5.5; /* Ajuste de altura para que no sea tan alto */
  display: flex;
  align-items: center;
  /* Margen superior para separarlo del buscador */
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
  /* Padding más generoso para que el texto no esté pegado al borde del SVG */
  padding: 3rem 4rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.location-info h2 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 2.2rem; /* Un poco más grande para jerarquía */
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
  /* Tamaño ajustado para que el sol brille pero no opaque el texto */
  width: 90px;
  height: 90px;
}

.temperature {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 6.5rem; /* Tamaño masivo como en el diseño original */
  font-weight: 800;
  line-height: 1;
}

/* Responsivo */
@media (max-width: 1024px) {
  .card-content {
    padding: 2rem;
  }
  .temperature {
    font-size: 4.5rem;
  }
}

@media (max-width: 768px) {
  .card-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  .temperature {
    font-size: 4rem;
  }
}
</style>