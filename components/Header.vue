<template>
  <div class="gradient w-full h-96 absolute">
    <NavBar />
  </div>
</template>

<script>
import { gsap } from "gsap";
import NavBar from "./NavBar.vue";

export default {
  name: "HelloWorld",
  components: { NavBar },
};
</script>

<style scoped></style>
