type Bio = {
  image: NodeRequire;
  paragraphs: {
    index: number;
    text: string;
  }[];
};

export const Bio: Bio = {
  image: require("../assets/bio/spencer-krips-bio.png"),
  paragraphs: [
    {
      index: 0,
      text: "Spencer Krips is a Canadian musician living in the prairies in Saskatchewan. Active in the classical, jazz, and music theatre scenes, Spencer draws inspiration from all aspects of his musical background in his compositions.",
    },
    {
      index: 1,
      text: "Spencer studied Music Education at the University of Saskatchewan, where he was actively involved with the U of S Jazz Ensemble, Wind Orchestra, and Greystones Singers. During his studies, Spencer performed with the Carn Davidson 9, the Saskatoon Symphony Orchestra, and the Saskatoon Jazz Orchestra. Currently, Spencer is an active member of the Saskatoon Jazz Orchestra and the Saskatoon Brass Band, occasionally performs with the Saskatoon Symphony Orchestra, and is the hospitality coordinator for the Strata Festival of New Music.",
    },
    {
      index: 2,
      text: "Spencer’s compositions have been performed across North America, including notable performances by the University of Toronto Hart House Jazz Ensemble and the Kansas State University Concert Band.",
    },
    {
      index: 3,
      text: "On November 12, 2021, Spencer released an album, titled “behold, the sonic universe”, featuring Fraser Krips on percussion. The album explores the relationship between nature, performer, and listener. It is available for purchase and on all streaming platforms.",
    },
  ],
};
