<template>
    <h1 class="cart-title">Your Cart (0)</h1>
    <img :src="svgPath" alt="Image when the cart is empty" >
    <p class="cart-text">Your added items will appear here</p>
</template>

<script setup lang="ts">
import svgPath from '../../public/assets/images/illustration-empty-cart.svg'
</script>

