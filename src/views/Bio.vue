<template>
  <transition-group appear name="bio__fade">
    <v-row no-gutters class="bio mt-10 mt-md-16" key="0">
      <v-col cols="12" md="6">
        <v-img :src="Bio.image" alt="Spencer Krips" class="bio__image"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="bio__description">
        <v-card flat tile color="transparent" class="bio__description--paragraphs">
          <v-card-text
            v-for="paragraph in Bio.paragraphs"
            :key="paragraph.index"
            color="white"
            class="bio__description--paragraph pb-0 pb-md-4 pt-md-0"
          >
            {{ paragraph.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </transition-group>
</template>

<script lang="ts">
import Vue from "vue";
import { Bio } from "@/constants";

export default Vue.extend({
  name: "Bio",
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

  &__image {
    width: 600px;

    @media (max-width: 960px) {
      width: 100%;
    }
  }

  &__description {
    color: white;

    &--paragraph {
      font-size: 16px !important;
      color: white !important;
    }
  }

  &__fade-enter {
    opacity: 0;
    transition: 3s all ease-in-out;
  }

  &__fade-enter-active {
    transition: all 2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
}
</style>
