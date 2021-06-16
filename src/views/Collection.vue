<template>
  <Loader v-if="showLoader" />
  <Header title="COLLECTION" />
  <section>
    <img class="img" :src="activeImg" />
    <div class="list-items">
      <template v-for="item in items">
        <div
          v-if="item.id >= min && item.id <= max"
          :key="item.id"
          @click="toProduct(item)"
          @mouseenter="showImg(item.img[0])"
          @mouseleave="showImg('')"
          class="item"
        >
          +{{ item.name }}
        </div>
      </template>
    </div>
    <div class="btn-group">
      <span @click="previousPage" :style="{ visibility: showL }">&lt;</span
      >{{ String(number).length == 1 ? "0" + number : number
      }}<span @click="nextPage" :style="{ visibility: showR }">&gt;</span>
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
      items: [],
      activeImg: "",
      min: 1,
      max: 8,
      number: 1,
      count: 8,
      countPage: 0,
      showL: "hidden",
      showR: "visibility",
      showLoader: true,
    };
  },
  mounted() {
    this.items = JSON.parse(localStorage.data);
    this.countPage = Math.ceil(this.items.length / this.count);
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  },
  methods: {
    toProduct(item) {
      this.$router.push("/collection/" + item.name);
    },
    showImg(src) {
      this.activeImg = src;
    },
    previousPage() {
      if (this.number - 1 >= 1) {
        this.min -= this.count;
        this.max -= this.count;
        this.number--;
      }
      this.showBtn();
    },
    nextPage() {
      if (this.number + 1 <= this.countPage) {
        this.min += this.count;
        this.max += this.count;
        this.number++;
      }
      this.showBtn();
    },
    showBtn() {
      this.showL = this.number == 1 ? "hidden" : "visible";
      this.showR = this.number == this.countPage ? "hidden" : "visible";
    },
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
@import "../assets/css/styleCollection.css";

section {
  padding-bottom: 7vh;
  margin-top: 10.5vh;
  display: flex;
  justify-content: space-between;
  width: 85%;
  flex: 1 0 auto;
}

.img {
  max-height: 80%;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
