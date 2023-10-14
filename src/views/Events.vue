<template>
  <div class="events mt-10 mt-md-16">
    <div v-if="upcomingEvents.length !== 0">
      <v-row no-gutters justify="center">
        <h1 class="events__heading mb-4 mb-md-6">Upcoming Events</h1>
      </v-row>
      <transition-group appear name="events__slide">
        <v-row
          no-gutters
          justify="start"
          align="center"
          v-for="(item, index) in upcomingEvents"
          :key="index"
        >
          <Event
            :link="item.link"
            :image="item.image"
            :title="item.title"
            :date="item.date"
            :who="item.who"
            :where="item.where"
            :what="item.what"
            :description="item.description"
          />
        </v-row>
      </transition-group>
      <hr class="events__hr mt-4 mb-8" />
    </div>
    <v-row no-gutters justify="center">
      <h1 class="events__heading mb-4 mb-md-6">Past Events</h1>
    </v-row>
    <transition-group appear name="events__slide">
      <v-row
        no-gutters
        justify="center"
        v-for="(item, index) in pastEvents"
        :key="index"
      >
        <Event
          :link="item.link"
          :image="item.image"
          :title="item.title"
          :date="item.date"
          :who="item.who"
          :where="item.where"
          :what="item.what"
          :description="item.description"
        />
      </v-row>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Event from "@/components/Event.vue";
import { Events } from "@/constants";

export default Vue.extend({
  name: "Events",

  components: { Event },
  data: () => {
    const pastEvents = Events.events
      .filter((e) => e.date < new Date())
      .sort((a, b) => (a.date < b.date ? 1 : -1));
    const upcomingEvents = Events.events
      .filter((e) => e.date === "TBD" || e.date > new Date())
      .sort((a, b) => (a.date > b.date || b.date !== "TBD" ? 1 : -1));

    return {
      pastEvents,
      upcomingEvents,
    };
  },
});
</script>

<style lang="scss" scoped>
.events {
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;
  color: white;

  &__heading {
    color: var(--c-white);
    font: normal normal normal 52px raleway, sans-serif;
    text-align: center;

    @media (max-width: 600px) {
      font: normal normal normal 32px raleway, sans-serif;
    }
  }

  &__hr {
    height: 4px;
    background-color: #015869;
    border: none;
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
