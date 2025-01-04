<template>
  <h1 class="cart-title">Your Cart ({{ totalItems }})</h1>
  <template v-if="totalItems === 0">
    <img :src="svgPath" alt="Image when the cart is empty" />
    <p class="cart-text">Your added items will appear here</p>
  </template>
  <template v-else>
    <ul class="item-for-order">
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :quantity="item.quantity"
      />
    </ul>
    <div class="order-total">
      <span>Order Total</span>
      <h3>${{ totalPrice.toFixed(2) }}</h3>
    </div>
    <div class="carbon-neutral">
      <img :src="svgIconCarbonNeutral" alt="Icon" />
      <span>This is <strong class="bold-text">carbon-neutral</strong> delivery</span>
    </div>
    <button class="confirm-order-button" @click="showDialog">Confirm Order</button>
    <ModalDialog ref="dialogTarget">
      <p>Greetings, one and all!</p>
      <form method="dialog">
        <button>Start New Order</button>
      </form>
    </ModalDialog>
  </template>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import svgPath from '../../public/assets/images/illustration-empty-cart.svg'
import CartItem from './CartItem.vue'
import ModalDialog from './ModalDialog.vue'

const svgIconCarbonNeutral = ref(
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3E%3Cpath fill='%231EA575' d='M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z'/%3E%3Cpath fill='%231EA575' d='M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z'/%3E%3C/svg%3E",
)
const cartStore = useCartStore()
const totalItems = computed(() => cartStore.totalItems)
const cartItems = computed(() => cartStore.cartItems)
const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.quantity * item.price, 0),
)

const dialogTarget = ref<InstanceType<typeof ModalDialog>>()
const showDialog = () => dialogTarget.value?.show()
</script>

<style>
.item-for-order {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: auto;
  padding: unset;
  margin-left: 1.5rem;
  width: 100%;
}

.order-total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin-right: auto;
  margin-left: 1.5rem;
  padding: unset;
  align-items: center;
}
</style>
