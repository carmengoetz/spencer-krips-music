<template>
  <a :href="link" target="_blank" class="article pa-6">
    <v-row no-gutters algin="center">
      <v-col cols="12" md="3">
        <v-img
          :src="image"
          :alt="title"
          width="200"
          class="article__image mx-auto mb-4"
        />
      </v-col>
      <v-col cols="12" md="3" class="article__text">
        <h3 class="article__title">{{ title }}</h3>
        <div class="article__publication-date">{{ publication }} - {{ date }}</div>
        <p class="article__description">{{ description }}</p>
      </v-col>
    </v-row>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Article",
  props: ["link", "image", "title", "publication", "date", "description"],
});
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  text-decoration: none;

  &:hover {
    background-color: #015869;
  }

  &__title {
    color: white;
    font: normal normal normal 28px raleway, sans-serif;
  }

  &__publication-date {
    color: #8a4d58;
    font-style: italic;
  }

  &__description {
    color: white;
  }
}
</style>
