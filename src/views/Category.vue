<template>
  <div>
    <CategoryNav :active="$route.params.id" />
    <v-row no-gutters class="category mt-8">
      <v-col cols="3" v-for="product in categoryProducts()" :key="product.index">
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
  name: "Category",
  components: {
    CategoryNav,
    ProductCard,
  },
  methods: {
    categoryProducts() {
      const id = this.$route.params.id;
      return Shop.products.filter((product) =>
        product.categories.find((cat) => cat.toString() === id)
      );
    },
  },
  data: () => ({
    Shop,
  }),
});
</script>

<style lang="scss" scoped>
.category {
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;
}
</style>
