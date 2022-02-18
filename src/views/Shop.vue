<template>
  <div>
    <transition-group appear name="shop__fade">
      <CategoryNav key="0" />
    </transition-group>
    <v-row no-gutters class="shop mt-0 mt-md-4">
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="product in Shop.products"
        :key="product.index"
      >
        <transition-group appear name="shop__slide">
          <ProductCard
            :id="product.id"
            :image="product.image"
            :name="product.name"
            :format="product.format"
            :price="product.price"
            :key="product.index"
          />
        </transition-group>
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

  &__fade-enter {
    opacity: 0;
    transition: 3s all ease-in-out;
  }

  &__fade-enter-active {
    transition: all 2s ease;
    transition-delay: calc(0.1s * var(--index));
  }

  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }

  &__slide-enter-active {
    transition: all 0.5s ease;
    transition-delay: calc(0.1s * var(--index));
  }
}
</style>
