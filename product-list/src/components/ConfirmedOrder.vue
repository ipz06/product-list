<template>
  <img :src="svgOrderConfirmed" alt="Icon" />
  <h1 class="order-confirmed-title">Order Confirmed</h1>
  <span>We hope you enjoy your food!</span>
  <ul class="order-items">
    <li
      v-for="item in cartItems"
      :key="item.id"
      class="cart-item-modal-container cart-item-container-border"
    >
      <img :src="item.thumbnail" alt="Thumbnail" class="order-thumbnail" />
      <div class="item-description">
        <h4>{{ item.name }}</h4>
        <div class="item-description-quantity">
          <h4 class="item-quantity">{{ item.quantity }}x</h4>
          <span class="cart-item-price">@ ${{ item.price.toFixed(2) }}</span>
        </div>
      </div>
      <h3>${{ (item.quantity * item.price).toFixed(2) }}</h3>
    </li>
  </ul>
  <div class="confirmed-order-total">
    <span>Order Total:</span>
    <h1>${{ totalPrice.toFixed(2) }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  totalPrice: {
    type: Number,
    required: true,
  },
  cartItems: {
    type: Object,
  },
})

const svgOrderConfirmed = ref(
  "data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z' fill='%231EA575'/%3E%3Cpath d='M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z' fill='%231EA575'/%3E%3C/svg%3E",
)
</script>

<style scoped lang="scss">
@use '../styles/styles.scss' as *; /* Import SCSS variables if needed */

.order-items {
  background-color: $rose100;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-top: 2rem;
}
.order-confirmed-title {
  font-size: xxx-large;
  color: $rose900;
  margin: 1rem 0;
}
span {
  color: $rose500;
}
ul {
  margin: 0;
  padding: 0;
}
.cart-item-modal-container {
  width: 100%;
  padding: 1.2rem 1.5rem;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  img {
    width: 20%;
  }
}
.cart-item-container-border::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 6%; /* Adjust for spacing */
  width: 87%; /* Adjust for width */
  border-bottom: 1.5px solid hsl(14, 25%, 85%);
}

.confirmed-order-total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  align-items: center;
  background-color: $rose100;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  margin-bottom: 2rem;
}

.item-description {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
}

.item-description h4 {
  font-weight: 600;
  color: $rose900;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Show "..." when text is cut off */
  max-width: 200px; /* Adjust as needed */
}
.item-description h4,
.item-description p {
  margin: 0; /* Remove default margins */
}

.item-description h4 {
  margin-bottom: 0.3rem; /* Custom spacing below the h4 */
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Show "..." when text is cut off */
  max-width: 200px; /* Adjust as needed */
}

.item-description p {
  margin-bottom: 0.2rem; /* Custom spacing below each paragraph */
}

.item-description-quantity {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}
.item-description-quantity h4 {
  color: $red;
}

.cart-item-modal-container h3 {
  font-weight: 600;
  color: $rose900;
  margin-left: auto;
}
</style>
