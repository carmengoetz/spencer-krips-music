<template>
  <v-row no-gutters class="bio mt-16">
    <v-col>
      <v-img :src="Bio.image" alt="Spencer Krips" max-width="600" class="bio__image" />
    </v-col>
    <v-col class="bio__description">
      <v-card flat tile color="transparent" class="bio__description--paragraphs">
        <v-card-text
          v-for="paragraph in Bio.paragraphs"
          :key="paragraph.index"
          color="white"
          class="bio__description--paragraph pt-0"
        >
          {{ paragraph.text }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { Bio } from "@/constants";

export default Vue.extend({
  name: "Home",

  components: {},
  data: () => ({
    Bio,
  }),
});
</script>

<style lang="scss" scoped>
.bio {
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;

  &__description {
    color: white;

    &--paragraph {
      font-size: 16px !important;
      color: white !important;
    }
  }

  &__image {
  }
}
</style>
