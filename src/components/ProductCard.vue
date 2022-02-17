<template>
  <v-card
    class="product d-flex flex-column px-4 py-6"
    height="350"
    elevation="0"
    color="transparent"
    tile
    :to="{
      name: 'Product',
      params: { id: id },
    }"
  >
    <v-img width="250" :src="image" class="align-self-center"
      ><template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row> </template
    ></v-img>
    <v-spacer></v-spacer>
    <div class="product__name mt-4 ml-4">{{ name }}</div>
    <div class="product__format ml-4">{{ format }}</div>
    <div class="product__price mb-4 ml-4">CA${{ price }}.00</div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProductCard",
  props: ["id", "image", "name", "format", "price"],
});
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    background-color: #015869 !important;
  }

  &__name,
  &__price,
  &__format {
    color: white;
    font: normal normal normal 16px raleway, sans-serif;
    text-align: start !important;

    @media (max-width: 600px) {
      text-align: center !important;
    }
  }

  &__format {
    font: italic normal normal 14px raleway, sans-serif;
  }
}
</style>
