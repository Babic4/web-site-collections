<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const active = ref("HOME");
    provide("active", active);
    const bag = ref(JSON.parse(localStorage.bag));
    provide("bag", bag);
  },
  // provide(){
  //   return{
  //   active:'HOME',
  //   }
  // }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
</style>
