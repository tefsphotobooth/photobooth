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
          :data-aos-delay="index == 0 ? '0' : '300'"
          data-aos-easing="ease-in-sine"
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
          " -2hrs unlimited Photobooth",
          "-Free Photostandee/ Picture Frame",
          "-Free customized layout",
          "-Green screen Technology Backdrop or Sequence backdrop",
          "-Free coverage copy from our Page",
          "Add ons: -Add 200 pesos for layout Tarpauline backdrop",
          "-Add 1000php per hour extension",
        ],
        show: false,
      },
      {
        img: img2,
        title: "Magnetic Photobooth",
        price: "₱5,000",
        description: [
          "-2Hrs unlimited Photobooth",
          "-Quality Full adhesive Magnet",
          "-Free use of Props",
          "-Free Customize layout",
          "-Green screen Technology backdrop pr Sequence Backdrop",
          "-Free coverage copy from our Page",
          "Add ons:",
          "-add 200 for layout tarpauline Backdrop",
          "-Add 1000 per hr extension",
        ],
        show: false,
      },
    ],
  }),
};
</script>
