<template>
  <v-app-bar absolute color="#8a4d58" flat height="80" class="nav px-0 px-md-16">
    <!-- <v-menu class="d-inline d-md-none">
      <template #activator="{ props }">
        <v-img
          v-bind="props"
          :src="logo"
          max-width="200px"
          alt="carmen goetz"
          class="nav__logo--image d-inline d-md-none"
        >
        </v-img>
      </template>
      <v-card width="300" class="nav__links--mobile d-inline d-md-none">
        <v-list class="pt-0">
          <v-list-item v-for="page in pages" :key="page.index">
            <router-link
              class="nav__link nav__link--mobile glitch text-secondary-darken-1 mx-auto"
              :data-text="page.name"
              :to="{
                name: page.name,
              }"
            >
              {{ page.name }}
            </router-link>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu> -->
    <v-img :src="logo" max-width="300px" alt="Spencer Krips Music">
      <router-link
        class="nav__logo"
        data-text="Spencer Krips Music"
        :to="{
          name: 'Home',
        }"
      >
      </router-link>
    </v-img>

    <v-spacer></v-spacer>

    <router-link
      v-for="page in pages"
      :key="page.name"
      class="nav__link px-4 py-7"
      :to="{
        name: page.name,
      }"
    >
      {{ page.name }}
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import logo from "@/assets/logo.png";

export default Vue.extend({
  name: "Navigation",

  data: () => ({
    pages: [
      { path: "/", name: "Home", exact: true },
      { path: "/bio", name: "Bio", exact: false },
      { path: "/events", name: "Events", exact: false },
      { path: "/press", name: "Press", exact: false },
      { path: "/shop", name: "Shop", exact: false },
      { path: "/contact", name: "Contact", exact: false },
    ],
    logo,
  }),
});
</script>

<style lang="scss" scoped>
.nav {
  &__link {
    font-weight: 400;
    font: normal normal normal 16px raleway, sans-serif;
    color: white;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      border-bottom: solid 2px #568e55;
      border-top: solid 2px transparent;
    }
  }
}

.router-link-exact-active {
  border-bottom: solid 2px #568e55;
  border-top: solid 2px transparent;
}
</style>
