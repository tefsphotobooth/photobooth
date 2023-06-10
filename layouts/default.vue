<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="showContent"
        expand-on-hover
        rail
        :permanent="mdAndUp"
        class="sticky-drawer"
      >
        <v-list>
          <img src="@/assets/img/icon.png" alt="" />
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <nuxt-link to="/">
            <v-list-item
              prepend-icon="mdi-home-outline"
              title="Home"
              value="home"
            ></v-list-item> </nuxt-link
          ><nuxt-link to="/package">
            <v-list-item
              prepend-icon="mdi-package-variant-closed"
              title="Package"
              value="packages"
            ></v-list-item></nuxt-link
          ><nuxt-link to="/contact-us">
            <v-list-item
              prepend-icon="mdi-email-fast-outline"
              title="Contact Us"
              value="contact"
            ></v-list-item
          ></nuxt-link>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <div
            class="hamburger"
            @click.stop="showContent = !showContent"
            :class="{ open: showContent }"
            v-if="phoneView"
          >
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <slot />
        </v-container>
      </v-main>
    </v-layout>
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div>
        <nuxt-link
          class="text-center"
          style="color: white"
          to="https://www.facebook.com/profile.php?id=100064645585978"
        >
          <v-btn class="mx-4" icon="mdi-facebook" variant="text"></v-btn>
        </nuxt-link>
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-card>
</template>
<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";
const showContent = ref(true); // Initial visibility state

const toggleContent = () => {
  showContent.value = !showContent.value; // Toggle visibility
};

const { smAndDown, mdAndUp, mdAndDown } = useDisplay();
let phoneView = smAndDown;
let tabletView = mdAndDown;
let largeView = mdAndUp;
</script>

<style lang="scss" scoped>
/* Hamburger menu styles */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 20px;
  cursor: pointer;
}

.hamburger .line {
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: background-color 0.3s ease;
}

.hamburger .line:not(:last-child) {
  margin-bottom: 4px;
}

/* Hamburger menu animation */
.hamburger.open .line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.hamburger.open .line:nth-child(2) {
  opacity: 0;
}

.hamburger.open .line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}
img {
  width: -webkit-fill-available;
}
.sticky-drawer {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  z-index: 1000 !important; /* Adjust the z-index value as needed */
  height: 100vh !important; /* Set the desired height */
  overflow-y: auto !important; /* Enable vertical scrolling */
  background: linear-gradient(to bottom right, #ffdaf3, #addbfe);
}
a {
  text-decoration: none !important;
  color: #1a93f1;
}
.v-main {
  background: linear-gradient(to bottom right, #1a93f1, #f982d3);
}
</style>
