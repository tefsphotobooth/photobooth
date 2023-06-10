<template>
  <div>
    <slot />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
      ],
    };
  },
};
</script>
