<template>
  <div class="secondary-title">
    <span>{{ props.title }}</span>
  </div>
</template>

<script setup>
import {} from "vue";
let props = defineProps({
  title: {
    type: String,
    require: true,
    default: "标题",
  },
});
</script>

<style lang="scss" scoped>
.secondary-title {
  padding-right:10px ;
  font-size: 20px;
  font-family: "SourceHanSansSC-Bold";
  font-weight: bold;
  font-style: italic;
  color: #ffffff;
  -webkit-text-stroke: 0.3px #ffffff;
  text-stroke: 0.3px #ffffff;

  background: linear-gradient(180deg, #01103b 0%, #264363 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
