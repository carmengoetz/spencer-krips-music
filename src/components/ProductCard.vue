<template>
  <v-dialog tile v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-card
        v-bind="attrs"
        v-on="on"
        class="product d-flex flex-column px-4 py-6 ma-4"
        height="372"
        elevation="0"
        color="#1b4452"
        tile
      >
        <v-img width="262" height="262" :src="image" class="align-self-center"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-spacer></v-spacer>
        <div class="product__name mt-4 ml-4">{{ name }}</div>
        <div class="product__format ml-4">{{ format }}</div>
        <div class="product__price pb-4 ml-4">
          {{ currency }} ${{ price }}.00
        </div>
      </v-card>
    </template>

    <v-card tile color="#015869">
      <v-card-actions>
        <v-card-title class="product__modal--title text-h5">
          {{ name }}
        </v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </v-card-actions>

      <v-card-text>
        <p class="product__modal--description">
          Purchasing through Spencer Krips Music is temporarily closed. Please
          contact me if you would like more information or to purchase directly.
        </p>
        <v-btn
          tile
          large
          color="#8a4d58"
          class="product__modal--button my-2"
          elevation="0"
          :to="{
            name: 'Contact',
            params: {
              subject: name,
            },
          }"
        >
          Contact me</v-btn
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductCard",
  props: {
    id: Number,
    image: String,
    name: String,
    format: String,
    currency: String,
    price: Number,
  },
  data: () => ({
    dialog: false,
  }),
});
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    box-shadow: 6px 6px 0 #674046 !important;
    background-color: #015869 !important;
    transform: translate(-3px, -3px);
    transition: background-color 0.5s ease, box-shadow 0.5s ease,
      transform 0.5s ease;
  }

  &__name,
  &__price,
  &__format {
    color: white;
    font: normal normal normal 16px raleway, sans-serif;
    text-align: start !important;

    @media (max-width: 960px) {
      text-align: center !important;
    }
  }

  &__format {
    font: italic normal normal 14px raleway, sans-serif;
  }

  &__modal {
    &--title {
      font: normal normal normal 16px, sans-serif;
      color: white;
    }

    &--description {
      color: white;
    }

    &--button {
      width: 100%;
      color: white;
      text-transform: unset !important;
    }
  }
}
</style>
