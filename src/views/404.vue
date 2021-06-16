<template>
  <section>
    <img class="nf-404" src="img/404.svg" />
    <div class="text">Not-found</div>
    <span class="btn-home" @click="$router.push('/')">HOME</span>
  </section>
</template>

<script>
export default {
  name: "404",
  methods: {},
};
</script>

<style scoped>
@import "../assets/css/style.css";

section {
  display: flex;
  height: 100%;
  width: 100%;
}

.nf-404 {
  position: fixed;
  right: -3%;
  top: 30%;
  height: 50vh;
}

.text {
  top: 45%;
  transform: translateY(-50%);
  left: 7%;
  position: absolute;
  white-space: nowrap;
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-size: 15vh;
  writing-mode: vertical-lr;
}

.btn-home {
  transform: translateX(-50%);
  position: absolute;
  bottom: 10%;
  left: 69.5%;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 6vh;
  cursor: url("/img/cursor2.png") 22 22, auto;
}
</style>
