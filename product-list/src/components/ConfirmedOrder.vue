<template>
  <h1>Order Confirmed</h1>
  <span>We hope you enjoy your food!</span>
  <ul class="order-items">
    <li v-for="item in cartItems" :key="item.id" class="order-item">
      <img :src="item.thumbnail" alt="Thumbnail" class="order-thumbnail" />
      <div>
        <h4>{{ item.name }}</h4>
        <p>{{ item.quantity }} x ${{ item.price.toFixed(2) }}</p>
        <p>Total: ${{ (item.quantity * item.price).toFixed(2) }}</p>
      </div>
    </li>
  </ul>
  <div class="order-total">
    <h3>Order Total: ${{ totalPrice.toFixed(2) }}</h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  totalPrice: {
    type: Number,
    required: true,
  },
  cartItems: {
    type: Object,
  },
})
</script>
