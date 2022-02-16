<template>
  <v-row no-gutters class="categories mt-4 mt-md-1 pt-md-8 pb-md-5 px-md-16">
    <v-col
      v-for="category in Shop.categories"
      :key="category.id"
      align="center"
      class="d-none d-md-inline"
    >
      <router-link
        class="categories__link px-6 py-6"
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
    <v-menu tile class="d-inline d-md-none my-8">
      <template v-slot:activator="{ on, attrs }">
        <v-row
          v-bind="attrs"
          v-on="on"
          align="center"
          justify="center"
          class="categories__link d-flex d-md-none"
          >Categories</v-row
        >
      </template>
      <v-card tile class="d-inline d-md-none">
        <v-list tile color="#015869" class="pt-0">
          <v-list-item
            v-for="category in Shop.categories"
            :key="category.id"
            class="px-0"
          >
            <router-link
              class="categories__link categories__link--mobile pa-4 text-center"
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
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
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

    @media (max-width: 1264px) {
      font: normal normal normal 16px raleway, sans-serif;
    }

    &--mobile {
      width: 100%;
    }
  }

  &__active {
    background-color: #8a4d58 !important;
  }
}
</style>
