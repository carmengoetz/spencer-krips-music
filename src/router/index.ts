import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      title: "Spencer Krips Music",
      metaTags: [
        {
          name: "description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:url",
          content: "https://spencerkripsmusic.com",
        },
        {
          property: "twitter:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "twitter:url",
          content: "https://spencerkripsmusic.com",
        },
      ],
    },
  },
  {
    path: "/bio",
    name: "Bio",
    component: () => import(/* webpackChunkName: "bio" */ "../views/Bio.vue"),
    meta: {
      title: "Bio | Spencer Krips Music",
      metaTags: [
        {
          name: "description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:url",
          content: "https://spencerkripsmusic.com/bio",
        },
        {
          property: "twitter:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "twitter:url",
          content: "https://spencerkripsmusic.com/bio",
        },
      ],
    },
  },
  {
    path: "/press",
    name: "Press",
    component: () =>
      import(/* webpackChunkName: "press" */ "../views/Press.vue"),
    meta: {
      title: "Press | Spencer Krips Music",
      metaTags: [
        {
          name: "description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:url",
          content: "https://spencerkripsmusic.com/press",
        },
        {
          property: "twitter:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "twitter:url",
          content: "https://spencerkripsmusic.com/press",
        },
      ],
    },
  },
  {
    path: "/events",
    name: "Events",
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/Events.vue"),
    meta: {
      title: "Events | Spencer Krips Music",
      metaTags: [
        {
          name: "description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:url",
          content: "https://spencerkripsmusic.com/events",
        },
        {
          property: "twitter:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "twitter:url",
          content: "https://spencerkripsmusic.com/events",
        },
      ],
    },
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue"),
    meta: {
      title: "Shop | Spencer Krips Music",
      metaTags: [
        {
          name: "description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:url",
          content: "https://spencerkripsmusic.com/shop",
        },
        {
          property: "twitter:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "twitter:url",
          content: "https://spencerkripsmusic.com/shop",
        },
      ],
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    meta: {
      title: "Contact | Spencer Krips Music",
      metaTags: [
        {
          name: "description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:url",
          content: "https://spencerkripsmusic.com/contact",
        },
        {
          property: "twitter:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "twitter:url",
          content: "https://spencerkripsmusic.com/contact",
        },
      ],
    },
  },
  {
    path: "/category/:id",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/Category.vue"),
    meta: {
      title: "Category | Spencer Krips Music",
      metaTags: [
        {
          name: "description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:url",
          content: "https://spencerkripsmusic.com/category/:id",
        },
        {
          property: "twitter:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "twitter:url",
          content: "https://spencerkripsmusic.com/category/:id",
        },
      ],
    },
  },

  {
    path: "/product/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue"),
    meta: {
      title: "Product | Spencer Krips Music",
      metaTags: [
        {
          name: "description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:url",
          content: "https://spencerkripsmusic.com/product/:id",
        },
        {
          property: "twitter:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "twitter:url",
          content: "https://spencerkripsmusic.com/product/:id",
        },
      ],
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "FourOhFour",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/FourOhFour.vue"),
    meta: {
      title: "404 | Spencer Krips Music",
      metaTags: [
        {
          name: "description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "og:url",
          content: "https://spencerkripsmusic/404",
        },
        {
          property: "twitter:description",
          content:
            "Compositions and arrangements by Spencer Krips, including Jenny for Brass Band. Available for purchase through his shop.",
        },
        {
          property: "twitter:url",
          content: "https://spencerkripsmusic/404",
        },
      ],
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? "Spencer Krips Music";

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode?.removeChild(el)
  );

  if (!to.meta?.metaTags) return next();

  to.meta.metaTags
    .map((tagDef: any) => {
      const tag = document.createElement("meta");
      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag: any) => document.head.appendChild(tag));

  next();
});

export default router;
