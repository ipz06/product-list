<template>
    <button class="add-to-cart-button">
        <img :src="svgIcon" alt="Icon" class="icon">
        Add to Cart
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const svgIcon = ref("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3E%3Cg fill='%23C73B0F' clip-path='url(%23a)'%3E%3Cpath d='M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z'/%3E%3Cpath d='M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M.333 0h20v20h-20z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")
</script>

<style>
.icon {
    vertical-align: text-top;
    margin-right: .3rem;
}
</style>

