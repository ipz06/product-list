<template>
  <dialog ref="dialogRef" @close="handleClose">
    
    <slot />
  </dialog>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue';

const dialogRef = ref<HTMLDialogElement | null>(null);
const showDialog = () => dialogRef.value?.showModal();
const closeDialog = () => dialogRef.value?.close();

defineExpose({
  show: showDialog,
  close: closeDialog,
});

const emit = defineEmits(['modal-closed']);
const handleClose = () => {
  emit('modal-closed');
}
</script>
