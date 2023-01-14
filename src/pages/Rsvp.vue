<template>
  <Jumbotron>
    <div class="flex flex-col gap-10 items-center mb-10">
      <p class="text-2xl">RSVP</p>
      <input
        class="rounded w-full md:w-2/3 h-12 text-center"
        placeholder="Name"
        type="text"
      />
      <input
        class="rounded w-full md:w-2/3 h-12 text-center"
        placeholder="Email"
        type="text"
      />
      <input
        class="rounded w-full md:w-2/3 h-12 text-center"
        placeholder="Message"
        type="text"
      />
      <Card class="w-32" :text="buttonText" @click="submitRsvp" />
    </div>
  </Jumbotron>
</template>

<script>
import { defineComponent } from "vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "Rsvp.vue",
  components: { Jumbotron, Card },
  setup() {
    const buttonText = "Send";
    const submitRsvp = () => {
      alert("This feature is not ready at the moment, but will be soon!");
    };
    return { buttonText, submitRsvp };
  },
});
</script>

<style></style>
