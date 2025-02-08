<template>
  <h1 class="title">Desserts</h1>
  <ul class="desserts-list">
    <li v-for="(desert, index) in cartItems" :key="index" class="dessert-item">
      <Cart
        :category="desert.category"
        :name="desert.name"
        :price="desert.price"
        :imgSrc="desert.image.desktop"
        :item="desert"
        :id="index.toString()"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import cartData from '../data/data.json'
import Cart from './Cart.vue'

const cartItems = ref(cartData)
</script>

<style>
.desserts-list {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next row */
  gap: 1rem;
  padding: 0;
  margin: 0; /* Remove default list margins */
  @media (max-width: 768px) {
    display: block;
  }
}

.dessert-item {
  flex: 1 1 calc(33.33% - 1.5rem); /* Each item takes 1/3 of the container minus gap */
  box-sizing: border-box; /* Includes padding in width */
  border-radius: 8px; /* Optional: Add rounded corners */
  text-align: center; /* Center content inside the item */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
  }
}
</style>
