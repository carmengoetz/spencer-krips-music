type Article = {
  title: string;
  date: Date;
  publication: string;
  description: string;
  image: NodeRequire;
  link: string;
};

export const Press: { articles: Article[] } = {
  articles: [
    {
      title: "Reservoirs of Quiet reinvents the sounds of Saskatoon",
      date: new Date("December 28, 2023"),
      publication: "The Starphoenix",
      description:
        "The music here is taking a real place, adding to it, interacting with it, turning a place that exists into something new.",
      image: require("../assets/press/reservoirs-of-quiet.jpg"),
      link: "https://thestarphoenix.com/news/local-news/reservoirs-of-music-reinvents-the-sounds-of-saskatoon",
    },
    {
      title: "behold, the sonic universe: new music from Spencer Krips",
      date: new Date("November 14, 2021"),
      publication: "Saskatchewan Weekend with Shauna Powers",
      description:
        "When you head into nature and hear the sounds of rustling leaves, birds and wildlife, does it sound like music to you? It certainly does to Saskatoon composer Spencer Krips. He believes all of those sounds are an important part of the sonic universe. He explains to host Shauna Powers how his new album explores that idea.",
      image: require("../assets/press/behold-the-sonic-universe.png"),
      link: "https://www.cbc.ca/listen/live-radio/1-205-saskatchewan-weekend/clip/15878350-behold-sonic-universe-music-spencer-krips",
    },
    {
      title: "Spencer Krips drops new album",
      date: new Date("November 8, 2021"),
      publication: "CTV Saskatoon",
      description:
        "CTV's Jeff Rogstad chats with Spencer Krips about his latest album release blending nature sounds, piano and vibraphone.",
      image: require("../assets/press/behold-the-sonic-universe.png"),
      link: "https://saskatoon.ctvnews.ca/video?clipId=2317557",
    },
    {
      title:
        "All about that bass: Strata New Music Festival aims for new highs by going low",
      date: new Date("May 27, 2021"),
      publication: "The Starphoenix",
      description:
        "The Music for the Lowest Acoustic Instruments of Saskatchewan show premieres online June 4. The Strata New Music Festival runs June 4 to 6.",
      image: require("../assets/press/spencer-krips-press.png"),
      link: "https://thestarphoenix.com/entertainment/local-arts/all-about-that-bass-strata-new-music-festival-aims-for-new-highs-by-going-low",
    },
    {
      title: "USask student composer merges music and nature",
      date: new Date("December 17, 2020"),
      publication: "U of S Arts and Science",
      description:
        "Through a summer research project, undergraduate student Spencer Krips opened his ears to new aspects of nature",
      image: require("../assets/press/spencer-krips-bio.png"),
      link: "https://artsandscience.usask.ca/news/articles/5828/USask_student_composer_merges_music_and_nature",
    },
  ],
};
