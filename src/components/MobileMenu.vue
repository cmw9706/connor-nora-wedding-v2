<template>
  <div @click="$emit('toggle')" class="space-y-2">
    <div class="rounded w-8 h-0.5 bg-primary-gold"></div>
    <div class="rounded w-8 h-0.5 bg-primary-gold"></div>
    <div class="rounded w-8 h-0.5 bg-primary-gold"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MobileMenu.vue",
});
</script>

<style></style>
