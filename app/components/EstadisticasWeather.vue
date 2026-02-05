<script setup>
  const props = defineProps({
    sensacion: { type: Number, default: 0 },
    humedad: { type: Number, default: 0 },
    viento: { type: Number, default: 0 },
    precipitacion: { type: Number, default: 0 }
  })
</script>

<template>
  <div class="stats-grid">
    <div class="stat-card">
      <p class="stat-label">Feels Like</p>
      <h3 class="stat-value">{{ Math.round(sensacion || 0) }}°</h3>
    </div>
    <div class="stat-card">
      <p class="stat-label">Humidity</p>
      <h3 class="stat-value">{{ humedad || 0 }}%</h3>
    </div>
    <div class="stat-card">
      <p class="stat-label">Wind</p>
      <h3 class="stat-value">{{ Math.round(viento || 0) }} <span class="unit">km/h</span></h3>
    </div>
    <div class="stat-card">
      <p class="stat-label">Precipitation</p>
      <h3 class="stat-value">{{ precipitacion || 0 }} <span class="unit">mm</span></h3>
    </div>
  </div>
</template>

<style scoped>
  .stats-grid { 
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 2rem; 
  }
  .stat-card { 
    background-color: #1e1e38; border: 1px solid #373752; border-radius: 12px; padding: 1.8rem 1.5rem; 
  }
  .stat-label { 
    font-family: 'DM Sans', sans-serif; color: #8e8ea0; font-size: 0.85rem; margin-bottom: 0.6rem; 
  }
  .stat-value { 
    font-family: 'Bricolage Grotesque', sans-serif; color: #ffffff; font-size: 2rem; font-weight: 700; 
  }
  .unit { 
    font-size: 1rem; color: #8e8ea0; 
  }
  @media (max-width: 1024px) { 
    .stats-grid { 
      grid-template-columns: repeat(2, 1fr); 
    } 
  }
  @media (max-width: 480px) { 
    .stats-grid { grid-template-columns: 1fr; 
    } 
  }
</style>