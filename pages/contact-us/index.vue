<template>
  <v-card class="mx-auto" max-width="80%">
    <v-img class="align-end text-white" :src="photoBoothImage" cover> </v-img>

    <form @submit.prevent="submit" class="pa-6">
      <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Name"
      ></v-text-field>

      <v-text-field
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-textarea
        v-model="message"
        auto-grow
        variant="filled"
        color="deep-purple"
        label="Message"
      ></v-textarea>
      <div class="text-center">
        <v-btn class="me-4" type="submit" @click="sendEmail"> submit </v-btn>

        <v-btn @click="handleReset"> clear </v-btn>
      </div>
    </form>

    <v-card-actions>
      <v-card-text class="text-left">
        <h3>Contact No: 0916 646 0805</h3>
      </v-card-text>

      <nuxt-link
        class="text-center"
        to="https://www.facebook.com/profile.php?id=100064645585978"
      >
        <v-btn color="blue"> Facebook Page </v-btn>
      </nuxt-link>

      <v-card-text class="text-right">
        <h3>Bagumbayan, Sta. Cruz, Laguna</h3>
      </v-card-text>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import photoBoothImage from "@/assets/img/photo-booth.jpg";
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
const mail = useMail();
let message = "";

useHead({
  titleTemplate: `Tef's Photobooth - Contact Us`,
});
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Phone number needs to be at least 9 digits.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    select(value) {
      if (value) return true;

      return "Select an item.";
    },
    checkbox(value) {
      if (value === "1") return true;

      return "Must be checked.";
    },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});

let sendEmail = async () => {
  if (
    name?.value?.value?.length >= 2 &&
    /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(email.value.value) &&
    phone?.value?.value?.length > 9 &&
    /[0-9-]+/.test(phone?.value?.value)
  ) {
    console.log("sending");
    mail.send({
      from: "gomo87376@gmail.com",
      to: "ljota01@gmail.com",
      subject: `${name.value.value} - ${email.value.value}`,
      text: message,
    });
  } else {
    console.log("error");
  }
};
</script>

<style></style>
