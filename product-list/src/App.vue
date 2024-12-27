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
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  flex-wrap: nowrap;
  max-width: 100%;
}

section {
  flex: 1;
}

.food-wrapper {
  max-width: 70%;
}

.cart-wrapper{
  max-width: 30%;
}
</style>
