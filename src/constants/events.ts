type Event = {
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
      title: "The Footnotes Big Band",
      who: "The Footnotes Jazz Collective",
      date: new Date("2021-09-21T23:59:59"),
      where: "River Landing Ampitheater, Saskatoon",
      what: "Compositions & Performance",
      description:
        "The Footnotes Jazz Collective presents: the Footnotes Big Band! Come down to the River Landing Amphitheater next to the spray park for some big band classics mixed in with brand new arrangements!",
      image: require("../assets/events/the-footnotes-jazz-collective.png"),
      link: "https://www.facebook.com/events/3224107931149997/",
    },
    {
      title: "Hedwig and the Angry Inch",
      who: "Sparrow Theatre Company",
      date: new Date("2021-09-28T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Music Director & Performance - Guitar, Piano, BG Vocals",
      description:
        "Hedwig and the Angry Inch tells the story of “internationally ignored song stylist” Hedwig Schmidt, a fourth-wall smashing East German rock ‘n’ roll goddess who also happens to be the victim of a botched sex-change operation, which has left her with just “an angry inch”.",
      image: require("../assets/events/hedwig-and-the-angry-inch.png"),
      link: "https://www.facebook.com/events/2983286145271417/",
    },
    {
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
      title: "Strata Festival - Hot Spot",
      who: "The Footnotes Jazz Collective",
      date: new Date("2022-05-27T23:59:59"),
      where: "Quance Theatre, University of Saskatchewan, Saskatoon",
      what: "Composition & Performance - Bass Trombone",
      description:
        "The Footnotes Big Band is a local ensemble comprised of talented young musicians who share a love of modern jazz music. The group focuses on performing new works arranged and composed by the band members. This Big Band is part of the Footnotes Jazz Collective, a music project created by Rhett Schroeder in the spring of 2020 to showcase different ensembles.",
      image: require("../assets/events/strata-festival-hot-spot.jpeg"),
      link: "https://stratafest.com/2022/05/27/hotspot/",
    },
    {
      title: "Strata Festival - Blindspot",
      who: "The Strata Ensemble",
      date: new Date("2022-05-28T23:59:59"),
      where: "Quance Theatre, University of Saskatchewan, Saskatoon",
      what: "Composition",
      description:
        "In early 2022, the Strata Festival of New Music asked Saskatchewan composers to submit proposals for music that explored new perspectives on the theme of environmentalism – and the composers did not disappoint! These pieces approach topics such as the space between non-human and human development, the monsoon rains in India, the diverse forms found in nature, and others.",
      image: require("../assets/events/strata-festival-blindspot.jpeg"),
      link: "https://stratafest.com/2022/05/28/blindspot/",
    },
    {
      title: "Saskatchewan Jazz Festival",
      who: "The Footnotes Jazz Collective",
      date: new Date("2022-07-04T23:59:59"),
      where: "Victoria Park, Saskatoon",
      what: "Composition & Performance - Bass Trombone",
      description:
        "The Footnotes Big Band is a local ensemble comprised of young and talented musicians who share a love for modern jazz music. Bringing a new voice to the Saskatchewan jazz scene, they offer a contemporary take on the big band tradition featuring original compositions and arrangements.",
      image: require("../assets/events/jazz-festival-footnotes.jpeg"),
      link: "https://www.saskjazz.com/event/the-footnotes-big-band/",
    },
    {
      title:
        "Saskatchewan Jazz Festival - Prairie Rhythms: 35 Years of Jazz, Community, and Fun",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2022-07-07T23:59:59"),
      where: "Bessborough Gardens, Saskatoon",
      what: "Performance - Trombone",
      description:
        "Under the direction of Dean McNeill the Saskatchewan Jazz Orchestra (SJO) is proud to help celebrate the SaskTel Jazz Festival’s 35th anniversary through this one-time-only gala concert featuring home grown Sk talent from multiple generations! Confirmed artists include Ted Warren (Drums), multi Juno award winner Jon Ballantyne (Piano), Al Muirhead (Trumpet), Juno award winner Mike Rud (Guitar), Ross Ulmer (Trombone), Sheldon Corbett (Sax), Barrie Redford (Trumept), Mark DeJong (Sax), plus a whole host of up and coming SK-based musical talent such as Erika Rybinski (Trombone), Spencer Krips (Trombone), Emmett Fortosky (Bass), Adam Streisel (Trumpet), The Saskatoon Youth Jazz Orchestra (SYJO) & friends directed by Nick Fanner, and, many more soon-to-be-announced special guests! Repertoire for this concert will include excerpts from the Regina Jazz Society’s Western Canadian Music Awards-nominated CD “The Saskatchewan Suite: The Story of Us” composed by Fred Stride, and, the “Saskatchewan Suite” composed by Juno award-wining pianist/composer Oliver Jones. Jones’ SK Suite was commissioned by the SaskTel SK Jazz Festival to commemorate the festival’s 25 anniversary. This concert will also feature premiers of 2 original new works composed by Silas Friesen and Paul Suchan.",
      image: require("../assets/events/sjo-logo.svg"),
      link: "https://www.saskjazz.com/event/prairie-rhythms-35-years-of-jazz-community-and-fun-featuring-the-saskatchewan-jazz-orchestra/",
    },
    {
      title: "Poetics of Jazz",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2022-10-22T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Performance & Composition - First Trombone",
      description:
        "Celebrating and showcasing Saskatchewan-based poets by combining poetry with original music",
      image: require("../assets/events/poetics-of-jazz.png"),
      link: "https://saskatoonjazzorchestra.com/event/poetics-of-jazz/",
    },
    {
      title: "25th Elim Christmas 'Finale'",
      who: "The Elim Choir",
      date: new Date("2022-11-23T23:59:59"),
      where: "TCU Place, Saskatoon",
      what: "Performance - Bass Trombone",
      description:
        "The Elim Choir, featured performers and 25-piece orchestra are joined by guest artists Leon Leontaridis, local favorite Chelsea Mahan and aerialist Nicole Shroeder, all to be held in the beautiful Sid Buckwold Theatre at TCU Place in Saskatoon for two performances on November 23 and November 24.",
      image: require("../assets/events/elim-christmas-finale.jpeg"),
      link: "https://www.elimchurch.ca/christmascelebration",
    },
    {
      title: "Swing Comfort and Joy",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2022-12-10T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Performance - First Trombone",
      description:
        "Celebrate the holidays & give thanks ala swing with the SJO (ft. Alexis Normand)",
      image: require("../assets/events/swing-comfort-and-joy.png"),
      link: "https://saskatoonjazzorchestra.com/event/swing-comfort-joy/",
    },
    {
      title: "Rhapsody in Blue",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2023-03-11T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Performance - First Trombone",
      description:
        "Celebrating nearly 100 years of Rhapsody in Blue with Jens Lindemann and Michelle Aalders",
      image: require("../assets/events/rhapsody-in-blue.png"),
      link: "https://saskatoonjazzorchestra.com/event/rhapsody-in-blue/",
    },
    {
      title: "Disney's Frozen - In Concert Live to Film",
      who: "Saskatoon Symphony Orchestra",
      date: new Date("2023-03-18T23:59:59"),
      where: "TCU Place, Saskatoon",
      what: "Performance - Bass Trombone",
      description:
        "Experience Disney’s award-winning “Frozen” in a new way with the Saskatoon Symphony Orchestra (SSO). As “Frozen” plays on a large movie screen, Martin MacDonald will lead the SSO performing the film’s score live to film.",
      image: require("../assets/events/disneys-frozen.png"),
      link: "https://saskatoonsymphony.org/event/frozen-in-concert/",
    },
    {
      title: "Keyed to Life, the Music of Stevie Wonder",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2023-04-22T23:59:59"),
      where: "Anne Portnuff Theatre - Yorkton Regional High School, Yorkton",
      what: "Performance - First Trombone",
      description:
        "Over 100 million albums sold world-wide, 22 Grammy Awards, an Academy Award (Best Original Song), Star on the Hollywood Walk of Fame, R&B Hall of Fame, Rock & Roll Hall of Fame, Songwriter’s Hall of Fame, are but a few of the accolades honouring the spectacular musical career of the one and only Stevie Wonder. The universality of Stevie Wonder and his music serve as the inspiration behind this Saskatoon Jazz Orchestra show. It will feature a blend of classic and reimagined renditions of Stevie Wonder’s incredibly joy-filled music, presented though the ‘lens’ of Saskatoon’s premiere large jazz orchestra the SJO.",
      image: require("../assets/events/SJO.jpeg"),
      link: "https://www.osac.ca/index.php?option=com_content&view=article&id=156&artist=Saskatoon+Jazz+Orchestra%3A+Keyed+to+Life%2C+the+Music+of+Stevie+Wonder",
    },
    {
      title: "Pictures at an Exhibition Reimagined",
      who: "Saskatoon Jazz Orchestra",
      date: new Date("2023-04-29T23:59:59"),
      where: "Broadway Theatre, Saskatoon",
      what: "Performance - Second Trombone",
      description:
        "An International Jazz Day Eve celebration featuring the one and only guest conductor and arranger Fred Stride",
      image: require("../assets/events/pictures-at-an-exhibition-reimagined.png"),
      link: "https://saskatoonjazzorchestra.com/event/pictures-at-an-exhibition-reimagined/",
    },
    {
      title: "Saskatchewan Jazz Festival - Generations of Artistry and Swing",
      who: "The Footnotes Jazz Collective",
      date: new Date("2023-07-05T23:59:59"),
      where: "Victoria Park, Saskatoon",
      what: "Performance - First Trombone",
      description:
        "An exciting recent addition to Saskatoon’s vibrant music scene the Footnotes Big Band directed by USASK B.Mus. graduate Rhett Schroeder is a 17-piece jazz big band comprised of aspiring Saskatoon-based musicians with a passion for all things jazz, funk, and rock. The Footnotes Big Band began as an outdoor trio project during the pandemic to share music with the community. Through an infectious love of arranging and performing music, this project quickly grew to big band proportions. Following one of their most recent performances at the Broadway Theatre’s Winterruption Festival, the Footnotes Big Band continues to energize the Saskatoon jazz scene with fresh musical arrangements in unique ways that span many musical styles and genres including pop, jazz, funk, rap, folk, classic rock, heavy metal, and even video game music. Don’t miss this electric energy set as the Footnotes Big Band ends the night on a high note!",
      image: require("../assets/events/jazz-festival-footnotes-2023.jpeg"),
      link: "https://www.saskjazz.com/event/saskatoon-jazz-orchestra-guests/",
    },
    {
      title: "The Footnotes Big Band",
      who: "The Footnotes Jazz Collective",
      date: new Date("2021-09-21T23:59:59"),
      where: "River Landing Ampitheater, Saskatoon",
      what: "Compositions & Performance",
      description:
        "The Footnotes Jazz Collective presents: the Footnotes Big Band! Come down to the River Landing Amphitheater next to the spray park for some big band classics mixed in with brand new arrangements!",
      image: require("../assets/events/the-footnotes-jazz-collective.png"),
      link: "https://www.facebook.com/events/3224107931149997/",
    },
    {
      title: "Cinq Morceaux",
      who: "The Strata Ensemble",
      date: new Date("2023-06-03T23:59:59"),
      where: "Zion Lutheran Church, Saskatoon",
      what: "Composition",
      description:
        "Experience a truly unique culinary and musical event that explores the fascinating connection between your sense of taste and hearing. Join us for an evening of five distinct appetizers paired with five specially composed pieces of music, each corresponding to a different modality of taste – bitter, sour, savoury, salty, and sweet.",
      image: require("../assets/events/strata-cinq-morceaux.jpeg"),
      link: "https://stratafest.com/event/cinq-morceaux/",
    },
    {
      title: "10th Anniversary Gala Concert",
      who: "The 2023 PMR Brass Band",
      date: new Date("2023-08-13T23:59:59"),
      where: "Quance Theatre, Saskatoon",
      what: "Arrangement",
      description: "",
      image: require("../assets/events/pmr-gala-concert.jpeg"),
      link: "https://www.facebook.com/100057562656407/posts/pfbid0UySfv5f9rWt7iSHUnSWgP1K3LorFhDDtYjJQHz85H1eqDxhhSc4u5pBtQWa96GBml",
    },
    {
      title: "Singing under the Moon",
      who: "University of Saskatchewan Greystone Singers",
      date: new Date("2023-09-20T23:59:59"),
      where: "St John's Cathedral, Saskatoon",
      what: "Composition",
      description:
        "Under the direction of Dr. Jennifer Lang, the University of Saskatchewan Greystone Singers, University Chorus, and members of Aurora Voce present a 45-minute choral concert underneath the Moon.",
      image: require("../assets/events/singing-under-the-moon.jpeg"),
      link: "https://saskatoonsymphony.org/event/usask-lunar-eclipse/",
    },
    {
      title: "A Case of You",
      who: "Saskatoon Symphony Orchestra",
      date: new Date("2023-10-28T23:59:59"),
      where: "TCU Place, Saskatoon",
      what: "Performace - Third Trombone",
      description:
        "To celebrate Joni Mitchell’s 80th birthday, the SSO teams up with Sarah Slean to explore music from Mitchell’s albums Both Sides Now and Travelogue. Joni Mitchell has gained a reputation as one of the greatest musical artists of all time – it’s extra special to be able to showcase this performance here at the singer-songwriter’s hometown. Our 2018 performance of Mitchell’s music with Slean was a landmark first live performance of Vince Mendoza’s beautiful orchestrations – this new concert pairs favourites like A Case of You and Both Sides Now with classics like River, Blue, and Circle Game.",
      image: require("../assets/events/a-case-of-you.jpeg"),
      link: "https://saskatoonsymphony.org/event/a-case-of-you/",
    },
    {
      title: "reservoirs of quiet",
      who: "Spencer Krips",
      date: new Date("2023-11-17T23:59:59"),
      where: "PAVED Arts, Saskatoon",
      what: "Composition & Performance",
      description:
        "Join us for an immersive audio experience at PAVED Arts in Saskatoon, SK, Canada. Combining spatial audio, reactive visuals, and improvised music, this immersive experience will draw you into the collaborations between performer, listener, and nature. Don't miss this unique opportunity to recharge and find your own reservoir of quiet.",
      image: require("../assets/events/reservoirs-of-quiet.png"),
      link: "https://www.eventbrite.com/e/reservoirs-of-quiet-tickets-735825884027",
    },
    {
      title: "reservoirs of quiet",
      who: "Spencer Krips",
      date: new Date("2023-11-18T23:59:59"),
      where: "PAVED Arts, Saskatoon",
      what: "Composition & Performance",
      description:
        "Join us for an immersive audio experience at PAVED Arts in Saskatoon, SK, Canada. Combining spatial audio, reactive visuals, and improvised music, this immersive experience will draw you into the collaborations between performer, listener, and nature. Don't miss this unique opportunity to recharge and find your own reservoir of quiet.",
      image: require("../assets/events/reservoirs-of-quiet.png"),
      link: "https://www.eventbrite.com/e/reservoirs-of-quiet-tickets-735825884027",
    },
    {
      title: "Rachmaninoff Dances",
      who: "Saskatoon Symphony Orchestra",
      date: new Date("2023-11-25T23:59:59"),
      where: "TCU Place, Saskatoon",
      what: "Performace - Principal Trombone",
      description:
        "Maestro Robert Franz joins the SSO for a sensational night featuring Rachmaninoff’s Symphonic Dances. The concert marks the world premiere of a brand-new concerto by Vincent Ho. This SSO commission, years in the making, showcases world-renowned saxophonist Timothy McAllister center stage.",
      image: require("../assets/events/rachmaninoff-dances.jpg"),
      link: "https://saskatoonsymphony.org/event/rachmaninoff-dances/",
    },
  ],
};
