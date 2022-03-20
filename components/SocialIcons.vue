<template>
  <div class="flex gap-5">
    <div
      v-for="name in icon_names"
      :key="name"
      class="cursor-pointer w-10 h-10"
    >
      <font-awesome-icon
        class="hover:scale-125 transition-transform"
        :icon="['fab', name]"
        size="2x"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon_names: ["facebook", "twitter", "viber"],
    };
  },
};
</script>
