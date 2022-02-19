<template>
  <v-footer color="#015869" class="footer px-8">
    <v-row align="center">
      <v-col cols="12" sm="6">
        <v-row align="center" justify="center" justify-md="start">
          <v-card color="transparent" bottom flat tile>
            <v-card-text class="footer__copyright">
              &copy; {{ new Date().getFullYear() }} — Spencer Krips |
              <a
                href="https://www.carmengoetz.ca"
                target="_blank"
                class="footer__copyright--link"
              >
                Carmen Goetz
              </a>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6">
        <v-row justify="center" justify-sm="end">
          <v-card flat tile color="transparent">
            <v-btn
              v-for="item in Footer.socials"
              :key="item.icon"
              icon
              class="footer__social-image mx-2 pa-5"
              elevation="0"
              :href="item.link"
              :alt="item.name"
              target="_blank"
              rel="noreferrer"
              width="28"
              height="28"
            >
              <v-icon v-if="item.icon" size="32" color="white">
                {{ item.icon }}
              </v-icon>
              <v-img
                v-else-if="item.image"
                :src="item.image"
                :alt="item.image"
                width="28"
                height="28"
              />
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import { Footer } from "@/constants";

export default Vue.extend({
  name: "Footer",
  data: () => ({
    Footer,
  }),
});
</script>

<style scoped lang="scss">
.footer {
  height: 60px;
  background-color: #015869 !important;

  @media (max-width: 600px) {
    height: 100px;
  }

  &__copyright {
    color: white !important;
    font: normal normal normal 16px raleway, sans-serif;

    &--link {
      color: #568e55 !important;
      font-weight: bold;
    }
  }

  &__social-image {
    &:hover {
      background-color: #8a4d58;
      border-radius: 50px;
      transition: background-color 0.5s ease;
    }
  }
}
</style>
