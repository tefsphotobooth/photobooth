<template>
  <v-card class="mx-auto" max-width="80%" data-aos="fade-in"  data-aos-duration="1500">
    <v-card-actions>
      <v-card-text class="text-left">
        <h3>
          Contact No: <span style="text-wrap: nowrap">0916 646 0805</span>
        </h3>
      </v-card-text>

      <nuxt-link
        class="text-center"
        to="https://www.facebook.com/profile.php?id=100064645585978"
      >
        <v-btn color="blue"> Facebook Page </v-btn>
      </nuxt-link>

      <v-card-text class="text-right">
        <h3 style="color: black">Bagumbayan, Sta. Cruz, Laguna</h3>
      </v-card-text>
    </v-card-actions>
    <v-img class="align-end text-white" :src="photoBoothImage" cover> </v-img>

    <div class="text-center">
      <v-dialog v-model="dialog" :scrim="false" persistent width="auto">
        <v-card color="blue">
          <v-card-text>
            Sending email
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="errorDlg" width="800">
        <v-card>
          <v-card-title>
            <span class="text-h5">Problem Occured</span>
          </v-card-title>
          <v-card-text>
            Email was not sent! Please try contacting us on our
            <nuxt-link
              class="text-center"
              to="https://www.facebook.com/profile.php?id=100064645585978"
            >
              Facebook Page
            </nuxt-link>
            or send us a message at 0916 646 0805.
            <br />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green-darken-1"
              variant="text"
              @click="errorDlg = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

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
        v-model="message.value.value"
        auto-grow
        variant="filled"
        color="deep-purple"
        label="Message"
      ></v-textarea>
      <div class="text-center">
        <v-btn
          class="me-4"
          type="submit"
          @click="sendEmail"
          :disabled="dialog"
          :loading="dialog"
        >
          submit
        </v-btn>

        <v-btn @click="handleReset"> clear </v-btn>
      </div>
    </form>
    <v-card-actions>
      <v-card-text class="text-left">
        <h3>
          Contact No: <span style="text-wrap: nowrap">0916 646 0805</span>
        </h3>
      </v-card-text>

      <nuxt-link
        class="text-center"
        to="https://www.facebook.com/profile.php?id=100064645585978"
      >
        <v-btn color="blue"> Facebook Page </v-btn>
      </nuxt-link>

      <v-card-text class="text-right">
        <h3 style="color: black">Bagumbayan, Sta. Cruz, Laguna</h3>
      </v-card-text>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import photoBoothImage from "@/assets/img/photo-booth.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
AOS.init();
const mail = useMail();
// let message = "";
let dialog = ref(false);
let loading = false;
let errorDlg = ref(false);
useHead({
  titleTemplate: `Tef's Photobooth - Contact Us`,
});
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    message(value) {
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
const message = useField("message");

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
    dialog.value = true;
    mail
      .send({
        from: email.value.value,
        subject: `${name.value.value} - ${email.value.value}`,
        text: `Name: ${name.value.value} - Contact No.: ${phone.value.value}

      ${message.value.value}`,
      })
      .then(async () => {
        await setTimeout(() => {
          alert("Email Sent", (dialog.value = false));
          handleReset();
        }, 3500);
      })
      .catch(async (err) => {
        await setTimeout(() => {
          console.log(err);
          dialog.value = false;
          errorDlg.value = true;
        }, 3000);
      });
  } else {
    console.log("invalid fields");
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: #1a93f1;
  // text-transform: uppercase;
  @media (max-width: "960px") {
    font-size: 11px;
  }
  @media (max-width: "600px") {
    font-size: 10px;
  }
}
.v-card-actions {
  @media (max-width: "600px") {
    font-size: 10px;
    flex-direction: column !important;
    text-align: center !important;
    .v-card-text {
      padding: 1px;
    }
  }
}
</style>
