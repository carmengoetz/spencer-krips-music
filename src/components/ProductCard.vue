<template>
  <v-card
    class="product d-flex flex-column px-4 py-6"
    height="372"
    elevation="0"
    color="transparent"
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
    <div class="product__desc mb-4 mx-2">
      <div class="product__name mt-4 ml-4">{{ name }}</div>
      <div class="product__format ml-4">{{ format }}</div>
      <div class="product__price pb-4 ml-4">CA${{ price }}.00</div>
    </div>
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
    price: Number,
  },
});
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    background-color: #015869 !important;
  }

  &__desc {
    background-color: #015869;

    @media (max-width: 1240px) {
      background-color: transparent;
    }
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
