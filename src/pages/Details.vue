<template>
  <Jumbotron>
    <p class="text-primary-dark text-2xl">
      Welcome to the wedding website for Connor and Nora! We are excited to
      share the details of our upcoming wedding celebration with you.
    </p>
    <br />
    <h2 class="text-3xl">Date &amp; Time</h2>
    <p>
      We will be getting married on June 10th, 2023 at the beautiful Cannon Room
      in downtown Raleigh, North Carolina. The ceremony will start at 5:00 pm,
      and we kindly ask that guests arrive at 4:30 pm to allow for time to find
      parking and settle in before the ceremony begins.
    </p>
    <br />
    <h2 class="text-3xl">Venue</h2>
    <p class="text-primary-dark">
      <a
        target="_blank"
        class="underline"
        href="https://www.cannonroomraleigh.com/"
        >The Cannon Room</a
      >
      is an event space located on the 12th floor of 16 W Martin St in downtown
      Raleigh. With its panoramic views of the city and chic decor, it is the
      perfect setting for our special day.
    </p>
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
