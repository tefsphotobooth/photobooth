<template>
  <v-container class="my-12">
    <h1 style="color: floralwhite" class="mb-12">Tef's Photobooth Packages</h1>
    <v-row>
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="12"
        md="6"
        class="mb-12"
      >
        <v-card
          class="mx-auto"
          data-aos="fade-down"
          :data-aos-delay="index % 2 == 0 ? '0' : '300'"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
        >
          <v-img :src="card.img" height="200px" cover></v-img>

          <v-card-title style="text-wrap: balance">
            {{ card.title }}</v-card-title
          >

          <v-card-subtitle>{{ card.price }} </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
              @click="card.show = !card.show"
            >
              Details
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="card.show">
              <v-divider></v-divider>

              <v-card-text v-for="(desc, i) in card.description" :key="i">
                {{ desc }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import img1 from "@/assets/img/photo-booth.jpg";
import img2 from "@/assets/img/photo-booth2.jpg";
import img3 from "@/assets/img/photo-booth.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default {
  setup() {
    useHead({
      titleTemplate: `Tef's Photobooth - Packages`,
    });
  },
  data: () => ({
    cards: [
      {
        img: img1,
        title: "Classic Photobooth",
        price: "₱3,500",
        description: [
          "-2hrs unlimited Photobooth",
          "-Free Photostandee/ Picture Frame",
          "-Free use of Props",
          "-Free customized layout",
          "-Layout backdrop",
          "-Free coverage copy from our Page",
          "Add ons:",
          "-Add 1000php per hour extension",
        ],
        show: false,
      },
      {
        img: img1,
        title: "Magnetic Photobooth",
        price: "₱4,500",
        description: [
          "-2Hrs unlimited Photobooth",
          "-Quality Full adhesive Magnet",
          "-Free Customize layout",
          "-Layout backdrop",
          "-Free coverage copy from our Page",
          "Add ons:",
          "-Add 1000 per hr extension",
        ],
        show: false,
      },
      {
        img: img1,
        title: "Polaroid Shot",
        price: "₱4,500",
        description: [
          "-2Hrs unlimited shot",
          "-Quality Full adhesive Magnet",
          "-Free Customize layout",
          "-Layout backdrop",
          "-Free coverage copy from our Page",
          "Add ons:",
          "-Add 1000 per hr extension",
        ],
        show: false,
      },
      {
        img: img1,
        title: "Classic Strip with Dedication",
        price: "₱3,800",
        description: [
          "-2Hrs unlimited shot",
          "-Free Customize layout",
          "-Layout backdrop",
          "-Free coverage copy from our Page",
        ],
        show: false,
      },
      {
        img: img1,
        title: "Magnetic Strip with Dedication",
        price: "₱4,500",
        description: [
          "-2Hrs unlimited shot",
          "-Quality full adhesive Magnet",
          "-Free Customize layout",
          "-Layout backdrop",
          "-Free coverage copy from our Page",
        ],
        show: false,
      },
      {
        img: img1,
        title: "2 in 1 Standee with Magnetic",
        price: "₱4,000",
        description: [
          "-2Hrs unlimited shot",
          "-Quality standee with magnet",
          "-Free Customize layout",
          "-Free use of props",
          "-Free coverage copy from our Page",
        ],
        show: false,
      },
    ],
  }),
};
</script>
