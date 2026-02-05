<template>
  <aside class="hourly-container">
    <div class="hourly-header">
      <h2 class="title">Hourly forecast</h2>
      
      <div class="day-selector">
        <button class="selector-button" @click="isOpen = !isOpen">
          <span>{{ selectedDay }}</span>
          <img src="/images/icon-dropdown.svg" alt="Arrow" :class="{ 'rotate': isOpen }" />
        </button>
        
        <ul v-if="isOpen" class="dropdown-list">
          <li v-for="day in days" :key="day" @click="selectDay(day)">
            {{ day }}
          </li>
        </ul>
      </div>
    </div>

    <div class="hours-list">
      <div v-for="item in hourlyData" :key="item.time" class="hour-row">
        <div class="hour-left">
          <img src="/images/icon-snow.webp" alt="Weather icon" class="small-icon" />
          <span class="time">{{ item.time }}</span>
        </div>
        <span class="temp">{{ item.temp }}°</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const selectedDay = ref('Tuesday')
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const selectDay = (day) => {
  selectedDay.value = day
  isOpen.value = false
}

// Datos de las 24 horas del día
const hourlyData = [
  { time: '12 AM', temp: 15 }, { time: '1 AM', temp: 14 }, { time: '2 AM', temp: 14 },
  { time: '3 AM', temp: 13 }, { time: '4 AM', temp: 13 }, { time: '5 AM', temp: 12 },
  { time: '6 AM', temp: 12 }, { time: '7 AM', temp: 13 }, { time: '8 AM', temp: 14 },
  { time: '9 AM', temp: 16 }, { time: '10 AM', temp: 18 }, { time: '11 AM', temp: 19 },
  { time: '12 PM', temp: 20 }, { time: '1 PM', temp: 21 }, { time: '2 PM', temp: 22 },
  { time: '3 PM', temp: 22 }, { time: '4 PM', temp: 21 }, { time: '5 PM', temp: 20 },
  { time: '6 PM', temp: 19 }, { time: '7 PM', temp: 18 }, { time: '8 PM', temp: 17 },
  { time: '9 PM', temp: 16 }, { time: '10 PM', temp: 16 }, { time: '11 PM', temp: 15 }
]
</script>

<style scoped>
.hourly-container {
  background-color: #1e1e38;
  border: 1px solid #373752;
  border-radius: 12px;
  padding: 1.5rem;
  /* Altura fija para alinear con los componentes de la izquierda */
  height: 780px; 
  display: flex;
  flex-direction: column;
}

.hourly-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-shrink: 0;
}

.title {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
}

/* --- Selector de Día (Dropdown) --- */
.day-selector {
  position: relative;
}

.selector-button {
  background-color: #2a2a4a;
  border: 1px solid #373752;
  color: #8e8ea0;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Tamaño fijo para evitar que el contenedor se mueva al cambiar de día */
  width: 130px; 
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  transition: all 0.3s;
}

.selector-button span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.selector-button img {
  width: 10px;
  transition: transform 0.3s;
}

.rotate {
  transform: rotate(180deg);
}

.dropdown-list {
  position: absolute;
  top: 110%;
  right: 0;
  width: 100%;
  background-color: #1e1e38;
  border: 1px solid #373752;
  border-radius: 8px;
  list-style: none;
  z-index: 100;
  padding: 0.5rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.dropdown-list li {
  padding: 0.5rem 1rem;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: 'DM Sans', sans-serif;
}

.dropdown-list li:hover {
  background-color: #2a2a4a;
}

/* --- Lista de Horas con Scroll --- */
.hours-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 0.5rem;
}

/* Personalización del Scrollbar */
.hours-list::-webkit-scrollbar {
  width: 5px;
}
.hours-list::-webkit-scrollbar-thumb {
  background: #373752;
  border-radius: 10px;
}

.hour-row {
  background-color: #242442;
  border: 1px solid #373752;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.hour-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.small-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.time {
  font-family: 'DM Sans', sans-serif;
  color: #ffffff;
  font-size: 0.95rem;
}

.temp {
  font-family: 'Bricolage Grotesque', sans-serif;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
}
</style>