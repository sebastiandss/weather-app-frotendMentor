<template>
  <div class="search-container">
    <div class="input-wrapper">
      <img src="/images/icon-search.svg" alt="Search" class="search-icon" />
      <input 
        type="text" 
        placeholder="Search for a place..." 
        class="search-input"
      />
    </div>
    <button class="search-button">
      Search
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

.search-input::placeholder {
  color: #8e8ea0;
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
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #3b3ba8;
}

/* Responsivo para móviles */
@media (max-width: 600px) {
  .search-container {
    flex-direction: column;
  }
  
  .search-button {
    width: 100%;
  }
}
</style>