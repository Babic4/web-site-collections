<template>
  <footer ref="footer">
    <div class="up-footer">
      <div class="messager">
        <a href="https://www.instagram.com/" target="_blank">instagram</a>/<a
          href="https://www.facebook.com/"
          target="_blank"
          >facebook</a
        >/<a href="https://twitter.com/" target="_blank">twitter</a>
      </div>
      <span class="copyright">© 2021 No-Name™. All rights reserved</span>
      <div class="bag" @click="showBag">
        <span class="orange">{{ decorate1 }}</span
        >bag({{ decorate2 }}{{ bag.value.length }})
      </div>
    </div>
    <div class="box-bag" ref="boxBag" :style="{ height: show }">
      <div class="list">
        <div v-if="bag.value.length == 0" class="not-items">
          <span class="orange">*</span>Don't item
        </div>
        <div v-else v-for="item in bag.value" :key="item" class="item">
          <span class="name"
            ><span class="title">Name.</span> {{ item.name }}</span
          >
          <span class="size"
            ><span class="title">Size.</span>{{ item.size }}</span
          >
          <span class="price"
            ><span class="title">Price.</span> {{ item.price }}</span
          >
          <span class="remove" @click="remove(item.name, item.size)"
            >Remove</span
          >
        </div>
      </div>
      <span class="by">Pack the box / {{ totalPrice }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      decorate1: "",
      decorate2: "",
      show: "0vh",
      totalPrice: "$0",
      flagShow: false,
    };
  },
  inject: ["bag"],
  mounted() {
    if (this.bag.value.length > 0) {
      this.decorate1 = "*";
      this.decorate2 = ".";
      let tP = 0;
      this.bag.value.forEach((element) => {
        tP += Number(element.price.substring(1));
      });
      this.totalPrice = "$" + tP;
    } else {
      this.decorate1 = "";
      this.decorate2 = "";
      this.totalPrice = "$0";
    }
  },
  watch: {
    bag: {
      handler: function () {
        if (this.bag.value.length > 0) {
          this.decorate1 = "*";
          this.decorate2 = ".";
          let tP = 0;
          this.bag.value.forEach((element) => {
            tP += Number(element.price.substring(1));
          });
          this.totalPrice = "$" + tP;
        } else {
          this.decorate1 = "";
          this.decorate2 = "";
          this.totalPrice = "$0";
        }
      },
      deep: true,
    },
  },
  methods: {
    showBag() {
      if (this.$refs.footer.style.backgroundColor == "") {
        this.$refs.footer.style.backgroundColor = "#f1f1f1";
      } else {
        setTimeout(
          function (elem) {
            elem.style.backgroundColor = "";
          },
          300,
          this.$refs.footer
        );
      }

      if (this.$refs.boxBag.style.borderTop == "") {
        console.log("visible");
        this.$refs.boxBag.style.borderTop = "2px #000 solid";
      } else {
        console.log("hiiden");
        setTimeout(
          function (elem) {
            elem.style.borderTop = "";
          },
          300,
          this.$refs.boxBag
        );
      }
      // this.$refs.footer.style.backgroundColor =
      //   this.$refs.footer.style.backgroundColor == "" ? "#f1f1f1" : "";
      // this.$refs.boxBag.style.borderTop =
      //   this.$refs.boxBag.style.borderTop == "" ? "2px #000 solid" : "";
      this.show = this.show == "0vh" ? "80vh" : "0vh";
    },
    remove(name, size) {
      for (let i = 0; i < this.bag.value.length; i++) {
        if (this.bag.value[i].name == name && this.bag.value[i].size == size)
          this.bag.value.splice(i, 1);
      }
      this.setLocalBag();
    },
    setLocalBag() {
      localStorage.bag = JSON.stringify(this.bag.value);
    },
  },
};
</script>

<style scoped>
@import "../assets/css/style.css";

.orange {
  color: #ff5e16;
}

.by {
  color: #ff5e16;
  font-size: 4vh;
  cursor: url("/img/cursor2.png") 22 22, auto;
}

.item {
  padding: 1vh 0 1vh 0;
  display: flex;
  align-items: center;
  font-family: "Merriweather", serif;
  font-style: italic;
  font-weight: 500;
  font-size: 3.1vh;
  position: relative;
}

.title {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.size {
  position: absolute;
  left: 30%;
}

.price {
  position: absolute;
  left: 60%;
}

.remove {
  position: absolute;
  left: 90%;
}

.remove {
  position: absolute;
  cursor: url("/img/cursor2.png") 22 22, auto;
}

.list {
  display: flex;
  flex-direction: column;
  max-height: 70vh;
  overflow-y: auto;
}
.list::-webkit-scrollbar {
  width: 7px;
  background-color: #f9f9fd;
}

.list::-webkit-scrollbar-thumb {
  background-color: #ff5e16;
  height: 10px;
}

.not-items {
  padding: 2vh 0 2vh 0;
}
</style>
