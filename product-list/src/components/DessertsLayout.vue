<template>
  <div v-for="(desert, index) in cartItems" :key="index">
    <Cart 
    :category="desert.category"
    :name="desert.name" 
    :price="desert.price"
    :imgSrc="desert.image.desktop"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import cartData from '../data/data.json'
import Cart from './Cart.vue';

const cartItems = ref(cartData)
onMounted(() => console.log("data", cartItems.value))
</script>
