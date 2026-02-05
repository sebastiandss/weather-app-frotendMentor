<template>
  <div class="layout-wrapper">
    <div class="main-container">
      <slot />
    </div>
  </div>
</template>

<style>
/* El wrapper mantiene el fondo oscuro en TODA la pantalla */
.layout-wrapper {
  background-color: #05051e;
  min-height: 100vh;
  width: 100%;
}

/* El container es el que crea el "cuadro enorme" centrado */
.main-container {
  max-width: 1280px;
  margin: 0 auto; /* Centra el cuadro */
  padding: 0 2rem; /* Espacio de seguridad en los bordes */
}

body {
  margin: 0;
  background-color: #05051e;
}
</style>