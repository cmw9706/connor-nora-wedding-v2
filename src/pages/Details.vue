<template>
  <Jumbotron>
    <p class="text-primary-dark">This page is a working in progress</p>
  </Jumbotron>
</template>

<script>
import { defineComponent } from "vue";
import Jumbotron from "@/components/Jumbotron.vue";

export default defineComponent({
  name: "Details.vue",
  components: {
    Jumbotron,
  },
});
</script>

<style></style>
