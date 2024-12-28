<template>
    <div>
        <div class="cart-item">
            <img :src="`${imgSrc}`" alt="Image">
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
import { onMounted } from 'vue';
import '../styles/styles.scss'
import AddToCartButton from './AddToCartButton.vue';
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