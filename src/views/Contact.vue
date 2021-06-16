<template>
  <Loader v-if="showLoader" />
  <Header title="CONTACT" />
  <section>
    <div>
      <div class="messager-menu">
        <a href="https://www.instagram.com/" target="_blank">Instagram</a>/<a
          href="https://www.facebook.com/"
          target="_blank"
          >Facebook</a
        >/<a href="https://twitter.com/" target="_blank">Twitter</a>
      </div>
      <div class="phone">Phone. +375 29 583-49-22</div>
      <a class="email" href="mailto:NoNAME@icloud.com">NoNAME@icloud.com</a>
      <div class="map">
        <span @click="showMap">+Map</span>
        <div  :style="{height: heightMap}">
          <iframe class="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c88e2d8a16f1948569de02d05837c6619e95cab90a9245534346ed9944bee45&amp;source=constructor" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Collection",
  data() {
    return {
      showLoader: true,
      heightMap: "0vh",
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  },
  methods: {
    showMap(){
      this.heightMap = this.heightMap == "0vh" ? "55vh" : "0vh";
    }
  },
  components: {
    Header,
    Footer,
    Loader,
  },
};
</script>

<style scoped>
@import "../assets/css/style.css";
@import "../assets/css/styleContact.css";

section {
  margin-top: 10.5vh;
  padding-bottom: 7vh;
  display: flex;
  justify-content: space-between;
  width: 85%;
  flex: 1 0 auto;
}

section div {
  width: 100%;
}
</style>
