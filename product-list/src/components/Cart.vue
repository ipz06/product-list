<template>
    <img :src="`${imgSrc}`" alt="Image">
    <p> {{ category }}</p>
    <p>{{ name }}</p>
    <p>{{ price }}</p>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

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
  });

  onMounted(() => console.log("props", props.name, props.price, `${props.imgSrc}`))
</script>