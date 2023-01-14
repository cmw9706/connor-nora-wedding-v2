import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import "./assets/tailwind.css";
import router from "@/router";
import * as AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
});

// Secret Access ket
// BELROif1oijplj4hX/iakoBKh+dQfH5yMYnGkjPf

// Access key id
// AKIAULCFAKQGEA4QNA5T

createApp(App).use(router).mount("#app");
