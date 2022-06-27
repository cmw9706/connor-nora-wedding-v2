<template>
  <div
    class="angels flex flex-col w-screen h-screen overflow-auto bg-primary-green md:p-28 p-12"
  >
    <MobileMenu
      @toggle="toggleMobileMenu"
      class="md:invisible xs:visible my-4 xs:my-0"
    />
    <div class="flex flex-col w-full items-center justify-center">
      <div class="text-center mb-10">
        <h1
          class="text-primary-light text-3xl lg:text-6xl md:text-6xl sm:text-4xl"
        >
          Connor and Nora
        </h1>
        <p
          class="text-accent-green text-3xl lg:text-4xl md:text-4xl sm:text-3xl"
        >
          - June 10th, 2023 -
        </p>
      </div>

      <div class="xl:w-3/5 2xl:px-12">
        <slot />
      </div>
      <button
        @click="goHome"
        v-if="showHomeButton"
        class="align-bottom text-primary-light hover:underline"
      >
        Home
      </button>
    </div>
    <div
      v-if="mobileMenuShowing"
      class="fixed inset-0 w-full h-screen items-center justify-center z-50 flex flex-col justify-evenly bg-accent-green"
    >
      <button
        @click="navigate('Details')"
        class="text-primary-dark lg:text-6xl md:text-6xl text-4xl"
      >
        Details
      </button>
      <button
        @click="navigate('RSVP')"
        class="text-primary-dark lg:text-6xl md:text-6xl text-4xl"
      >
        RSVP
      </button>
      <button
        @click="navigate('Registry')"
        class="text-primary-dark lg:text-6xl md:text-6xl text-4xl"
      >
        Registry
      </button>
      <button class="text-primary-dark align-bottom" @click="toggleMobileMenu">
        Close
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import MobileMenu from "@/components/MobileMenu.vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "DefaultLayout.vue",
  components: { MobileMenu },
  setup() {
    const mobileMenuShowing = ref(false);
    const router = useRouter();
    const toggleMobileMenu = () => {
      mobileMenuShowing.value = !mobileMenuShowing.value;
    };

    const navigate = (item) => {
      mobileMenuShowing.value = false;
      router.push(item);
    };
    const showHomeButton = computed(() => {
      const currentRoute = useRoute();
      return currentRoute.name != "Home";
    });
    const goHome = () => {
      router.push({ name: "Home" });
    };
    return {
      mobileMenuShowing,
      toggleMobileMenu,
      navigate,
      showHomeButton,
      goHome,
    };
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
