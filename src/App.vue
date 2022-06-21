<template>
  <DefaultLayout> <router-view /> </DefaultLayout>
</template>

<script>
import { defineComponent } from "vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
export default defineComponent({
  name: "App",
  components: {
    DefaultLayout,
  },
});
</script>

<style>
#app {
  font-family: "Alice", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
