type Social = {
  icon?: string;
  image?: NodeRequire;
  link: string;
};

export const Footer: { socials: Social[] } = {
  socials: [
    {
      icon: "mdi-facebook",
      link: "https://www.facebook.com/spencerkripsmusic/",
    },
    {
      icon: "mdi-youtube",
      link: "https://www.youtube.com/channel/UClgDTnOa6oAs5Ag5EfFrBow",
    },
    {
      icon: "mdi-spotify",
      link: "https://open.spotify.com/artist/4WVx02nMAgd6jvUprPffuZ",
    },
    {
      image: require("../assets/icons/apple-music.png"),
      link: "https://music.apple.com/us/artist/spencer-krips/1586246238",
    },
    {
      icon: "mdi-soundcloud",
      link: "https://soundcloud.com/spencerkripsmusic",
    },
  ],
};
