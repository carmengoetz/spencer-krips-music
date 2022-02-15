<template>
  <v-card
    class="product d-flex flex-column pa-4"
    height="400"
    elevation="0"
    color="transparent"
    tile
    :to="{
      name: 'Product',
      params: { id: id },
    }"
  >
    <v-img width="250" :src="image" class="align-self-center" />
    <v-spacer></v-spacer>
    <div class="product__name mt-4">{{ name }}</div>
    <div class="product__price">CA${{ price }}.00</div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Shop } from "@/constants";

export default Vue.extend({
  name: "ProductCard",
  props: ["id", "image", "name", "price"],
});
</script>

<style lang="scss" scoped>
.product {
  &:hover {
    background-color: #015869 !important;
  }

  &__name,
  &__price {
    color: white;
    font: normal normal normal 16px raleway, sans-serif;
    text-align: start !important;
  }
}
</style>
