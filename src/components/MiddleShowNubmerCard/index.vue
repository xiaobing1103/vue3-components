<template>

  <div class="card">
    <p>{{ props.showNumber }}</p>
  </div>
  <div class="comma" v-if="props.commaStatus!=showIndex+1&&(showIndex + 1) % 3 == 0">
    <p>,</p>
  </div>
</template>

<script setup>
import {} from "vue";
// ts写法
const props = defineProps({
  showNumber: {
    type: String,
    require: true,
    default: "0",
  },
  showIndex: {
    type: Number,
    require: true,
    default: "0",
  },
  commaStatus: {
    type: Number,
    require: true
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 50px;
  height: 64px;
  background-image: url("./../../assets/img/数字bg@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  p {
    height: 64px;
    font-size: 50px;
    font-family: "SourceHanSansSC-Bold";
    font-weight: bold;
    color: #235ca3;
    line-height: 57px;
    text-shadow: 0px 3px 0px rgba(3, 46, 118, 0.2);
    text-align: center;
    background: linear-gradient(180deg, #0068ff 0%, #005dcf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    text-stroke: 1px #ffffff;
  }
}
.comma {
  width: 50px;
  height: 64px;
  p {
    height: 64px;
    font-size: 50px;
    font-family: "SourceHanSansSC-Bold";
    font-weight: bold;
    color: #235ca3;
    line-height: 57px;
    text-shadow: 0px 3px 0px rgba(3, 46, 118, 0.2);
    text-align: center;
    background: linear-gradient(180deg, #0068ff 0%, #005dcf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    text-stroke: 1px #ffffff;
  }
}
</style>
