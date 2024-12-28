<template>
    <h1 class="cart-title">Your Cart ({{ totalItems }})</h1>
    <template v-if="totalItems === 0">
      <img :src="svgPath" alt="Image when the cart is empty" >
      <p class="cart-text">Your added items will appear here</p>
    </template>
    <template v-else>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          <h4>{{ item.name }}</h4>
          <span>{{ item.quantity }}x</span>
          <span>@ ${{ item.price }}</span>
          <span>${{ item.quantity * item.price }}</span>
        </li>
      </ul>
    </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import svgPath from '../../public/assets/images/illustration-empty-cart.svg'
const cartStore = useCartStore();
const totalItems = computed(() => cartStore.totalItems);
const cartItems = computed(() => cartStore.cartItems);
</script>

