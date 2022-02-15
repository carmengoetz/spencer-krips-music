<template>
  <v-row no-gutters class="categories pt-10 pb-6 px-16">
    <v-col v-for="category in Shop.categories" :key="category.id" align="center">
      <router-link
        class="categories__link px-11 py-6"
        :class="active == category.id ? 'categories__active' : ''"
        :to="{
          name: 'Category',
          params: {
            id: category.id,
          },
        }"
      >
        {{ category.title }}
      </router-link>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Shop } from "@/constants";

export default Vue.extend({
  name: "CategoryNav",
  props: ["active"],
  data: () => ({
    Shop,
  }),
});
</script>

<style lang="scss" scoped>
.categories {
  background-color: #015869;

  &__link {
    color: white;
    font: normal normal normal 20px raleway, sans-serif;
    text-decoration: none;

    &:hover {
      background-color: #8a4d58 !important;
    }
  }

  &__active {
    background-color: #8a4d58 !important;
  }
}
</style>
