<template>
  <div class="four-oh-four mt-10 mt-md-16">
    <v-row no-gutters justify="center">
      <h1 class="four-oh-four__header mb-4">404: Not Found</h1>
    </v-row>
    <v-row no-gutters align="center" justify="center" class="mx-4">
      <v-img
        :src="logo"
        alt="Spencer Krips Music"
        class="four-oh-four__image mx-4"
        ><template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
    </v-row>
    <v-row no-gutters align="center" justify="center">
      <v-btn
        tile
        large
        color="#8a4d58"
        :to="{
          name: 'Home',
        }"
        class="four-oh-four__button mt-10 mt-md-16"
        >Go back to safety</v-btn
      >
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import logo from "@/assets/error/spencer-krips-logo.png";

export default Vue.extend({
  name: "FourOhFour",
  data: () => ({
    logo,
  }),
});
</script>

<style lang="scss" scoped>
.four-oh-four {
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;

  &__header {
    color: white;
    font: normal normal normal 60px raleway, sans-serif;

    @media (max-width: 600px) {
      font: normal normal normal 40px raleway, sans-serif;
    }
  }

  &__image {
    max-width: 600px !important;

    @media (max-width: 960px) {
      width: 100%;
    }
  }

  &__button {
    font: normal normal normal 16px, sans-serif;
    color: white;
    width: 500px;
    text-transform: unset !important;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
}
</style>
