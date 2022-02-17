<template>
  <v-row no-gutters class="categories mt-3 mt-md-1 pt-md-8 pb-md-5 px-md-16">
    <v-col
      v-for="category in Shop.categories"
      :key="category.id"
      align="center"
      class="d-none d-md-inline mx-auto"
    >
      <router-link
        class="categories__link categories__link--web"
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
    <v-menu tile max-width="960" class="d-inline d-md-none">
      <template v-slot:activator="{ on, attrs }">
        <v-row
          no-gutters
          v-bind="attrs"
          v-on="on"
          align="center"
          justify="center"
          class="categories__link d-flex d-md-none py-4"
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
              class="categories__link categories__link--mobile py-4 text-center"
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

    &--web {
      max-width: 220px;
      width: 100%;
      padding: 22px 68px !important;
      margin: 0;
      @media (max-width: 1264px) {
        font: normal normal normal 16px raleway, sans-serif;
        padding: 25px 48px 23px 48px !important;
      }
    }

    &--mobile {
      width: 100%;
    }
  }

  &__active {
    background-color: #8a4d58 !important;
  }
}

.v-menu__content {
  width: 100% !important;
  box-shadow: none;
  top: 130px !important;
}
</style>
