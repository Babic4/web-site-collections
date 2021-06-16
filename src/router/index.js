import { createRouter, createWebHistory } from "vue-router";

const data = [
  {
    id: 1,
    name: "JW Anderson",
    price: "$130",
    img: [
      "/img/products/p1-1.png",
      "/img/products/p1-2.png",
      "/img/products/p1-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
  {
    id: 2,
    name: "132 5. Issey Miyake",
    price: "$1081",
    img: [
      "/img/products/p2-1.png",
      "/img/products/p2-2.png",
      "/img/products/p2-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
  {
    id: 3,
    name: "TSAU",
    price: "$691",
    img: [
      "/img/products/p3-1.png",
      "/img/products/p3-2.png",
      "/img/products/p3-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
  {
    id: 4,
    name: "SAUL NASH",
    price: "$931",
    img: [
      "/img/products/p4-1.png",
      "/img/products/p4-2.png",
      "/img/products/p4-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
  {
    id: 5,
    name: "Craig Green",
    price: "$725",
    img: [
      "/img/products/p5-1.png",
      "/img/products/p5-2.png",
      "/img/products/p5-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
  {
    id: 6,
    name: "JW Anderson",
    price: "$130",
    img: [
      "/img/products/p1-1.png",
      "/img/products/p1-2.png",
      "/img/products/p1-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
  {
    id: 7,
    name: "132 5. Issey Miyake",
    price: "$1081",
    img: [
      "/img/products/p2-1.png",
      "/img/products/p2-2.png",
      "/img/products/p2-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
  {
    id: 8,
    name: "TSAU",
    price: "$691",
    img: [
      "/img/products/p3-1.png",
      "/img/products/p3-2.png",
      "/img/products/p3-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
  {
    id: 9,
    name: "SAUL NASH",
    price: "$931",
    img: [
      "/img/products/p4-1.png",
      "/img/products/p4-2.png",
      "/img/products/p4-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
  {
    id: 10,
    name: "Craig Green",
    price: "$725",
    img: [
      "/img/products/p5-1.png",
      "/img/products/p5-2.png",
      "/img/products/p5-3.png",
    ],
    sizes: { s: 1, m: 0, l: 2, xl: 1 },
  },
];

localStorage.data = JSON.stringify(data);
localStorage.bag = JSON.stringify([]);

if (localStorage.data === undefined) localStorage.data = JSON.stringify(data);
if (localStorage.bag === undefined) localStorage.bag = JSON.stringify([]);

const routes = [
  {
    path: "/",
    name: "Menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/collection",
    name: "Collection",
    component: () => import("../views/Collection.vue"),
  },
  {
    path: "/collection/:name",
    name: "Product",
    component: () => import("../views/Product.vue"),
    beforeEnter: (to, from, next) => {
      function isValid(name) {
        let flag = false;
        data.forEach((item) => {
          if (item.name == name) {
            flag = true;
          }
        });
        flag = flag ? false : true;
        return flag;
      }

      if (isValid(to.params.name)) {
        next({ name: "404" });
      }
      next();
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
