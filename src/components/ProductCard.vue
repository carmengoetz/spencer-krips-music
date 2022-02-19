<template>
  <v-card
    class="product d-flex flex-column px-4 py-6 ma-4"
    height="372"
    elevation="0"
    color="#1b4452"
    tile
    :to="{
      name: 'Product',
      params: { id: id },
    }"
  >
    <v-img width="262" height="262" :src="image" class="align-self-center"
      ><template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row> </template
    ></v-img>
    <v-spacer></v-spacer>
    <div class="product__name mt-4 ml-4">{{ name }}</div>
    <div class="product__format ml-4">{{ format }}</div>
    <div class="product__price pb-4 ml-4">{{ currency }} ${{ price }}.00</div>
  </v-card>
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
});
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    box-shadow: 6px 6px 0 #674046 !important;
    background-color: #015869 !important;
    transform: translate(-3px, -3px);
    transition: background-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s ease;
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
}
</style>
