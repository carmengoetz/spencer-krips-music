<template>
  <div class="home mt-16">
    <v-row class="home__banner mb-8 mx-auto">
      <v-col align-self="center" class="home__banner--title">
        <span style="font-weight: bold">Spencer</span> Krips Music
      </v-col>
      <v-col class="pa-0">
        <v-img :src="Home.bannerImage" max-width="650" class="home__banner--image" />
      </v-col>
    </v-row>
    <v-row class="home__feature">
      <v-col cols="11" class="pa-0">
        <v-img :src="Home.featureImage" class="home__feature--image" max-width="1144" />
      </v-col>
      <v-col cols="1" class="home__feature--badges py-5">
        <v-row justify="center">
          <v-btn
            elevation="0"
            class="home__feature--buy ma-5"
            href=""
            target="_blank"
            rel="noreferrer"
            width="56"
            height="52"
          >
            Buy
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn
            icon
            class="ma-5"
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
        </v-row>
        <v-row justify="center">
          <v-btn
            icon
            class="mt-7 mb-6"
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
        </v-row>
        <v-row justify="center">
          <v-btn
            icon
            class="mt-4 mb-5 mx-5"
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
        </v-row>
      </v-col>
    </v-row>
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
    }
  }

  &__feature {
    margin: auto;
    padding: 0;

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
}

.btn {
  text-transform: unset !important;
}
</style>
