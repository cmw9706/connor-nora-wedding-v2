<template>
  <button
    class="transition transform ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg bg-primary-gold flex flex-grow text-4xl p-4 items-center justify-center max-w-xl"
    v-text="text"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card.vue",
  props: {
    text: {
      type: String,
    },
  },
});
</script>

<style></style>
