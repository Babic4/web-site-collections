<template>
  <header>
    <img class="logo" src="/img/logo.svg" />
    <div class="menu-button" @click="$router.go(-1)">{{ title }}</div>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
@import "../assets/css/style.css";
</style>
