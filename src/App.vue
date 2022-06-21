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
  setup() {},
});
</script>

<style>
#app {
  font-family: "Alice", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
