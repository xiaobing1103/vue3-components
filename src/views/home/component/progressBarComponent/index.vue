<template>
  <div class="progress-bar-component">
    <!-- 左侧项目名部分 -->
    <div class="left-project-name">
      <div class="title">{{ props.itemDatas.name }}</div>
    </div>
    <!-- 右侧进度条部分 -->
    <div class="right-charts">
      <div class="percent-box">
        <div
      
          :style="{ left: `${props.itemDatas.percentPoint * 100}%` }"
        >
          {{ props.itemDatas.percentage }}
        </div>
      </div>
      <div class="progress-charts" :id="props.chartsId"></div>

      <div class="panel-point">
        <div
          class="label-box"
          :style="{ left: `${item.nodesPercent * 100}%` }"
          v-for="(item, index) in props.itemDatas.projectNodes"
          :key="index"
        >
          <div class="label-line"></div>
          <div
            :class="{
              'label-name': true,
              'complete-font-color':
                item.nodesPercent <= props.itemDatas.percentPoint,
              'incomplete-font-color':
                item.nodesPercent > props.itemDatas.percentPoint,
            }"
          >
            <p>
              {{ filDate(item.timeData) }}
            </p>
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, reactive } from "vue";
const props = defineProps({
  itemDatas: {
    type: Object,
    require: true,
  },
  chartsId: {
    type: String,
    require: true,
  },
});

onMounted(() => {
  myChartsBar();
});
const myChartsBar = () => {
  let chartDom = document.getElementById(props.chartsId);
  let myChart = echarts.init(chartDom);
  let option;
  let max1 = 1; // 进度条最大值
  let data1 = [1]; // 背景条的值=最大值
  option = {
    grid: {
      left: "5%",
      top: "5%",
      bottom: "5%",
      right: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      max: max1,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        interval: 0,
        margin: 0,
        verticalAlign: "right",
        align: "left",
        padding: [-30, 0, 0, 0],
        color: "#ffffff",
        fontSize: 16,
      },
      data: [""],
    },
    series: [
      {
        //真实数值的条形图主体
        name: "真实值",
        type: "bar",
        animation: false,
        barWidth: 14,
        itemStyle: {
          borderRadius: [7, 0, 0, 7],
          color: {
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#32D5DA", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0D99FF", // 100% 处的颜色
              },
            ],
          },
        },
        data: [props.itemDatas.percentPoint],
        z: 1,
      },
      {
        //辅助1：真实数值的圆点
        name: "真实值圆点",
        type: "scatter",
        symbolOffset: ["10%", "0"],
        symbolSize: 8,
        itemStyle: {
          borderWidth: 0,
          color: "rgba(255,255,255,1)",
        },
        data: [props.itemDatas.percentPoint],
        z: 5,
      },
      {
        //辅助2：真实数值的圆点外侧圆环
        name: "真实值圆环",
        type: "scatter",
        symbolOffset: ["10%", "0"],
        symbolSize: 15,
        itemStyle: {
          borderWidth: 1,
          borderColor: "rgba(101,224,255,1)",
          //shadowBlur: 15,
          //shadowColor: 'rgba(101,224,255,1)',
          color: "rgba(255,255,255,0.43)",
        },
        data: [props.itemDatas.percentPoint],
        z: 10,
      },
      {
        //辅助3：背景条
        name: "背景条",
        type: "bar",
        animation: false,
        barGap: "-100%",
        barWidth: 14,

        itemStyle: {
          borderRadius: 7,
          color: "rgba(62,78,123,1)",
        },
        data: data1,
        z: 0,
      },
    ],
  };

  option && myChart.setOption(option);
};

const filDate = (val) => {
  let filVal = val.split("/").splice(1, 2).join("-");
  return filVal;
};
</script>

<style lang="scss" scoped>
.progress-bar-component {
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 20px;

  .left-project-name {
    // flex: 1;
    width: 200px;
    height: 100%;
    background-image: url(../../../../assets/img/46f4194f80be698c3f2b9806305d6c0824276d6eefb4a-rJdRtH@2x.png);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 173px 83px;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      width: 160px;
      height: 46px;
      font-size: 20px;
      font-family: "SourceHanSansSC-Bold";
      font-weight: bold;
      color: #235ca3;
      line-height: 26px;
      text-shadow: 0px 2px 2px rgba(3, 46, 118, 0.4);
      // -webkit-text-stroke: 0.1px #ffffff;

      background: linear-gradient(180deg, #002866 0%, #4c7fc1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }
  }
  .right-charts {
    width: 650px;
    height: 100%;
    position: relative;
    .percent-box {
      position: relative;
      position: absolute;
      top: 0;
      left: 30px;
      width: calc(100% - 10px - 10px - 30px - 10px);
      
      // height: 10px;
      // background-color: #f00;
      div {
        position: absolute;
        top: 0;

        margin-left: -50px;
        width: 100px;
        margin-top: 20px;
        font-size: 26px;
        font-family: "SourceHanSansSC-Bold";
        font-weight: bold;
        color: #2d97ff;
        text-shadow: 0px 2px 0px rgba(3, 46, 118, 0.2);
        -webkit-text-stroke: 0.3px #ffffff;
        // text-align: right;
      }
    }
    .panel-point {
      position: relative;
      position: absolute;
      top: 80px;
      left: 30px;
      width: calc(100% - 10px - 10px - 30px - 10px);
      // height: 10px;
      // background-color: #f00;
      .label-box {
        position: absolute;
        top: 0;
        width: 100px;
        .label-line {
          width: 1px;
          height: 14px;
          background: #12a2fa;
        }
        .label-name {
          p {
            font-size: 16px;
            font-family: "SourceHanSansSC-Bold";
            font-weight: bold;
            line-height: 20px;
            -webkit-text-stroke: 0.1px #ffffff;
          }
        }
      }
    }
    .progress-charts {
      width: 100%;
      height: 100%;
    }
  }
}
// 项目节点完成时的颜色
.complete-font-color {
  color: #00359a;
}
// 项目节点未完成时的颜色
.incomplete-font-color {
  color: #577897;
}
</style>
