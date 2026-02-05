<script setup>
  // Definimos los eventos que este componente puede disparar
  const emit = defineEmits(['search'])

  // Definimos si está en estado de carga (opcional, para el botón)
  const props = defineProps({
    loading: Boolean
  })

  const query = ref('')

  // Función para enviar la búsqueda al padre
  const onSearch = () => {
    if (query.value.trim()) {
      emit('search', query.value)
    }
  }
</script>

<template>
  <div class="search-container">
    <div class="input-wrapper">
      <img src="/images/icon-search.svg" alt="Search" class="search-icon" />
      <input 
        v-model="query"
        type="text" 
        placeholder="Search for a place..." 
        class="search-input"
        @keyup.enter="onSearch"
      />
    </div>
    <button 
      class="search-button" 
      @click="onSearch"
      :disabled="loading"
    >
      {{ loading ? '...' : 'Search' }}
    </button>
  </div>
</template>

<style scoped>
  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  .input-wrapper {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .search-icon {
    position: absolute;
    left: 1.2rem;
    width: 20px;
    height: 20px;
    opacity: 0.6;
  }

  .search-input {
    width: 100%;
    padding: 1rem 1rem 1rem 3.5rem;
    background-color: #1e1e38;
    border: 1px solid #373752;
    border-radius: 12px;
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
  }

  .search-input:focus {
    border-color: #4c4cc9;
  }

  .search-button {
    background-color: #4c4cc9;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
  }

  .search-button:disabled {
    background-color: #373752;
    cursor: not-allowed;
    opacity: 0.7;
  }

  .search-button:hover:not(:disabled) {
    background-color: #3b3ba8;
  }

  @media (max-width: 600px) {
    .search-container { flex-direction: column; }
    .search-button { width: 100%; }
  }
</style>