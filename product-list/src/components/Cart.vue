// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <div class="cart-item">
      <img :src="`${imgSrc}`" alt="Image" :class="{ 'in-cart': isInCart }" />
      <AddToCartButton :id="id" :item="item" />
    </div>
    <div class="cart-content">
      <p class="category">{{ category }}</p>
      <h3 class="name">{{ name }}</h3>
      <p class="price">${{ price.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import '../styles/styles.scss'
import AddToCartButton from './AddToCartButton.vue'
import { useCartStore } from '@/stores/cart'
import type { Item } from '@/types/CartItems'

interface Props {
  name: string
  price: number
  category: string
  imgSrc: string
  item: Item
  id: string
}

const props = defineProps<Props>()

const cartStore = useCartStore()
const isInCart = computed<boolean>(() => {
  return cartStore.cartItems.some((cartItem) => cartItem.id === props.id)
})
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 260px;
  @media (max-width: 768px) {
    max-width: 600px;
  }
}

.cart-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1.5rem 0;
}

.cart-item img {
  border-radius: 12px;
}

@media (max-width: 768px) {
  .cart-item img {
    width: 100%; /* Set the width to 100% of the container */
    height: auto; /* Maintain the aspect ratio */
    aspect-ratio: 4 / 3; /* Set the desired aspect ratio (width:height) */
  }
}
</style>
