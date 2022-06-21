<template>
  <div class="grid grid-cols-2 h-full w-full gap-10">
    <div>
      <img
        class="rounded-lg"
        src="../assets/cn.jpg"
        alt="a picture of connor and nora"
      />
    </div>
    <div class="flex flex-col gap-10 xs:hidden">
      <Card
        @click="navigate(item)"
        v-for="item in menuItems"
        :text="item"
        :key="item"
      />
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
    const router = useRouter();

    const navigate = (item) => {
      router.push(item);
    };
    return { menuItems, router, navigate };
  },
});
</script>

<style></style>
