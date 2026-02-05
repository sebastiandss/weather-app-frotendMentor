<template>
  <header class="header">
    <div class="logo-container">
      <img src="/images/logo.svg" alt="Weather Now Logo" class="logo-img" />
    </div>

    <div class="dropdown-wrapper">
      <button class="units-button" @click="isOpen = !isOpen">
        <img src="/images/icon-units.svg" alt="Units" class="units-icon" />
        <span>Units</span>
        <img src="/images/icon-dropdown.svg" alt="Arrow" class="dropdown-arrow" :class="{ 'rotate': isOpen }" />
      </button>

      <ul v-if="isOpen" class="dropdown-menu">
        <li @click="isOpen = false">Metric (Celsius)</li>
        <li @click="isOpen = false">Imperial (Fahrenheit)</li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  margin: 0px 0px 0px 0px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-img {
  width: 200px;
  height: 32px;
}

.logo-text {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
}

.dropdown-wrapper {
  position: relative;
}

.units-button {
  background-color: #1e1e38;
  border: 1px solid #373752;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.3s;
}

.dropdown-arrow {
  width: 12px;
  transition: transform 0.3s ease;
}

.dropdown-arrow.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 110%;
  right: 0;
  background-color: #1e1e38;
  border: 1px solid #373752;
  border-radius: 8px;
  list-style: none;
  padding: 0.5rem 0;
  width: 160px;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-menu li:hover {
  background-color: #2a2a4a;
}

.units-icon {
  width: 18px;
  height: 18px;
}
</style>