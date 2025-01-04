<template>
  <dialog ref="dialogRef">
    
    <slot />
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogRef = ref<HTMLDialogElement | null>(null);
const showDialog = () => dialogRef.value?.showModal();
const closeDialog = () => dialogRef.value?.close();

defineExpose({
  show: showDialog,
  close: closeDialog,
});

</script>
