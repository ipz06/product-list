<script setup lang="ts">
import CartLayout from './components/CartLayout.vue';
import DessertsLayout from './components/DessertsLayout.vue';

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
}

section {
  flex: 1;
}

.food-wrapper {
  max-width: 70%;
}

.cart-wrapper{
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
}
</style>
