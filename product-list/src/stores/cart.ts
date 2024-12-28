import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartItem } from '@/types/CartItems';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([]);

  const addItem = (item: CartItem):void => {
    const existingItem = cartItems.value.find((i) => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cartItems.value.push(item)
    }

    console.log('Cart Items:', cartItems.value);
  }

  const updateItem = (id:string, quantity:number) => {
    const item = cartItems.value.find((i) => i.id === id);
    if (item) {
      if (quantity > 0) {
        item.quantity = quantity;
      } else {
        cartItems.value = cartItems.value.filter((i) => i.id !== id);
      }
    }
  }

  const totalItems = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0));

  return { cartItems, addItem, updateItem, totalItems }
})
