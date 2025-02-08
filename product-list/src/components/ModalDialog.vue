<template>
  <dialog ref="dialogRef" @close="handleClose">
    <slot />
  </dialog>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'

const dialogRef = ref<HTMLDialogElement | null>(null)
const showDialog = () => dialogRef.value?.showModal()
const closeDialog = () => dialogRef.value?.close()

defineExpose({
  show: showDialog,
  close: closeDialog,
})

const emit = defineEmits(['modal-closed'])
const handleClose = () => {
  emit('modal-closed')
}
</script>

<style scoped lang="scss">
/* Remove the default border */
dialog {
  border: none;
  padding: 1.5rem;
  border-radius: 12px; /* Optional: for rounded corners */
  width: 60vw;
  max-width: 500px;
}

/* Adjust for smaller screens */
@media (max-width: 768px) {
  dialog {
    width: calc(100vw - 1px);
    max-width: 100%;
    height: auto;
    max-height: 90vh; /* Prevent full height */
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    padding: 1.5rem;
    margin: 0;
    overflow: hidden;
    box-sizing: border-box;
    overflow-y: auto;
  }
}

/* Adjust for larger screens */
@media (min-width: 1024px) {
  dialog {
    width: 40vw;
    max-width: 600px;
  }
}
</style>
