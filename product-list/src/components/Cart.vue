<template>
    <div>
        <div class="cart-item">
            <img 
            :src="`${imgSrc}`" 
            alt="Image"
            :class="{'in-cart' : isInCart}"
            >
            <AddToCartButton :id="id" :item="item" />
        </div>
        <div class="cart-content">
            <p class="category"> {{ category }}</p>
            <h3 class="name">{{ name }}</h3>
            <p class="price">${{ price.toFixed(2) }}</p>  
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import '../styles/styles.scss'
import AddToCartButton from './AddToCartButton.vue';
import { useCartStore } from '@/stores/cart';


const props = defineProps({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    item: {
        type: Object,
    },
    id: {
        type: String,
    },
  });

  const cartStore = useCartStore()
  const isInCart = computed(() => {
    return cartStore.cartItems.some(cartItem => cartItem.id === props.id);
});

  onMounted(() => console.log("props", props.name, props.item, props.id))
</script>

<style>
.cart-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 260px;
}

.cart-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1.5rem;
}

.cart-item img {
    border-radius: 12px;
}

</style>