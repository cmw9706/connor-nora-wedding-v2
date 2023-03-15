<template>
  <Jumbotron>
    <div class="flex flex-col gap-10 items-center mb-10">
      <p class="text-2xl">RSVP</p>
      <input
        class="rounded w-full md:w-2/3 h-12 text-center"
        placeholder="Name(s)"
        type="text"
        v-model="nameField"
      />
      <input
        class="rounded w-full md:w-2/3 h-12 text-center"
        placeholder="Email"
        type="text"
        v-model="emailField"
      />
      <input
        class="rounded w-full md:w-2/3 h-12 text-center"
        placeholder="Message"
        type="text"
        v-model="messageField"
      />
      <Card class="w-32" :text="buttonText" @click="submitRsvp" />
    </div>
  </Jumbotron>
</template>

<script>
import { defineComponent, ref } from "vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Card from "@/components/Card.vue";
import { putData } from "@/putData.js";
import { v4 as uuidv4 } from "uuid";
import { TYPE, useToast } from "vue-toastification";

export default defineComponent({
  name: "Rsvp.vue",
  components: { Jumbotron, Card },
  setup() {
    const buttonText = "Send";
    const nameField = ref("");
    const emailField = ref("");
    const messageField = ref("");
    const toast = useToast();

    const submitRsvp = () => {
      console.log(nameField);
      console.log(emailField);
      if (nameField.value && emailField.value) {
        putData(
          {
            cnwdrsvp: uuidv4(),
            name: nameField.value,
            email: emailField.value,
            message: messageField.value,
          },
          (err, data) => {
            if (err) {
              toast("Opps! something went wrong", {
                timeout: 2000,
                type: TYPE.ERROR,
              });
            } else {
              console.log(data);
              toast(`Success! We will see you their!`, {
                timeout: 2000,
                type: TYPE.SUCCESS,
              });
            }
          }
        );
      } else {
        alert("C'mon dude, you gotta tell me who you are");
      }
    };
    return { buttonText, submitRsvp, nameField, emailField, messageField };
  },
});
</script>

<style></style>
