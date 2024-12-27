<template>
  <div>
    <h1>Your cart</h1>
    <img :src="svgPath" alt="Image when the cart is empty" >
    <p>Your image will appear here</p>
  </div>
</template>

<script setup lang="ts">
import svgPath from '../../public/assets/images/illustration-empty-cart.svg'
</script>
