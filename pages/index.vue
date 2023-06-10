<template>
  <v-container>
    <div
      class="my-8"
      data-aos="zoom-out-down"
      data-aos-duration="1500"
      style="max-width: 460px"
    >
      <h1 style="color: midnightblue">Welcome to Tef's Photobooth</h1>
      <h2 style="color: midnightblue">Capturing Memories One Click at a Time!</h2>
    </div>

    <v-row class="row-odd">
      <v-col md="6" class="my-8" data-aos="fade-in">
        <h2>Unleash the Fun with Our Photobooths</h2>
        <br />
        <h3>
          Get ready to turn your event into an unforgettable experience with
          Tef's Photobooth! Our state-of-the-art photobooths are designed to
          bring the perfect blend of entertainment and nostalgia to any
          occasion. Whether it's a wedding, corporate event, birthday party, or
          any other special celebration, our sleek and user-friendly booths will
          have your guests striking a pose and creating memories they'll cherish
          forever.
        </h3>
      </v-col>
      <v-col md="6" class="my-8">
        <HomeCarousel>
          <div class="hand">
            <div class="card" data-aos="fade-left">
              <img src="@/assets/img/sample1.jpg" alt="Image 1" />
            </div>
            <div class="card" data-aos="fade-left" data-aos-delay="150">
              <img src="@/assets/img/sample2.jpg" alt="Image 2" />
            </div>
            <div class="card" data-aos="fade-left" data-aos-delay="300">
              <img src="@/assets/img/sample3.jpg" alt="Image 3" />
            </div>
          </div>
        </HomeCarousel>
      </v-col>
    </v-row>
    <v-row class="row-even">
      <v-col md="6" class="my-8" data-aos="fade-in" data-aos-offset="300">
        <h2>Endless Possibilities with Customizable Experiences</h2>
        <br />
        <h3>
          At Tef's Photobooth, we believe in personalization and making your
          event truly unique. With our customizable experiences, you can tailor
          every aspect of your photobooth to match your theme, brand, or
          personal style. From custom backdrops and props to branded photo
          templates and interactive screens, our team will work closely with you
          to bring your vision to life. It's time to let your creativity shine
          and create an immersive photobooth experience that will leave a
          lasting impression on your guests.
        </h3>
      </v-col>
      <v-col md="6" class="my-8">
        <HomeCarousel>
          <div class="hand">
            <div class="card" data-aos="fade-right" data-aos-offset="300">
              <img src="@/assets/img/sample4.jpg" alt="Image 1" />
            </div>
            <div
              class="card"
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-offset="300"
            >
              <img src="@/assets/img/sample5.jpg" alt="Image 2" />
            </div>
            <div
              class="card"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-offset="300"
            >
              <img src="@/assets/img/sample6.jpg" alt="Image 3" />
            </div>
          </div>
        </HomeCarousel>
      </v-col>
    </v-row>
    <v-row class="row-odd">
      <v-col md="6" class="my-8" data-aos="fade-in" data-aos-offset="300">
        <h2>Professional Service and Hassle-Free Setup</h2>
        <br />
        <h3>
          Planning an event can be overwhelming, but with Tef's Photobooth, you
          can relax knowing that our team has got you covered. We provide
          professional and friendly attendants who will be there to assist your
          guests throughout the entire photobooth experience. Our seamless setup
          process ensures that you can focus on enjoying the event while we take
          care of all the technical aspects. With Tef's Photobooth, you can rest
          assured that your event will be stress-free and filled with laughter
          and joy.
        </h3>
      </v-col>
      <v-col md="6" class="my-8">
        <HomeCarousel>
          <div class="hand">
            <div class="card" data-aos="fade-left" data-aos-offset="300">
              <img src="@/assets/img/sample9.jpg" alt="Image 1" />
            </div>
            <div
              class="card"
              data-aos="fade-left"
              data-aos-delay="150"
              data-aos-offset="300"
            >
              <img src="@/assets/img/sample8.jpg" alt="Image 2" />
            </div>
            <div
              class="card"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-offset="300"
            >
              <img src="@/assets/img/sample7.jpg" alt="Image 3" />
            </div>
          </div>
        </HomeCarousel>
      </v-col>
    </v-row>
    <!-- <NuxtWelcome /> -->
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
useHead({
  titleTemplate: `Tef's Photobooth - Home`,
});
const { smAndDown, mdAndUp, mdAndDown } = useDisplay();
let phoneView = smAndDown;
let tabletView = mdAndDown;
let largeView = mdAndUp;
</script>

<style lang="scss" scoped>
.row-even {
  flex-direction: row-reverse;
}
h1,
h2 {
  color: #ffffff;
}
h3 {
  color: #ffffff;
}

.hand {
  display: flex;
  justify-content: center;
}

.card {
  width: 200px;
  height: 290px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  margin: 0 10px;
  transform: translateY(0%);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
