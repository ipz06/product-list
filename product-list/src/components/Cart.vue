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
import { onMounted, computed } from 'vue'
import '../styles/styles.scss'
import AddToCartButton from './AddToCartButton.vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
  },
  id: {
    type: String,
  },
})

const cartStore = useCartStore()
const isInCart = computed(() => {
  return cartStore.cartItems.some((cartItem) => cartItem.id === props.id)
})

onMounted(() => console.log('props', props.name, props.item, props.id))
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
