import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import "./assets/tailwind.css";
import router from "@/router";
import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

createApp(App)
  .use(Toast, { position: POSITION.BOTTOM_CENTER })
  .use(router)
  .mount("#app");
