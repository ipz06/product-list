<template>
  <li class="cart-item-container">
    <div>
      <h4>{{ name }}</h4>
      <div class="cart-item-details">
        <h4>{{ quantity }}x</h4>
        <span class="cart-item-price">@ ${{ price.toFixed(2) }}</span>
        <span class="cart-item-fin-price">${{ (quantity * price).toFixed(2) }}</span>
      </div>
    </div>
    <button class="delete-button" @click="deleteItem">
      <img :src="svgRemoveItemIcon" alt="Icon" />
    </button>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
const svgRemoveItemIcon = ref(
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='none' viewBox='0 0 10 10'%3E%3Cpath fill='%23CAAFA7' d='M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z'/%3E%3C/svg%3E",
)
interface Props {
  name: string
  price: number
  quantity: number
  id: string
}

const props = defineProps<Props>()

const cartStore = useCartStore()
const deleteItem = () => {
  cartStore.removeItem(props.id as string)
}
</script>

<style></style>
