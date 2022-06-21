<template>
  <div
    class="angels flex flex-col w-screen h-screen overflow-auto bg-primary-green p-28 xs:p-12"
  >
    <MobileMenu
      @toggle="toggleMobileMenu"
      class="md:invisible xs:visible my-4"
    />
    <div class="flex flex-col w-full items-center justify-center">
      <div class="text-center mb-10">
        <h1 class="text-primary-light lg:text-6xl md:text-6xl text-4xl">
          Connor and Nora
        </h1>
        <p class="text-accent-green lg:text-4xl md:text-4xl text-3xl">
          - June 10th, 2023 -
        </p>
      </div>

      <div class="xl:w-3/5 2xl:px-12">
        <slot />
      </div>
    </div>
    <div
      v-if="mobileMenuShowing"
      class="fixed inset-0 w-full h-screen items-center justify-center z-50 flex bg-accent-green"
    >
      <button @click="toggleMobileMenu">Close</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import MobileMenu from "@/components/MobileMenu.vue";

export default defineComponent({
  name: "DefaultLayout.vue",
  components: { MobileMenu },
  setup() {
    const mobileMenuShowing = ref(false);
    const toggleMobileMenu = () => {
      console.log("CLick!");
      mobileMenuShowing.value = !mobileMenuShowing.value;
    };
    return { mobileMenuShowing, toggleMobileMenu };
  },
});
</script>

<style>
.angels {
  background-image: url("../assets/angels.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>
