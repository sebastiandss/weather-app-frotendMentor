<template>
  <aside class="hourly-container">
    <div class="hourly-header">
      <h2 class="title">Hourly forecast</h2>
      
      <div class="day-selector">
        <button class="selector-button" @click="isOpen = !isOpen">
          <span>{{ selectedDayName }}</span>
          <img src="/images/icon-dropdown.svg" alt="Arrow" :class="{ 'rotate': isOpen }" />
        </button>
        
        <ul v-if="isOpen" class="dropdown-list">
          <li v-for="day in diasDisponibles" :key="day.date" @click="selectDay(day)">
            {{ day.name }}
          </li>
        </ul>
      </div>
    </div>

    <div class="hours-list">
      <div v-for="item in horasFiltradas" :key="item.fullDate" class="hour-row">
        <div class="hour-left">
          <img src="/images/icon-sunny.webp" alt="Weather icon" class="small-icon" />
          <span class="time">{{ formatearHora(item.hora) }}</span>
        </div>
        <span class="temp">{{ item.temp }}°</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
    const props = defineProps({
        hourlyData: { type: Array, default: () => [] },
        diasDisponibles: { type: Array, default: () => [] }
    })

    const isOpen = ref(false)
    const selectedDayDate = ref('')
    const selectedDayName = ref('Today')

    watch(() => props.diasDisponibles, (newVal) => {
        if (newVal.length > 0 && !selectedDayDate.value) {
            selectedDayDate.value = newVal[0].date
            selectedDayName.value = newVal[0].name
        }
    }, { immediate: true })

    const selectDay = (day) => {
        selectedDayDate.value = day.date
        selectedDayName.value = day.name
        isOpen.value = false
    }

    const horasFiltradas = computed(() => {
        if (!selectedDayDate.value) return []
        return props.hourlyData.filter(h => h.fullDate.startsWith(selectedDayDate.value))
    })

    const formatearHora = (horaRaw) => {
        const h = parseInt(horaRaw.split(':')[0]);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        return `${h12} ${ampm}`;
    }
</script>

<style scoped>
    .hourly-container {
        background-color: #1e1e38;
        border: 1px solid #373752;
        border-radius: 12px;
        padding: 1.5rem;
        height: 780px; 
        display: flex;
        flex-direction: column;
    }

    .hourly-header {
        display: flex;
        flex-direction: row; /* Asegura disposición horizontal */
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        width: 100%;
    }

    .title {
        font-family: 'DM Sans', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        color: #ffffff;
        margin: 0;
    }

    .day-selector {
        position: relative;
    }

    .selector-button {
        background-color: #2a2a4a;
        border: 1px solid #373752;
        color: #8e8ea0;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        flex-direction: row; /* Contenido del botón horizontal */
        align-items: center;
        gap: 0.8rem;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.85rem;
        transition: all 0.3s;
    }

    .rotate {
        transform: rotate(180deg);
    }

    .dropdown-list {
        position: absolute;
        top: 110%;
        right: 0;
        width: 160px; /* Un poco más ancho para nombres largos */
        background-color: #1e1e38;
        border: 1px solid #373752;
        border-radius: 8px;
        list-style: none;
        z-index: 100;
        padding: 0.5rem 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    .dropdown-list li {
        padding: 0.6rem 1rem;
        color: #ffffff;
        cursor: pointer;
        font-size: 0.85rem;
    }

    .dropdown-list li:hover {
        background-color: #2a2a4a;
    }

    .hours-list {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        overflow-y: auto;
        padding-right: 4px;
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
    }

    /* Scroll casi invisible */
    .hours-list::-webkit-scrollbar { width: 4px; }
    .hours-list::-webkit-scrollbar-track { background: transparent; }
    .hours-list::-webkit-scrollbar-thumb { background: rgba(55, 55, 82, 0.2); border-radius: 10px; }
    .hours-list:hover::-webkit-scrollbar-thumb { background: rgba(55, 55, 82, 0.5); }

    .hour-row {
        background-color: #242442;
        border: 1px solid #373752;
        border-radius: 12px;
        padding: 0.8rem 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .hour-left {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    .small-icon { 
        width: 24px; height: 24px; 
    }
    .time { 
        color: #ffffff; font-size: 0.95rem; 
    }   
    .temp { 
        font-family: 'Bricolage Grotesque', sans-serif; color: #ffffff; font-size: 1.1rem; font-weight: 700; 
    }
</style>