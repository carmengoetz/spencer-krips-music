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
              v-for="item in socials"
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
              <v-img :src="item.icon" :alt="item.icon" width="28" height="28" />
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  data: () => ({
    socials: [
      {
        icon: require("../assets/icons/facebook.svg"),
        link: "https://www.facebook.com/spencerkripsmusic/",
      },
      {
        icon: require("../assets/icons/youtube.svg"),
        link: "https://www.youtube.com/channel/UClgDTnOa6oAs5Ag5EfFrBow",
      },
      {
        icon: require("../assets/icons/spotify.svg"),
        link: "https://open.spotify.com/artist/4WVx02nMAgd6jvUprPffuZ",
      },
      {
        icon: require("../assets/icons/apple-music.png"),
        link: "https://music.apple.com/us/artist/spencer-krips/1586246238",
      },
      {
        icon: require("../assets/icons/soundcloud.svg"),
        link: "https://soundcloud.com/spencerkripsmusic",
      },
    ],
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
    }
  }
}
</style>
