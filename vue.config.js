module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    sitemap: {
      outputDir: "./dist",
      baseURL: "https://spencerkripsmusic.com",
      routes: [
        {
          path: "/",
          name: "Home",
        },
        {
          path: "/bio",
          name: "Bio",
        },
        {
          path: "/press",
          name: "Press",
        },
        {
          path: "/events",
          name: "Events",
        },
        {
          path: "/shop",
          name: "Shop",
        },
        {
          path: "/contact",
          name: "Contact",
        },
        {
          path: "/category/:id",
          name: "Category",
          meta: {
            sitemap: {
              slugs: [
                {
                  id: 391403045112,
                  title: "All Music",
                },
                {
                  id: 391509016824,
                  title: "Instrumental",
                },
                {
                  id: 391403110648,
                  title: "Choir",
                },
                {
                  id: 391403176184,
                  title: "Recordings",
                },
                {
                  id: 391403241720,
                  title: "Apparel",
                },
              ],
            },
          },
        },

        {
          path: "/product/:id",
          name: "Product",
          meta: {
            sitemap: {
              slugs: [
                {
                  id: 7584649216248,
                  title: "behold, the sonic universe",
                },
                {
                  id: 7584640827640,
                  title: "behold, the sonic universe",
                },
                {
                  id: 7584636502264,
                  title: "Jenny",
                },
                {
                  id: 7589284446456,
                  title: "Perseus",
                },
                {
                  id: 7584641220856,
                  title: "Pseudopop in Teal",
                },
                {
                  id: 7584642760952,
                  title: "See How Low the Moon Hangs",
                },
                {
                  id: 7584644366584,
                  title: "to be whole",
                },
                {
                  id: 7584646660344,
                  title: "Ward Lock",
                },
                {
                  id: 7584648331512,
                  title: "what counts as silence",
                },
                {
                  id: 7584655278328,
                  title: "Jenny",
                },
                {
                  id: 7584651051256,
                  title: "Jenny",
                },
                {
                  id: 7584654098680,
                  title: "Jenny",
                },
                {
                  id: 7584650756344,
                  title: "Jenny",
                },
                {
                  id: 7584660881656,
                  title: "Kibo",
                },
                {
                  id: 7584651542776,
                  title: "Kibo",
                },
                {
                  id: 7584657637624,
                  title: "Kibo",
                },
                {
                  id: 7584649904376,
                  title: "Kibo",
                },
                {
                  id: 7584653574392,
                  title: "of loss",
                },
                {
                  id: 7584650526968,
                  title: "of loss",
                },
                {
                  id: 7584653279480,
                  title: "of loss",
                },
                {
                  id: 7584650166520,
                  title: "of loss",
                },
                {
                  id: 7584654000376,
                  title: "Perseus",
                },
                {
                  id: 7584650592504,
                  title: "Perseus",
                },
                {
                  id: 7584653869304,
                  title: "Perseus",
                },
                {
                  id: 7584650428664,
                  title: "Perseus",
                },
                {
                  id: 7584663732472,
                  title: "Pseudopop in Teal",
                },
                {
                  id: 7584651870456,
                  title: "Pseudopop in Teal",
                },
                {
                  id: 7584662454520,
                  title: "Pseudopop in Teal",
                },
                {
                  id: 7584651804920,
                  title: "Pseudopop in Teal",
                },
                {
                  id: 7584669139192,
                  title: "See How Low the Moon Hangs",
                },
                {
                  id: 7584652165368,
                  title: "See How Low the Moon Hangs",
                },
                {
                  id: 7584666222840,
                  title: "See How Low the Moon Hangs",
                },
                {
                  id: 7584652034296,
                  title: "See How Low the Moon Hangs",
                },
                {
                  id: 7584653050104,
                  title: "Ward Lock",
                },
                {
                  id: 7584649740536,
                  title: "Ward Lock",
                },
                {
                  id: 7584652787960,
                  title: "Ward Lock",
                },
                {
                  id: 7584650002680,
                  title: "Ward Lock",
                },
                {
                  id: 7584673988856,
                  title: "what counts as silence",
                },
                {
                  id: 7584652361976,
                  title: "what counts as silence",
                },
                {
                  id: 7584672022776,
                  title: "what counts as silence",
                },
                {
                  id: 7584652493048,
                  title: "what counts as silence",
                },
              ],
            },
          },
        },
        {
          path: "/:catchAll(.*)",
          name: "FourOhFour",
        },
      ],
    },
  },
};
