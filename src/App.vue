<template>
  <v-app>
    <Navigation />
    <v-main class="my-16">
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  components: { Navigation, Footer },
  name: "App",
});
</script>

<style lang="scss">
#app {
  background-color: #163033;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
}

::selection {
  background: #568e55;
  text-shadow: none;
}

img::selection {
  background: transparent;
}

img::-moz-selection {
  background: transparent;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #015869;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #8a4d58;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #663841;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 1s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

.fade-in {
  opacity: 0;
  transition: 2s all ease-in-out;
}

.v-breadcrumbs {
  &__item,
  &__divider {
    color: white !important;
    font: normal normal normal 16px raleway, sans-serif;
  }
}

.btn {
  text-transform: unset !important;
}

.v-btn--active::before {
  opacity: 0 !important;
}
</style>
