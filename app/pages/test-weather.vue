<template>
  <div class="test-page">
    <div class="container">
      <h1>Buscador de Clima Global</h1>
      
      <div class="search-container">
        <input 
          v-model="inputCiudad" 
          @keyup.enter="buscar"
          placeholder="Ej: Colombia, Argentina o Medellín..." 
        />
        <button @click="buscar" :disabled="pending">
          {{ pending ? 'Buscando...' : 'Consultar' }}
        </button>
      </div>

      <p v-if="error" class="error-msg">No encontramos "{{ ciudadActiva }}". Intenta con otro nombre.</p>

      <div v-if="clima" class="results">
        <div class="card main-card">
          <h2>{{ clima.ubicacion }}</h2>
          <p class="temp">{{ clima.actual.temperature }}°C</p>
          <p>Lat: {{ clima.detalles.latitud }} | Lon: {{ clima.detalles.longitud }}</p>
        </div>

        <div class="card">
          <h3>Próximas horas</h3>
          <div class="hourly-list">
            <div v-for="h in clima.pronostico" :key="h.hora" class="hour-item">
              <span>{{ h.hora }}</span>
              <strong>{{ h.temp }}°</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const inputCiudad = ref('Medellin'); // Lo que el usuario escribe
const ciudadActiva = ref('Medellin'); // Lo que enviamos al API

// La llamada se refresca automáticamente cuando ciudadActiva cambia
const { data: clima, pending, error } = await useFetch(
  () => `/api/weather?name=${ciudadActiva.value}`,
  { watch: [ciudadActiva] }
);

function buscar() {
  if (inputCiudad.value.trim() !== '') {
    ciudadActiva.value = inputCiudad.value;
  }
}
</script>

<style scoped>
.test-page {
  min-height: 100vh;
  background-color: #1a202c; /* Un fondo oscuro para que resalten los datos */
  color: white;
  padding: 2rem;
}
.container { max-width: 600px; margin: 0 auto; }
.search-container { display: flex; gap: 10px; margin-bottom: 2rem; }
input { 
  flex: 1; padding: 12px; border-radius: 8px; border: none; font-size: 1rem; color: #333;
}
button { 
  padding: 12px 24px; border-radius: 8px; border: none; 
  background-color: #4299e1; color: white; cursor: pointer; font-weight: bold;
}
button:disabled { background-color: #718096; }
.card { 
  background: rgba(255,255,255,0.1); padding: 1.5rem; 
  border-radius: 16px; margin-bottom: 1rem; backdrop-filter: blur(10px);
}
.temp { font-size: 3rem; font-weight: bold; margin: 0.5rem 0; }
.hourly-list { display: flex; justify-content: space-between; margin-top: 1rem; }
.hour-item { text-align: center; }
.error-msg { color: #fc8181; background: rgba(252, 129, 129, 0.1); padding: 10px; border-radius: 8px; }
</style>