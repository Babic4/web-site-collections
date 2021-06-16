<template>
  <Loader v-if="showLoader" />
  <Header title="ABOUT" />
  <section>
    <div class="info">
      <h1>No-Name</h1>
      <p>
        The self-study lessons in this section are written and organised
        according to the levels of the Common European Framework of Reference
        for languages (CEFR). There are different types of texts and interactive
        exercises that practise the reading skills you need to do well in your
        studies, to get ahead at work and to communicate in English in your free
        time.
      </p>
      <h1>Info .2</h1>
      <p>
        The self-study lessons in this section are written and organised
        according to the levels of the Common European Framework of Reference
        for languages (CEFR). There are different types of texts and interactive
        exercises that practise the reading skills you need to do well in your
        studies, to get ahead at work and to communicate in English in your free
        time.
      </p>
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
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
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
@import "../assets/css/styleAbout.css";

section {
  display: flex;
  margin-top: 10.5vh;

  justify-content: space-between;
  width: 85%;
  flex: 1 0 auto;
}
</style>
