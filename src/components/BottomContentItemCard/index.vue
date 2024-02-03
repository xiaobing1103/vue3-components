<template>
  <div class="footer-content">
    <div class="content-top">
      <SecondaryTitle :title="chartData.title"></SecondaryTitle>

      <div class="right">
        <span @click="openScreenfull">更多 ></span>
      </div>
    </div>
    <div class="content-footer">
      <div class="content-item" v-for="item in chartData.itemList" :key="item"  @click="jumpNewWeb(item.jumpUrl)">
        <div
          class="item-icon"
          :style="{ backgroundImage: `url('${item.iconUrl}')` }"
        ></div>
        <span class="item-name">{{ item.itemTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import SecondaryTitle from "@/components/SecondaryTitle/index.vue";
// 定义 props 接收标题和数据
defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});


// 跳转 
const jumpNewWeb = (url) => {
  console.log(url);
  if (url) {
    window.open(
      url,
      "",
      "width=1920,height=1080,location=no,resizable=yes,scrollbars=no"
    );
  }
};
</script>

<style lang="scss" scoped>
.footer-content {
  width: 600px;
  height: 201px;
  background-image: url("../../assets/img/大框 数字像素 数字像素@2x.png");
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  .content-top {
    display: flex;
    justify-content: space-between;
    margin-left: 80px;
    margin-right: 30px;
    height: 42px;
    line-height: 42px;
    align-items: center;
    font-style: italic;
    .left {
      font-size: 20px;
      font-weight: bold;
    }

    .right {
      font-size: 16px;
      font-family: "SourceHanSansSC-Bold";
      cursor: pointer;
      font-weight: bold;
      font-style: italic;
      color: #007eff;
      line-height: 50px;
      -webkit-text-stroke: 0.1px #ffffff;
      text-stroke: 0.1px #ffffff;
    }
  }

  .content-footer {
    display: flex;
    flex: 1;
    width: 560px;
    margin-left: 20px;
    cursor: pointer;

    .content-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .item-icon {
        width: 80px;
        height: 80px;
        // background-image: url('../../assets/img/图层\ 12.png');
        background-position: center;
        background-repeat: no-repeat;
      }

      .item-name {
        display: flex;
        width: 70px;
        font-size: 14px;
        justify-content: center;
        color: #00359a;
        font-weight: bold;
        text-align: center;
        font-family: "SourceHanSansSC-Bold";
      }
    }
  }
}
</style>
