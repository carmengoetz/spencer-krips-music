<template>
  <div class="press mt-6 mt-md-16">
    <div class="press__articles">
      <transition-group appear name="press__slide">
        <v-row v-for="item in Press.articles" :key="item.index">
          <Article
            :link="item.link"
            :image="item.image"
            :title="item.title"
            :publication="item.publication"
            :date="item.date"
            :description="item.description"
          />
        </v-row>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Press } from "@/constants";
import Article from "@/components/Article.vue";

export default Vue.extend({
  name: "Press",
  components: { Article },
  data: () => ({
    Press,
  }),
});
</script>

<style lang="scss" scoped>
.press {
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;
  color: white;

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
