<template>
    <img :src="url" :alt="title" :class="style">
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    phstyle: String,
    border: String
  },
  computed: {
    style() {
      switch (this.phstyle) {
        case "thumb":
          return "img-thumbnail";
          break;
        case "fluid":
          return "img-fluid";
          break;
        default:
          return "img-fluid";
          break;
      }
    }    
  }
};
</script>

<style>
</style>
