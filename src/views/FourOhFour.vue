<template>
  <div class="four-oh-four mt-10 mt-md-16">
    <v-row no-gutters align="center" justify="center">
      <v-img :src="logo" alt="Spencer Krips Music" class="four-oh-four__image" />
    </v-row>
    <v-row no-gutters align="center" justify="center">
      <v-btn
        tile
        large
        color="#8a4d58"
        dark
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

  &__image {
    max-width: 600px !important;

    @media (max-width: 960px) {
      width: 100%;
    }
  }

  &__button {
    border: 2px solid #8a4d58 !important;
    color: white;
    font-size: 16px;

    &::placeholder {
      color: white;
      font-size: 16px;
      font-family: "Roboto", serif;
    }
  }
}
</style>
