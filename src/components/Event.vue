<template>
  <a :href="link" target="_blank" class="event pa-6">
    <v-row align="center" no-gutters>
      <v-col cols="12" md="3">
        <v-img :src="image" :alt="title" width="200" class="event__image mx-auto" ><template v-slot:placeholder>
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
          {{ displayDate }} | {{ who }} |
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
  props: ["link", "image", "title", "displayDate", "who", "where", "what", "description"],
});
</script>

<style lang="scss" scoped>
.event {
  width: 100%;
  text-decoration: none;
  &:hover {
    background-color: #015869;
  }

  &__title {
    color: white;
    font: normal normal normal 28px raleway, sans-serif;
  }

  &__date-who-where,
  &__what {
    color: #8a4d58;
    font-style: italic;
  }

  &__description {
    color: white;
  }
}
</style>
