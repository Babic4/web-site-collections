<template>
  <!--  https://assets5.lottiefiles.com/packages/lf20_wz4epvgf.json  -->
  <!--  https://assets9.lottiefiles.com/packages/lf20_590wxrsl.json  -->
  <!-- /loader.js0n  -->

  <lottie-player
    class="loader"
    src="https://assets5.lottiefiles.com/packages/lf20_wz4epvgf.json"
    background="transparent"
    speed="1"
    style="width: 100px; height: 100px; z-index: 5"
    loop
    autoplay
  ></lottie-player>
  <div></div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background-color: #f1f1f1;
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}
.loader {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
