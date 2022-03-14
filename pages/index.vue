<template>
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import MainContent from "../components/MainContent.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "IndexPage",
  components: { MainContent, Footer },
};
</script>
