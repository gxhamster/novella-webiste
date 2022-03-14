<template>
  <div class="gradient h-[700px] relative">
    <div class="container mx-auto">
      <NavBar />
      <div
        class="flex w-full gap-x-10 h-full relative mt-10 justify-between px-10"
      >
        <h3 class="text-8xl font-semibold text-white max-w-[500px]">
          Innovate with us
        </h3>
        <div
          class="w-[1000px] h-[600px] bg-white rounded-[80px] shadow hidden sm:hidden lg:block"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
