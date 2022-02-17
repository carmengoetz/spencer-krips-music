<template>
  <v-app-bar absolute color="#8a4d58" flat height="78" class="nav px-0 px-lg-16">
    <router-link
      class="nav__logo"
      data-text="Spencer Krips Music"
      :to="{
        name: 'Home',
      }"
    >
      <v-img :src="logo" alt="Spencer Krips Music" class="nav__logo"> </v-img>
    </router-link>

    <v-spacer></v-spacer>
    <div class="nav__links">
      <router-link
        v-for="page in pages"
        :key="page.name"
        class="nav__link px-4 py-7 d-none d-md-inline"
        :to="{
          name: page.name,
        }"
      >
        {{ page.name }}
      </router-link>
    </div>
    <v-menu tile max-width="960" class="nav__mobile d-inline d-md-none mt-16">
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on" class="nav__menu d-inline d-md-none">
          <span class="nav__menu--line"></span>
          <span class="nav__menu--line"></span>
          <span class="nav__menu--line"></span>
        </div>
      </template>
      <v-card class="nav__links--mobile d-inline d-md-none">
        <v-list tile color="#8a4d58" class="pt-0">
          <v-list-item v-for="page in pages" :key="page.index">
            <router-link
              class="nav__link nav__link--mobile py-4 text-center px-16"
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
    </v-menu>
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
  &__logo {
    width: 300px;
    @media (max-width: 600px) {
      width: 200px;
    }
  }

  &__links {
    .router-link-exact-active {
      border-bottom: solid 2px #568e55;
      border-top: solid 2px transparent;
    }
  }

  &__link {
    font-weight: 400;
    font: normal normal normal 16px raleway, sans-serif;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    border: solid 2px transparent;

    &:hover {
      border-bottom: solid 2px #568e55;
    }

    &--mobile {
      width: 100%;
    }
  }
  &__menu {
    cursor: pointer;

    &--line {
      background-color: ghostwhite;
      width: 24px;
      height: 2px;
      margin: 3px 0;
      display: block;
    }
  }
}

.v-menu__content {
  width: 100% !important;
  box-shadow: none;
  top: 78px !important;
}
</style>
