<template>
  <a :href="link" target="_blank" class="event pa-6">
    <v-row align="center" no-gutters>
      <v-col cols="12" md="3">
        <v-img
          :src="image"
          :alt="title"
          width="200"
          class="event__image mx-auto"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
      </v-col>
      <v-col cols="12" md="9" align-self="start" class="event__text">
        <h3 class="event__title">{{ title }}</h3>
        <div class="event__date-who-where">
          {{
            date === "TBD"
              ? date
              : date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
          }}
          | {{ who }} |
          {{ where }}
        </div>
        <div class="event__what">{{ what }}</div>
        <p class="event__description">{{ description }}</p>
      </v-col>
    </v-row>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Event",
  props: {
    link: String,
    image: String,
    title: String,
    date: [Date, String],
    who: String,
    where: String,
    what: String,
    description: String,
  },
});
</script>

<style lang="scss" scoped>
.event {
  width: 100%;
  text-decoration: none;
  &:hover {
    box-shadow: 6px 6px 0 #674046 !important;
    background-color: #015869 !important;
    transform: translate(-3px, -3px);
    transition: background-color 0.5s ease, box-shadow 0.5s ease,
      transform 0.5s ease;
  }

  &__title {
    color: white;
    font: normal normal normal 28px raleway, sans-serif;
  }

  &__date-who-where,
  &__what {
    color: #568e55;
    font-style: italic;
  }

  &__description {
    color: white;
  }
}
</style>
