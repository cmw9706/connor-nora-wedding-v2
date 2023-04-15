<template>
  <Jumbotron>
    <p class="text-primary-dark">
      We are so grateful for your presence on our special day and do not ask for
      any physical gifts. Instead, if you would like to contribute to our
      honeymoon, we kindly ask that you consider sending us a monetary gift
      through our Venmo account. We will provide a QR code below as well as at
      the wedding that you can scan to send your gift. Your generosity and love
      are the most important gifts, and we cannot wait to celebrate with you!
    </p>
    <img
      class="w-80 rounded-lg mx-auto"
      src="../assets/IMG_3937.jpg"
      alt="a QR code for venmo"
    />
  </Jumbotron>
</template>

<script>
import { defineComponent } from "vue";
import Jumbotron from "@/components/Jumbotron.vue";

export default defineComponent({
  name: "Registry.vue",
  components: {
    Jumbotron,
  },
});
</script>
