<template>
  <div>
    <CategoryNav />
    <v-row no-gutters class="shop mt-8">
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="product in Shop.products"
        :key="product.index"
      >
        <ProductCard
          :id="product.id"
          :image="product.image"
          :name="product.name"
          :price="product.price"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CategoryNav from "@/components/CategoryNav.vue";
import ProductCard from "@/components/ProductCard.vue";
import { Shop } from "@/constants";

export default Vue.extend({
  name: "Shop",
  components: {
    CategoryNav,
    ProductCard,
  },
  data: () => ({
    Shop,
  }),
});
</script>

<style lang="scss" scoped>
.shop {
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;
}
</style>
