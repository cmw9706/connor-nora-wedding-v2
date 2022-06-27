<template>
  <div class="text-center p-8 bg-accent-green h-full w-full rounded">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Jumbotron.vue",
});
</script>

<style></style>
