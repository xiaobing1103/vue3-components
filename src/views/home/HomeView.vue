<template>
  <div class="digital">
    <topTitle></topTitle>
    <middleShow></middleShow>
    <footerJump></footerJump>
  </div>
</template>

<script setup>
import topTitle from "./component/topTitle.vue";
import middleShow from "./component/middleShow.vue";
import footerJump from "./component/footerJump.vue";
import {onMounted} from "vue";



</script>

<style lang="scss" scoped>
.digital {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  
}
</style>
