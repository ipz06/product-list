<script setup lang="ts">
import CartLayout from './components/CartLayout.vue'
import DessertsLayout from './components/DessertsLayout.vue'
</script>

<template>
  <main class="main">
    <section class="food-wrapper">
      <DessertsLayout />
    </section>
    <section class="cart-wrapper">
      <CartLayout />
    </section>
  </main>
</template>

<style scoped>
.main {
  padding: 3.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: nowrap;
  max-width: 100%;
  margin: 1.5rem;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: normal;
  }
  @media (max-width: 768px) {
    padding: 0;
    margin: 1rem;
    gap: 1rem;
    padding: 2rem;
  }
}

section {
  flex: 1;
}

.food-wrapper {
  max-width: 70%;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
}

.cart-wrapper {
  max-width: 30%;
  background-color: white;
  position: relative;
  border-radius: 15px;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
}
</style>
