type Event = {
  index: number;
  title: string;
  who: string;
  date: Date | string;
  where: string;
  what: string;
  description: string;
  image: NodeRequire;
  link: string;
};

export const Events: { events: Event[] } = {
  events: [
    {
      index: 0,
      title: "The Footnotes Big Band",
      who: "The Footnotes Jazz Collective",
      date: new Date("2021-09-21T23:59:59"),
      where: "River Landing Ampitheater, Saskatoon",
      what: "Compositions & Performance",
      description:
        "The Footnotes Jazz Collective presents: the Footnotes Big Band! Come down to the River Landing Amphitheater next to the spray park for some big band classics mixed in with brand new arrangements!",
      image: require("../assets/events/the-footnotes-jazz-collective.jpeg"),
      link: "https://www.facebook.com/events/3224107931149997/",
    },
    {
      index: 1,
      title: "Hedwig and the Angry Inch",
      who: "Sparrow Theatre Company",
      date: new Date("2021-09-28T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Music Director & Performance - Guitar, Piano, BG Vocals",
      description:
        "Hedwig and the Angry Inch tells the story of “internationally ignored song stylist” Hedwig Schmidt, a fourth-wall smashing East German rock ‘n’ roll goddess who also happens to be the victim of a botched sex-change operation, which has left her with just “an angry inch”.",
      image: require("../assets/events/hedwig-and-the-angry-inch.jpeg"),
      link: "https://www.facebook.com/events/2983286145271417/",
    },
    {
      index: 2,
      title: "Back in the Swing of Things!",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2021-11-13T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Performance - Bass Trombone",
      description:
        "Featuring the music of Count Basie, Duke Ellington, Rob McConnell and more, with special guest Graham Dyck!",
      image: require("../assets/events/back-in-the-swing-of-things.svg"),
      link: "https://saskatoonjazzorchestra.com/event/back-in-the-swing-of-things/",
    },
    {
      index: 3,
      title: "Folktales & Festivities",
      who: "Katrina MacKinnon & Terri-Lynn Mitchell",
      date: new Date("2021-12-05T23:59:59"),
      where: "The Bassment, Saskatoon",
      what: "Composition",
      description:
        "... Enjoy the world premier of Triptych by Saskatoon’s own Spencer Krips, a song cycle for soprano, piano, and double bass, featuring guest artist Stephen Kreuger.",
      image: require("../assets/events/tbt-logo.png"),
      link: "https://www.facebook.com/events/2936537516658429/",
    },
    {
      index: 4,
      title: "Make a Joyful Noise",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2021-12-11T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Performance - First Trombone",
      description:
        "Celebrating the holidays with the SJO’s annual joyous and groove-filled extravaganza.",
      image: require("../assets/events/make-a-joyful-noise.svg"),
      link: "https://saskatoonjazzorchestra.com/event/make-a-joyful-noise-2021/",
    },
    {
      index: 5,
      title: "The Fab 4 and More: Beatles for Big Band",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2022-05-13T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Performance - Third Trombone",
      description:
        "A groovy blend of classic and reimagined iconic Beatles tunes with guest conductor Ray Baril",
      image: require("../assets/events/the-fab-4-and-more.png"),
      link: "https://saskatoonjazzorchestra.com/event/the-fab-4-and-more/",
    },
    {
      index: 6,
      title: "Dimensions in Sound",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2022-06-17T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Performance - First Trombone",
      description:
        "Exploring soundscapes with acclaimed visual artist Allyson Glenn, featuring Grammy Award winner Larnell Lewis.",
      image: require("../assets/events/dimensions-in-sound.svg"),
      link: "https://saskatoonjazzorchestra.com/event/dimensions-in-sound/",
    },
    {
      index: 7,
      title: "Disney's Frozen - In Concert Live to Film",
      who: "Saskatoon Symphony Orchestra",
      date: "TBD",
      where: "TCU Place, Saskatoon",
      what: "Performance - Bass Trombone",
      description:
        "Experience Disney’s award-winning “Frozen” in a new way with the Saskatoon Symphony Orchestra (SSO). As “Frozen” plays on a large movie screen, Martin MacDonald will lead the SSO performing the film’s score live to film.",
      image: require("../assets/events/disneys-frozen.png"),
      link: "https://saskatoonsymphony.org/event/disneys-frozen-film-in-concert/",
    },
  ],
};
