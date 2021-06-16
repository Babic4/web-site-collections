<template>
  <Loader v-if="showLoader" />
  <section class="menu">
    <nav>
      <ul>
        <li
          v-for="item in items"
          :key="item.name"
          @mouseover="addActive(item)"
          @mouseleave="removeActive(item)"
          @click="
            () => {
              active.value = item.name;
              $router.push(item.path);
            }
          "
          :class="item.class"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </section>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Menu",
  data() {
    return {
      items: [
        { name: "HOME", active: true, path: "/", class: "not-active" },
        {
          name: "COLLECTION",
          active: false,
          path: "/collection",
          class: "not-active",
        },
        { name: "ABOUT", active: false, path: "/about", class: "not-active" },
        {
          name: "CONTACT",
          active: false,
          path: "/contact",
          class: "not-active",
        },
      ],
      showLoader: true,
    };
  },
  inject: ["active"],
  mounted() {
    this.items.forEach((item) => {
      if (item.name == this.active.value) item.class = "active";
    });
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  },
  methods: {
    addActive(item) {
      this.items.forEach((i) => {
        i.class = "not-active";
      });
      item.class = "active";
    },
    removeActive(item) {
      item.class = "not-active";
      this.items.forEach((i) => {
        if (i.name == this.active.value) i.class = "active";
      });
    },
  },
  components: {
    Footer,
    Loader,
  },
};
</script>

<style scoped>
@import "../assets/css/style.css";
@import "../assets/css/styleMenu.css";

.active {
  margin-left: 7vw;
  z-index: 1;
  font-weight: 800;
  font-size: 18vh;
  color: #ff5e16;
}

.not-active {
  margin-left: 22vw;
  z-index: 2;
}
</style>
