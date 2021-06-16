<template>
  <div class="box-error">
    <span class="close" @click="$emit('close')">Close</span>
    <div class="down-box-error">
      <span class="error"
        >ERROR.<span class="italic">{{ error }}</span></span
      >
    </div>
  </div>
  <div class="overlay" @click="$emit('close')"></div>
</template>

<script>
export default {
  name: "Error",
  props: ["error"],
};
</script>

<style scoped>
.box-error {
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #313131;
  width: 30vw;
  color: #e9e9e9;
  height: 30vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}

.down-box-error {
  padding: 1vh 2vh 1vh 2vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close {
  position: absolute;
  top: 1vh;
  right: 2vh;
  font-family: "Open Sans", sans-serif;
  color: white;
  cursor: url("/img/cursor2.png") 22 22, auto;
}

.error {
  display: flex;
  font-family: "Open Sans", sans-serif;
  color: #ff5e16;
  font-weight: 600;
  font-size: 3vh;
}

.italic {
  font-style: italic;
}

.overlay {
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}
</style>
