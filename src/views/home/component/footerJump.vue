<template>
  <div class="footer-jump">
    <BottomContentItemCard class="content-item" :chartData="chartData1" />
    <BottomContentItemCard class="content-item" :chartData="chartData2" />
    <BottomContentItemCard class="content-item" :chartData="chartData3" />
  </div>
</template>

<script setup>
import BottomContentItemCard from "@/components/BottomContentItemCard/index.vue";
import { reactive } from "vue";

const chartData1 = reactive({
  title: "善政",
  itemList: [
    {
      iconUrl: "src/assets/img/图层\ 12.png",
      itemTitle: "泉州市公共资源...",
      jumpUrl: "http://61.131.56.248:9202/XmBizUiForWeb/qzscreen/qzScreenIndex.do",
    },
    {
      iconUrl: "src/assets/img/图层\ 5.png",
      itemTitle: "泉州市惠企政策...",
      jumpUrl: "https://bmhqpt.qzdsj.net/dataBoardPc/#/",
    },
    {
      iconUrl: "src/assets/img/图层\ 11.png",
      itemTitle: "泉州市助残项目...",
      jumpUrl: "https://www.qzzc.org.cn/zhtj/statisticsIndex",
    },
    {
      iconUrl: "src/assets/img/图层\ 3.png",
      itemTitle: "泉州市近海养殖...",
      jumpUrl: "http://47.97.253.4:8080/fisheries/#/login",
    },
    {
      iconUrl: "src/assets/img/图层\ 9.png",
      itemTitle: "泉州市在线教育...",
      jumpUrl: "http://ava.qzjyzyw.com/statistics.html#/",
    },
  ],
});

const chartData2 = reactive({
  title: "便民",
  itemList: [
    {
      iconUrl: "src/assets/img/图层\ 14.png",
      itemTitle: "市住房公积金...",
      jumpUrl: "",
    },
    {
      iconUrl: "src/assets/img/图层\ 5.png",
      itemTitle: "政务云联通短信...",
      jumpUrl: "",
    },
    {
      iconUrl: "src/assets/img/图层\ 7.png",
      itemTitle: "市住宅专项维...",
      jumpUrl: "",
    },
    {
      iconUrl: "src/assets/img/图层\ 17.png",
      itemTitle: "市商品房预售...",
      jumpUrl: "",
    },
    {
      iconUrl: "src/assets/img/图层\ 6.png",
      itemTitle: "幸福返泉申请...",
      jumpUrl: "",
    },
  ],
});

const chartData3 = reactive({
  title: "兴业",
  itemList: [
    {
      iconUrl: "src/assets/img/图层\ 8.png",
      itemTitle: "中小企业云安...",
      jumpUrl: "",
    },
    {
      iconUrl: "src/assets/img/图层\ 18.png",
      itemTitle: "市政企直通车...",
      jumpUrl: "",
    },
    {
      iconUrl: "src/assets/img/图层\ 15.png",
      itemTitle: "市公共资源交...",
      jumpUrl: "",
    },
    {
      iconUrl: "src/assets/img/图层\ 16.png",
      itemTitle: "公共产业链数...",
      jumpUrl: "",
    },
    {
      iconUrl: "src/assets/img/图层\ 10.png",
      itemTitle: "市产业链招商...",
      jumpUrl: "",
    },
  ],
});
</script>

<style lang="scss" scoped>
.footer-jump {
  display: flex;
  width: calc(100% - 20px - 20px);
  justify-content: space-between;
  align-items: center;
  height: 232px;
  margin: 0 20px;
  margin-bottom: 36px;
  background-color: #c1dbf1;

  .content-item:nth-child(1) {
    margin-left: 8px;
  }

  .content-item:nth-child(3) {
    margin-right: 10px;
  }
}
</style>
