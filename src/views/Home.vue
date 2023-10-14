<template>
  <div class="home mt-6 mt-md-16">
    <transition-group appear name="home__fade">
      <v-row align="center" class="home__banner mb-8 mx-auto" key="0">
        <v-col align-self="center" class="home__banner--title">
          <span style="font-weight: bold">Spencer</span> Krips Music
        </v-col>
        <v-col class="pa-0" align-self="center">
          <v-img :src="Home.bannerImage" class="home__banner--image"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        align="center"
        justify="center"
        class="home__feature pa-0"
        key="1"
      >
        <v-img
          :src="Home.featureImage"
          max-width="1240"
          class="align-end home__feature--image"
        >
          <v-row
            no-gutters
            justify="center"
            align="end"
            class="my-0 my-sm-6 my-md-10 my-lg-16"
          >
            <v-btn
              tile
              large
              color="#8a4d58"
              class="home__feature--button"
              elevation="0"
              href="https://www.eventbrite.com/e/reservoirs-of-quiet-tickets-735825884027"
              target="_blank"
              rel="noreferrer"
            >
              Buy Tickets</v-btn
            >
          </v-row></v-img
        >
        <!-- </v-row><v-row
        no-gutters
        align="center"
        justify="center"
        class="home__feature pa-0"
        key="1"
      >
        <v-img
          :src="Home.featureImage"
          max-width="1240"
          class="align-end home__feature--image"
        >
          <v-row
            no-gutters
            justify="center"
            align="end"
            class="my-0 my-sm-6 my-md-10 my-lg-16"
          >
            <v-dialog tile v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  tile
                  color="#8a4d58"
                  class="home__feature--button"
                  >Listen Now</v-btn
                >
              </template>

              <v-card tile color="#015869">
                <v-card-actions>
                  <v-card-title class="home__modal--title text-h5">
                    Listen to behold, the sonic universe
                  </v-card-title>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    @click="dialog = false"
                    class="footer__dialog--close"
                  >
                    <v-icon color="white">mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-card-text>
                  <v-btn
                    tile
                    large
                    color="#8a4d58"
                    elevation="0"
                    class="home__modal--button my-2"
                    :to="{
                      name: 'Product',
                      params: { id: 7584649216248 },
                    }"
                    target="_blank"
                    rel="noreferrer"
                    >Buy Now</v-btn
                  >
                  <v-btn
                    tile
                    large
                    color="#8a4d58"
                    class="home__modal--button my-2"
                    elevation="0"
                    href="https://open.spotify.com/album/7sS7mbQzasGlm9QSqpHxOt"
                    target="_blank"
                    rel="noreferrer"
                    ><v-icon size="30" color="white" class="mr-2">
                      mdi-spotify
                    </v-icon>
                    Listen on Spotify</v-btn
                  >
                  <v-btn
                    tile
                    large
                    color="#8a4d58"
                    class="home__modal--button my-2"
                    elevation="0"
                    href="https://music.apple.com/us/album/behold-the-sonic-universe/1586246399"
                    target="_blank"
                    rel="noreferrer"
                    ><v-img
                      src="../assets/icons/apple-music.png"
                      max-width="24"
                      class="mr-4"
                    />
                    Listen on Apple Music</v-btn
                  >
                  <v-btn
                    tile
                    large
                    color="#8a4d58"
                    class="home__modal--button my-2"
                    elevation="0"
                    href="https://music.youtube.com/playlist?list=OLAK5uy_nbOlukt1KkNLEkGYfqNTFqyS1gQYITwiY"
                    target="_blank"
                    rel="noreferrer"
                    ><v-icon size="30" color="white" class="mr-2">
                      mdi-youtube
                    </v-icon>
                    Listen on Youtube Music</v-btn
                  >
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-row></v-img
        > -->
      </v-row>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Home } from "@/constants";

export default Vue.extend({
  name: "Home",

  components: {},
  data: () => ({
    dialog: false,
    Home,
  }),
});
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;

  &__banner {
    background-color: #015869;
    padding: 0;

    &--title {
      color: #163033;
      font: normal normal normal 72px raleway, sans-serif;
      text-align: center;
      margin: 8px 0;

      @media (max-width: 600px) {
        font: normal normal normal 32px raleway, sans-serif;
      }
    }

    &--image {
      width: 650px;

      @media (max-width: 960px) {
        width: 100%;
      }
    }
  }

  &__feature {
    &--image {
      width: 100%;
    }

    &--button {
      font: normal normal normal 16px, sans-serif;
      color: white;
      height: 48px !important;
      width: 500px;
      text-transform: unset !important;

      @media (max-width: 600px) {
        height: 40px !important;
        width: 100%;
      }
    }
  }

  &__modal {
    &--title {
      font: normal normal normal 16px, sans-serif;
      color: white;
    }

    &--button {
      width: 100%;
      color: white;
      text-transform: unset !important;
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
