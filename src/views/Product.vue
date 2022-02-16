<template>
  <div class="product mt-4" :product="id()">
    <v-breadcrumbs
      :items="breadcrumbs()"
      divider="-"
      color="white"
      class="product__breadcrumbs mb-10 ml-16"
    ></v-breadcrumbs>
    <div id="product-component-1644890831058" :product="id()"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Shop } from "@/constants";
declare const window: any;
declare const ShopifyBuy: any;

export default Vue.extend({
  name: "Product",
  methods: {
    id() {
      return this.$route.params.id;
    },
    breadcrumbs() {
      const id = this.$route.params.id;
      const product = Shop.products.find((prod) => prod.id.toString() == id);

      const categories = Shop.categories.filter((cat) => {
        return product?.categories.find((prodCat) => prodCat === cat.id);
      });

      const items = categories.map((cat) => ({
        text: cat.title,
        disabled: false,
        href: "../category/" + cat.id,
      }));
      return [
        {
          text: "Shop",
          disabled: false,
          href: "../shop",
        },
        ...items,
      ];
    },
  },
  mounted() {
    var scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: "spencer-krips-music-1.myshopify.com",
        storefrontAccessToken: "874bdd65c1b5ae084b12a4d805fd12cf",
      });
      ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        const node = document.getElementById("product-component-1644890831058");
        const id = node ? node.attributes.getNamedItem("product") : null;

        ui.createComponent("product", {
          id: id ? id.value : 0,
          node,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px",
                  },
                  "text-align": "left",
                },
                title: {
                  "font-family": "Raleway, sans-serif",
                  "font-weight": "normal",
                  "font-size": "26px",
                  color: "#ffffff",
                },
                button: {
                  "font-family": "Raleway, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#7c454f",
                  },
                  "background-color": "#8a4d58",
                  ":focus": {
                    "background-color": "#7c454f",
                  },
                  "border-radius": "0px",
                  "padding-left": "100px",
                  "padding-right": "100px",
                },
                quantityInput: {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                },
                price: {
                  "font-family": "Raleway, sans-serif",
                  "font-size": "18px",
                  color: "#ffffff",
                },
                compareAt: {
                  "font-family": "Raleway, sans-serif",
                  "font-size": "15.299999999999999px",
                  color: "#ffffff",
                },
                unitPrice: {
                  "font-family": "Raleway, sans-serif",
                  "font-size": "15.299999999999999px",
                  color: "#ffffff",
                },
                description: {
                  "font-family": "Raleway, sans-serif",
                  color: "#ffffff",
                },
              },
              layout: "horizontal",
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
                description: true,
              },
              width: "100%",
              text: {
                button: "Add to cart",
              },
              googleFonts: ["Raleway"],
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  "font-family": "Raleway, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#7c454f",
                  },
                  "background-color": "#8a4d58",
                  ":focus": {
                    "background-color": "#7c454f",
                  },
                  "border-radius": "0px",
                  "padding-left": "100px",
                  "padding-right": "100px",
                },
                quantityInput: {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                },
                title: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  color: "#4c4c4c",
                },
                price: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  color: "#4c4c4c",
                },
                compareAt: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  color: "#4c4c4c",
                },
                unitPrice: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  color: "#4c4c4c",
                },
                description: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "14px",
                  color: "#4c4c4c",
                },
              },
              googleFonts: ["Raleway"],
              text: {
                button: "Add to cart",
              },
            },
            option: {
              styles: {
                label: {
                  "font-family": "Raleway, sans-serif",
                  color: "#ffffff",
                },
                select: {
                  "font-family": "Raleway, sans-serif",
                },
              },
              googleFonts: ["Raleway"],
            },
            cart: {
              styles: {
                button: {
                  "font-family": "Raleway, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  ":hover": {
                    "background-color": "#7c454f",
                  },
                  "background-color": "#8a4d58",
                  ":focus": {
                    "background-color": "#7c454f",
                  },
                  "border-radius": "0px",
                },
              },
              text: {
                total: "Total",
                button: "Checkout",
              },
              googleFonts: ["Raleway"],
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Raleway, sans-serif",
                  "background-color": "#8a4d58",
                  ":hover": {
                    "background-color": "#7c454f",
                  },
                  ":focus": {
                    "background-color": "#7c454f",
                  },
                },
                count: {
                  "font-size": "16px",
                },
              },
              googleFonts: ["Raleway"],
            },
          },
        });
      });
    }
  },
});
</script>

<style lang="scss" scoped>
.product {
  box-sizing: border-box;
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;
}
</style>
