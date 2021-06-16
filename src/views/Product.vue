<template>
  <Loader v-if="showLoader" />
  <Error :error="error" v-if="showError" @close="showError = false" />
  <Header title="COLLECTION/" />
  <section>
    <div class="slider">
      <img
        v-for="i in imgs"
        :key="i.src"
        class="img"
        :style="{ zIndex: i.zIndex }"
        :src="i.src"
      />
    </div>
    <span class="btn left" @click="leftSlide">&lt;&lt;</span>
    <span class="btn right" @click="rightSlide">&gt;&gt;</span>
    <div class="product-name">{{ product.name }}</div>
    <div class="box-info">
      <span class="sizes"
        ><span
          :class="sizes.s == 0 ? 'not-active' : 'active'"
          @click="isPressed"
          >s</span
        >/<span
          :class="sizes.m == 0 ? 'not-active' : 'active'"
          @click="isPressed"
          >m</span
        >/<span
          :class="sizes.l == 0 ? 'not-active' : 'active'"
          @click="isPressed"
          >l</span
        >/<span
          :class="sizes.xl == 0 ? 'not-active' : 'active'"
          @click="isPressed"
          >xl</span
        ></span
      >
      <span class="product-price">{{ product.price }}</span>
      <span class="btn-add" @click="addBag">+Add</span>
    </div>
  </section>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Error from "@/components/Error.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Product",
  data() {
    return {
      items: [],
      product: {},
      imgs: [],
      sizes: {},
      showError: false,
      error: "",
      showLoader: true,
    };
  },
  inject: ["bag"],
  mounted() {
    this.items = JSON.parse(localStorage.data);
    this.items.forEach((item) => {
      if (item.name == this.$route.params.name) this.product = item;
      this.sizes = this.product.sizes;
    });
    for (let i = 0; i < this.product.img.length; i++) {
      this.imgs.push({ zIndex: 3 - i, src: this.product.img[i] });
    }
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  },
  methods: {
    leftSlide() {
      let imgs = document.querySelectorAll(".img");
      for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].style.zIndex == 1) {
          imgs[i].style.transform = "translate(16.5vw, -50%)";

          setTimeout(
            function (i, arr) {
              for (let j = 0; j < arr.length; j++) {
                if (arr[j].zIndex == 1) {
                  arr[j].zIndex = 3;
                } else {
                  arr[j].zIndex--;
                }
              }
              imgs[i].style.transform = "translate(-50%, -50%)";
            },
            300,
            i,
            this.imgs
          );
        }
      }
    },
    rightSlide() {
      let imgs = document.querySelectorAll(".img");
      for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].style.zIndex == 3) {
          imgs[i].style.transform = "translate(-45.5vw, -50%)";

          setTimeout(
            function (i, arr) {
              for (let j = 0; j < arr.length; j++) {
                if (arr[j].zIndex == 3) {
                  arr[j].zIndex = 1;
                } else {
                  arr[j].zIndex++;
                }
              }
              imgs[i].style.transform = "translate(-50%, -50%)";
            },
            300,
            i,
            this.imgs
          );
        }
      }
    },
    addBag() {
      let size = document.querySelector(".pressed");
      if (size) {
        let flag = true;
        this.bag.value.forEach((el) => {
          if (el.size == size.innerHTML && el.name == this.product.name) {
            flag = false;
            this.error = " Item already in the basket";
            this.showError = true;
            return false;
          }
        });
        if (flag) {
          let product = {
            name: this.product.name,
            price: this.product.price,
            size: size.innerHTML,
          };
          this.bag.value.push(product);
        }
        let sizes = document.querySelectorAll(".active");
        sizes.forEach((el) => el.classList.remove("pressed"));
        this.setLocalBag();
      } else {
        this.error = " Size not selected";
        this.showError = true;
      }
    },
    isPressed(event) {
      if (event.target.classList.contains("active")) {
        let sizes = document.querySelectorAll(".active");
        sizes.forEach((el) => el.classList.remove("pressed"));
        event.target.classList.add("pressed");
      }
    },
    setLocalBag() {
      localStorage.bag = JSON.stringify(this.bag.value);
    },
  },
  components: {
    Header,
    Footer,
    Error,
    Loader,
  },
};
</script>

<style scoped>
@import "../assets/css/style.css";
@import "../assets/css/styleProduct.css";

section {
  margin-top: 10.5vh;
  padding-bottom: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 85%;
  flex: 1 0 auto;
}

.img {
  max-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
}

.active:hover {
  color: #ff5e16;
}

.active {
  cursor: url("/img/cursor2.png") 22 22, auto;
}

.not-active {
  color: rgba(0, 0, 0, 0.5);
}
</style>
