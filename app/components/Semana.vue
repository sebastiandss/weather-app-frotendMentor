<template>
  <section class="daily-forecast">
    <h2 class="section-title">Daily forecast</h2>
    
    <div class="days-grid">
      <div v-for="day in pronosticoSemanal" :key="day.name" class="day-card">
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
const props = defineProps({
  pronosticoSemanal: {
    type: Array,
    required: true,
    default: () => []
  }
})
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
    margin-bottom: 2rem; 
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
    flex: 1; 
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
    align-items: center; 
    justify-content: space-between; 
    width: 100%; 
    padding: 0 10px; 
  }
  .temp-max { 
    font-family: 'DM Sans', sans-serif; 
    color: #ffffff; font-size: 1rem; 
    font-weight: 700; 
  }
  .temp-min { 
    font-family: 'DM Sans', sans-serif; 
    color: #8e8ea0; 
    font-size: 0.85rem; 
    font-weight: 500; 
  }

  @media (max-width: 768px) {
    .days-grid { overflow-x: auto; padding-bottom: 1rem; }
  }
</style>