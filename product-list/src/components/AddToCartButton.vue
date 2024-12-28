<template>
  <button v-if="!isInCart" class="add-to-cart-button" @click="activateCart">
    <img :src="svgIcon" alt="Icon" class="icon" />
    <span>Add to Cart</span>
  </button>
  <div v-if="isInCart" class="add-to-cart-button icon-quantity" :class="{ active: isActive }">
    <button @click="decrement">
      <img :src="svgIconDecrement" alt="Icon" class="icon" />
    </button>
    <span>{{ count }}</span>
    <button @click="increment">
      <img :src="svgIconIncrement" alt="Icon" class="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { ref, computed } from 'vue'
import type { CartItem } from '@/types/CartItems'
const svgIcon = ref(
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3E%3Cg fill='%23C73B0F' clip-path='url(%23a)'%3E%3Cpath d='M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z'/%3E%3Cpath d='M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M.333 0h20v20h-20z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
)
const svgIconIncrement = ref(
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='none' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z'/%3E%3C/svg%3E",
)
const svgIconDecrement = ref(
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none' viewBox='0 0 10 2'%3E%3Cpath fill='%23fff' d='M0 .375h10v1.25H0V.375Z'/%3E%3C/svg%3E",
)

const props = defineProps<{
  item: {
    name: string
    price: number
    image: {
      thumbnail: string
    }
  }
  id: string
}>()

const isActive = ref(false)
const count = ref(0)
const cartStore = useCartStore()

const foodItem: Omit<CartItem, 'quantity'> = {
  id: props.id,
  name: props.item.name,
  price: props.item.price,
  thumbnail: props.item.image.thumbnail,
}

const isInCart = computed(() => {
  const item = cartStore.cartItems.find((item) => item.id === props.id)
  if (item) {
    return true
  }
  return false
})
const activateCart = () => {
  isActive.value = true
  count.value = 1
  cartStore.addItem({ ...foodItem, quantity: 1 })
}
const increment = () => {
  isActive.value = true
  count.value = count.value + 1
  cartStore.updateItem(foodItem.id, count.value)
}

const decrement = () => {
  if (count.value > 0) count.value = count.value - 1
  if (count.value === 0) isActive.value = false
  cartStore.updateItem(foodItem.id, count.value)
}
</script>

<style>
.icon {
  vertical-align: text-top;
  margin-right: 0.3rem;
}

.icon-quantity {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  .icon {
    margin-right: 0;
    vertical-align: middle;
  }
}
.icon-quantity button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px; /* Set a fixed size for the circle */
  height: 20px;
  border: 1px solid #fff; /* White border for the circle */
  border-radius: 50%; /* Makes the button a circle */
  padding: 0; /* Remove extra padding */
  cursor: pointer;
}
</style>
