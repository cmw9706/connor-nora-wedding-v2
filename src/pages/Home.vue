<template>
  <div class="grid grid-cols-2 h-full w-full gap-10 mt-10 justify-center">
    <div>
      <img
        class="rounded-lg"
        src="../assets/cn.jpg"
        alt="a picture of connor and nora"
      />
    </div>
    <div class="flex flex-col gap-10">
      <Card v-for="item in menuItems" :text="item" :key="item" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "Home.vue",
  components: {
    Card,
  },
  setup() {
    const menuItems = ["Details", "RSVP", "Registry"];
    const testText = "Connor";
    const router = useRouter();
    const navToDetails = () => {
      router.push("Details");
    };
    return { navToDetails, testText, menuItems };
  },
});
</script>

<style></style>
