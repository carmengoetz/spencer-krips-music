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
      <v-row no-gutters align="center" justify="center" class="home__feature" key="1">
        <v-col lg="11" class="pa-0">
          <v-img
            :src="Home.featureImage"
            class="home__feature--image text-center"
            max-width="1144"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </v-col>
        <v-col lg="1" class="home__feature--badges text-center px-lg-5 py-lg-2">
          <v-btn
            elevation="0"
            class="home__feature--buy my-5 mx-4 mx-lg-0"
            :to="{
              name: 'Product',
              params: { id: 7584649216248 },
            }"
            target="_blank"
            rel="noreferrer"
            width="56"
            height="52"
          >
            Buy
          </v-btn>
          <v-btn
            icon
            class="my-5 mx-4 mx-lg-0"
            elevation="0"
            href="https://open.spotify.com/album/7sS7mbQzasGlm9QSqpHxOt"
            alt="Play on Spotify"
            target="_blank"
            rel="noreferrer"
            width="60"
          >
            <v-img
              src="../assets/icons/spotify.svg"
              class="home__feature--badge home__feature--spotify"
              width="60"
            />
          </v-btn>
          <v-btn
            icon
            class="mt-7 mb-6 mx-4 mx-lg-0"
            elevation="0"
            href="https://music.apple.com/us/album/behold-the-sonic-universe/1586246399"
            alt="Play on Apple Music"
            target="_blank"
            rel="noreferrer"
            width="56"
          >
            <v-img
              src="../assets/icons/apple-music.png"
              class="home__feature--badge home__feature--apple-music"
              width="56"
            />
          </v-btn>
          <v-btn
            icon
            class="mt-4 mb-5 mx-4 mx-lg-0"
            elevation="0"
            href="https://music.youtube.com/playlist?list=OLAK5uy_nbOlukt1KkNLEkGYfqNTFqyS1gQYITwiY"
            alt="Play on YouTube Music"
            target="_blank"
            rel="noreferrer"
            width="60"
          >
            <v-img
              src="../assets/icons/youtube.svg"
              class="home__feature--badge home__feature--youtube"
              width="60"
              height="40"
            />
          </v-btn>
        </v-col>
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
    &--buy {
      color: #015869;
      font: normal normal bold 24px raleway, sans-serif;
      margin: 8px;
      text-transform: unset !important;
      letter-spacing: -1px;
      border-radius: 25%;

      &:hover {
        color: #8a4d58;
      }
    }

    &--badges {
      background-color: #015869;
    }

    &--badge {
      &:hover {
        background-color: #8a4d58;
      }
    }

    &--spotify {
      &:hover {
        border-radius: 50%;
      }
    }

    &--apple-music {
      &:hover {
        border-radius: 20%;
      }
    }

    &--youtube {
      &:hover {
        border-radius: 20%;
      }
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
