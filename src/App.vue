<template>
  <div>
    <ph-header></ph-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/shared/header/Header.vue';
export default {
  components:{
    'ph-header' : Header
  }
}
</script>

<style>
</style>
