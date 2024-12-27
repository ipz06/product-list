<template>
  <h1>Desserts</h1>
  <ul class="desserts-list">
    <li v-for="(desert, index) in cartItems" :key="index" class="dessert-item">
      <Cart 
      :category="desert.category"
      :name="desert.name" 
      :price="desert.price"
      :imgSrc="desert.image.desktop"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import cartData from '../data/data.json'
import Cart from './Cart.vue';

const cartItems = ref(cartData)
onMounted(() => console.log("data", cartItems.value))
</script>

<style>
.desserts-list {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next row */
  gap: 1rem;
  padding: 0;
  margin: 0; /* Remove default list margins */
}

.dessert-item {
  flex: 1 1 calc(33.33% - 1.5rem); /* Each item takes 1/3 of the container minus gap */
  box-sizing: border-box; /* Includes padding in width */
  background: #f9f9f9; /* Optional: Add background */
  padding: 1rem; /* Optional: Add padding */
  border-radius: 8px; /* Optional: Add rounded corners */
  text-align: center; /* Center content inside the item */
}
</style>
