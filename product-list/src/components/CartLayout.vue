<template>
    <h1 class="cart-title">Your Cart ({{ totalItems }})</h1>
    <template v-if="totalItems === 0">
      <img :src="svgPath" alt="Image when the cart is empty" >
      <p class="cart-text">Your added items will appear here</p>
    </template>
    <template v-else>
      <ul class="item-for-order">
        <CartItem
        v-for="item in cartItems" 
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :quantity="item.quantity"
        />
      </ul>
      <h3>Order Total ${{ totalPrice.toFixed(2) }}</h3>
      <button class="confirm-order-button">Confirm Order</button>
    </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import svgPath from '../../public/assets/images/illustration-empty-cart.svg'
import CartItem from './CartItem.vue';
const cartStore = useCartStore();
const totalItems = computed(() => cartStore.totalItems);
const cartItems = computed(() => cartStore.cartItems);
const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity * item.price, 0))
</script>

<style>

.item-for-order {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: auto;
  padding: unset;
  margin-left: 1.5rem;
}
</style>

