<template>
  <div class="middle-show">
    <!-- 合计数据 -->
    <div class="totalize">
      <!-- 左侧盒子 -->
      <div class="left-box">
        <!-- 合计数据标题 -->
        <div class="title-box">
          <p>项目总数 (个)</p>
        </div>
        <!-- 展示内容 -->
        <div class="content-box">
          <!-- 总数组件 -->
          <MiddleShowNubmerCard
            v-for="(value, key) in leftCardString"
            :key="key + newTime"
            :showNumber="value"
            :showIndex="key"
            :commaStatus="leftCardString.length"
          ></MiddleShowNubmerCard>
          <!-- 符号标签 -->
          <div class="symbol-box">=</div>

          <!-- 数字标签 -->
          <div class="number-box">
            <p>重大项目</p>
            <p>1113</p>
          </div>

          <div class="symbol-box">+</div>

          <div class="number-box">
            <p>一般项目</p>
            <p>110</p>
          </div>

          <div class="symbol-box">+</div>

          <div class="number-box">
            <p>简易项目</p>
            <p>116</p>
          </div>
        </div>
      </div>
      <!-- 右侧盒子 -->
      <div class="right-box">
        <!-- 合计数据标题 -->
        <div class="title-box">
          <p>汇聚数据总量 (条)</p>
        </div>
        <!-- 展示内容 -->
        <div class="content-box">
          <MiddleShowNubmerCard
            v-for="(value, key) in rightCardString"
            :key="key + newTime"
            :showNumber="value"
            :showIndex="key"
            :commaStatus="rightCardString.length"
          ></MiddleShowNubmerCard>

          <div class="number-box right-number-box">
            <p>数据源系统（个）</p>
            <p>652</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 图表展示 -->
    <div class="chart-display">
      <!-- 左侧图表盒子 -->
      <div class="left-chart-box">
        <!-- "完成情况"图表盒子 -->
        <div class="chart-box">
          <!-- 图表标题 -->
          <div class="chart-title">
            <SecondaryTitle title="完成情况（%）"></SecondaryTitle>
          </div>
          <!-- 图表小盒子 -->
          <div class="chart">
            <!-- 完成情况图表 -->
            <div class="completion">
              <!-- 项目建议书阶段 -->
              <div class="completion-item">
                <!-- 子项图标 -->
                <img
                  class="completion-icon"
                  src="../../../assets/img/项目建议书阶段.png"
                  alt="项目建议书阶段"
                />
                <!-- 子项名称 -->
                <span class="completion-name">项目建议书阶段</span>
                <!-- 子项进度条框 -->
                <div class="progress-bar">
                  <!-- 进度条背景框 -->
                  <div class="bg-bar">
                    <!-- 进度条 -->
                    <div class="main-bar" :style="{ width: 150 + 'px' }" />
                  </div>
                </div>
                <!-- 完成进度百分比 -->
                <span class="progress-text">{{ (150 / 150) * 100 }}%</span>
              </div>
              <!-- 可研初设阶段 -->
              <div class="completion-item">
                <!-- 子项图标 -->
                <img
                  class="completion-icon"
                  src="../../../assets/img/可研初设阶段.png"
                  alt="可研初设阶段"
                />
                <!-- 子项名称 -->
                <span class="completion-name">可研初设阶段</span>
                <!-- 子项进度条框 -->
                <div class="progress-bar">
                  <!-- 进度条背景框 -->
                  <div class="bg-bar">
                    <!-- 进度条 -->
                    <div class="main-bar" :style="{ width: 105 + 'px' }" />
                  </div>
                </div>
                <!-- 完成进度百分比 -->
                <span class="progress-text">{{ (105 / 150) * 100 }}%</span>
              </div>
              <!-- 竣工验收阶段 -->
              <div class="completion-item">
                <!-- 子项图标 -->
                <img
                  class="completion-icon"
                  src="../../../assets/img/竣工验收阶段.png"
                  alt="竣工验收阶段"
                />
                <!-- 子项名称 -->
                <span class="completion-name">竣工验收阶段</span>
                <!-- 子项进度条框 -->
                <div class="progress-bar">
                  <!-- 进度条背景框 -->
                  <div class="bg-bar">
                    <!-- 进度条 -->
                    <div class="main-bar" :style="{ width: 90 + 'px' }" />
                  </div>
                </div>
                <!-- 完成进度百分比 -->
                <span class="progress-text">{{ (90 / 150) * 100 }}%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- "主管单位分布情况"图表盒子 -->
        <div class="chart-box">
          <!-- 图表标题 -->
          <div class="chart-title">
            <SecondaryTitle title="主管单位分布情况 (个)"></SecondaryTitle>
            <img src="../../../assets/img/更多.png" class="chart-option" />
          </div>
          <!-- 图表小盒子 -->
          <div class="chart" id="myChartPie"></div>
        </div>
        <!-- "项目概算"图表盒子" -->
        <div class="chart-box">
          <!-- 图表标题 -->
          <div class="chart-title">
            <SecondaryTitle title="项目概算 (万)"></SecondaryTitle>
            <img src="../../../assets/img/更多.png" class="chart-option" />
          </div>
          <!-- 图表小盒子 -->
          <div class="chart">
            <!-- 项目概算图表 -->
            <div class="project-estimate"></div>
          </div>
        </div>
        <!-- 系统数据汇聚情况"图表盒子 -->
        <div class="chart-box">
          <!-- 图表标题 -->
          <div class="chart-title">
            <SecondaryTitle title="系统数据汇聚情况 (个)"></SecondaryTitle>
            <img src="../../../assets/img/更多.png" class="chart-option" />
          </div>
          <!-- 图表小盒子 -->
          <div class="chart">
            <!-- 系统数据汇聚情况图表 -->
            <div class="data-daggregation">
              <div class="data-item">
                <div class="number">
                  <span>390</span>
                </div>
                <div class="content">
                  <span>已汇聚</span>
                </div>
                <div class="icon">
                  <img src="../../../assets/img/底座 数字像素 数字像素.png" />
                </div>
              </div>
              <div class="data-item">
                <div class="number">
                  <span>24</span>
                </div>
                <div class="content">
                  <span>暂停汇聚</span>
                </div>
                <div class="icon">
                  <img src="../../../assets/img/底座 数字像素 数字像素.png" />
                </div>
              </div>
              <div class="data-item">
                <div class="number">
                  <span>9</span>
                </div>
                <div class="content">
                  <span>无需汇聚</span>
                </div>
                <div class="icon">
                  <img src="../../../assets/img/底座 数字像素 数字像素.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧图表盒子 -->
      <div class="right-chart-box">
        <!-- 图表大盒子 -->
        <div class="chart-box">
          <!-- 图表标题 -->
          <div class="chart-title">
            <!-- 标题 -->
            <SecondaryTitle title="项目进度检测" class="title" />
            <!-- 选项 -->
            <div class="option">下滑查看更多</div>
          </div>
          <!-- 图表小盒子 -->
          <div class="chart">
            <progressBarComponent
              v-for="(item, index) in projectCycle"
              :itemDatas="item"
              :chartsId="'progress-charts' + String(index)"
              :key="index + currentTime"
            ></progressBarComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SecondaryTitle from "@/components/SecondaryTitle/index.vue";
import MiddleShowNubmerCard from "@/components/MiddleShowNubmerCard/index.vue";
import progressBarComponent from "./progressBarComponent/index.vue";
import * as echarts from "echarts";
import { onMounted, reactive, ref, watch } from "vue";

let leftCardString = ref("1339"); //左侧总数
let rightCardString = ref("13003216"); //右侧总数
let currentTime = new Date().getTime();
// 饼状图数据
let pieData = reactive([
  {
    value: 42,
    name: "市公安局       42",
    itemStyle: { color: "#E2340A" },
    color: "#E2340A",
  },
  {
    value: 27,
    name: "市水利局       27",
    itemStyle: { color: "#FCA51F" },
    color: "#FCA51F",
  },
  {
    value: 19,
    name: "市卫健委       19",
    itemStyle: { color: "#00CDAE" },
    color: "#00CDAE",
  },
  {
    value: 16,
    name: "市城管局       16",
    itemStyle: { color: "#5544FB" },
    color: "#5544FB",
  },
  {
    value: 16,
    name: "市住建局       16",
    itemStyle: { color: "#1BB7F1" },
    color: "#1BB7F1",
  },
  {
    value: 15,
    name: "市数字办       15",
    itemStyle: { color: "#346FF5" },
    color: "#346FF5",
  },
]);

let newTime = new Date().getTime();
let projectCycle = reactive([
  {
    name: "泉州市图书馆新馆信息化项目",
    projectNodes: [
      {
        name: "建议书评审",
        nodesPercent: 0,
        timeData: "2023/3/20",
      },
      {
        name: "可研初设评审",
        nodesPercent: 0.3,
        timeData: "2023/6/27",
      },
      {
        name: "实施建设",
        nodesPercent: 0.6,
        timeData: "2023/7/5",
      },
      {
        name: "竣工验收",
        nodesPercent: 1,
        timeData: "2023/12/26",
      },
    ],
    percentPoint: 0.7,
    percentage: "70%",
  },
  {
    name: "泉州市水环境综合管理系统项目",
    projectNodes: [
      {
        name: "建议书评审",
        nodesPercent: 0,
        timeData: "2023/4/8",
      },
      {
        name: "可研初设评审",
        nodesPercent: 0.3,
        timeData: "2023/6/14",
      },
      {
        name: "实施建设",
        nodesPercent: 0.6,
        timeData: "2023/6/28",
      },
      {
        name: "竣工验收",
        nodesPercent: 1,
        timeData: "2023/12/28",
      },
    ],
    percentPoint: 1,
    percentage: "100%",
  },
  {
    name: "泉州市“二资监管亚台”项目",
    projectNodes: [
      {
        name: "建议书评审",
        nodesPercent: 0,
        timeData: "2023/4/15",
      },
      {
        name: "可研初设评审",
        nodesPercent: 0.3,
        timeData: "2023/7/6",
      },
      {
        name: "实施建设",
        nodesPercent: 0.6,
        timeData: "2023/7/12",
      },
      {
        name: "竣工验收",
        nodesPercent: 1,
        timeData: "2023/11/11",
      },
    ],
    percentPoint: 0.50,
    percentage: "50%",
  },
]);

// const fn=()=>{
// let news=new Date().getTime()/( new Date(projectCycle[2].projectNodes[3].timeData).getTime() - new Date(projectCycle[2].projectNodes[0].timeData).getTime())

// console.log(news.toFixed(0));
// }
// fn()

// 饼状图
let myChartPieFn = () => {
  var myChartPie = echarts.init(document.getElementById("myChartPie"));
  myChartPie.setOption({
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        let name = params.name; // 获取数据名称
        let colorHtml = `<span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:${params.color}"></span>`; // 获取颜色值
        return colorHtml + name;
      },
    },
    title: {
      text: "573",
      padding: 0,
      subtext: "系统总数",
      x: "30%",
      y: "40%",
      textAlign: "center",
      textStyle: {
        fontSize: 26,
        fontWeight: "bold",

        color: "#264363",
        textBorderColor: "#f00",
        textBorderWidth: 0.5,
      },
      subtextStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#264363",
        textBorderColor: "#f00",
        textBorderWidth: 0.3,
      },
    },

    legend: {
      orient: "vertical",
      top: "middle",
      right: "10%",
      textStyle: {
        color: "#162548",
        fontSize: 16,
        fontWeight: "bold",
      },
      icon: "roundRect",
      data: pieData,
    },

    series: [
      // 主要展示层的
      {
        radius: ["51", "76"],
        center: ["30%", "50%"],
        type: "pie",
        itemStyle: {
          borderColor: "rgba(255,255,255,1)",
          borderWidth: 1,
        },
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },

        data: pieData,
      },
      // 内框遮罩的设置
      {
        radius: ["51", "66"],
        center: ["30%", "50%"],
        type: "pie",
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        animation: false,
        tooltip: {
          show: false,
        },
        itemStyle: {
          color: "rgba(250,250,250,0.5)",
        },
        emphasis: {
          disabled: true,
        },
        data: [
          {
            value: 1,
          },
        ],
      },
    ],
  });
};

// 监听合计数字位数不足时头部添加0
watch(
  [leftCardString, rightCardString],
  ([newLeft, newRight]) => {
    if (newLeft.length < 6) {
      // console.log("watch 已触发: name", newLeft);
      let newLeftNum = newLeft.split("");
      for (var i = 0; i < 6 - newLeft.length; i++) {
        newLeftNum.unshift("0");
      }
      newLeftNum = newLeftNum.join("");
      leftCardString.value = newLeftNum;
      console.log(leftCardString.value);
    }

    if (newRight.length < 9) {
      console.log("watch 已触发: nums", newRight);
      let newRighttNum = newRight.split("");
      for (var i = 0; i < 9 - newRight.length; i++) {
        newRighttNum.unshift("0");
      }
      newRighttNum = newRighttNum.join("");
      rightCardString.value = newRighttNum;
      console.log(rightCardString.value);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);

// 页面加载后调用
onMounted(() => {
  // 获取项目概算图表
  getProjectEstimateChart();
  myChartPieFn();
});

// 获取项目概算图表
const getProjectEstimateChart = () => {
  // 项目概算图表初始化
  const estimateChart = echarts.init(
    document.querySelector(".project-estimate")
  );
  // 项目概算图表配置项
  estimateChart.setOption({
    xAxis: {
      type: "category",
      data: ["项目预算", "批复概算", "核减概算"],
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#FFFFFF",
          width: 3,
        },
      },
      axisLabel: {
        color: "#00359A",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Source Han Sans SC",
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 500,
      axisLabel: {
        color: "#00359A",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "Source Han Sans SC",
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#FFFFFF",
        },
      },
    },
    aria: {
      enable: true,
      decal: {
        show: true,
      },
    },
    series: [
      {
        type: "bar",
        barWidth: 23,
        data: [500, 500, 500],
        itemStyle: {
          color: "rgba(255,255,255, 0.1)",
          borderColor: "#FFF",
          decal: {
            color: "#FFF",
            rotation: 2,
          },
        },
        zlevel: 1,
      },
      {
        barWidth: 10,
        data: [
          {
            value: 450,
            itemStyle: {
              borderColor: "#E23207",
            },
          },
          {
            value: 330,
            itemStyle: {
              borderColor: "#03D18C",
            },
          },
          {
            value: 180,
            itemStyle: {
              borderColor: "#4A8BFF",
            },
          },
        ],
        type: "bar",
        zlevel: 2,
        barGap: "-75%",
        itemStyle: {
          color: function (params) {
            var colorList = [
              ["#E23207", "#FFD71B"],
              ["#03D18C", "#2EF2B0"],
              ["#4A8BFF", "#A2C3FF"],
            ];
            var index = params.dataIndex;
            if (params.dataIndex >= colorList.length) {
              index = params.dataIndex - colorList.length;
            }
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: colorList[index][0] },
              { offset: 1, color: colorList[index][1] },
            ]);
          },
          borderWidth: 1,
          borderRadius: [12, 12, 0, 0],
          decal: {
            symbol: "none",
          },
        },
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
// #myChartPie{
//   height: 360px;
// }

.middle-show {
  flex: 1;
  width: calc(100% - 20px - 20px);
  margin: 0 20px;
  margin-bottom: 11px;
  margin-top: calc(29px - 37px);

  .totalize {
    //   合计数据
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left-box {
      flex: 1;
      height: 143px;
    }
    .right-box {
      flex: 1;
      height: 143px;
    }
  }

  // 图表展示区样式
  .chart-display {
    // 图表展示
    display: flex;

    // 左侧盒子样式
    .left-chart-box {
      flex: 1;
      height: 602px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;

      // 左侧小盒子样式
      .chart-box {
        width: 461px;
        height: 293px;
        background-color: #c1dbf1;
        background-image: url("../../../assets/img/大框 数字像素 数字像素.png");
        background-position: center;
        background-size: 449px 262px;
        background-repeat: no-repeat;
        border-radius: 4px;

        // 图表标题样式
        .chart-title {
          margin: 21px 0 0 70px;
          width: calc(100% - 70px - 20px);
          height: 42px;
          line-height: 42px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .chart-option {
            width: 19px;
            height: 18px;
          }
        }

        // 图表盒子样式
        .chart {
          width: 423px;
          height: 216px;
          margin-left: 23px;
          display: flex;
          justify-content: center;
          align-items: center;

          // 完成情况图表样式
          .completion {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            // 进度条元素样式
            &-item {
              display: flex;
              justify-content: center;
              align-items: center;

              &:nth-child(2) {
                margin: 28px 0;
              }

              // 图标样式
              .completion-icon {
                width: 30px;
                height: 32px;
                margin-right: 8px;
              }

              // 名称样式
              .completion-name {
                width: 140px;
                height: 20px;
                line-height: 20px;
                font-size: 20px;
                font-family: "Source Han Sans SC";
                font-weight: bold;
                color: #00359a;
                -webkit-text-stroke: 0.3px #ffffff;
                margin-right: 7px;
              }

              // 进度条框样式
              .progress-bar {
                width: 158px;
                height: 19px;
                border: 1px solid rgba(255, 255, 255, 0.6);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 6px;

                // 背景框样式
                .bg-bar {
                  width: 150px;
                  height: 8px;
                  background-color: #ffffff;
                  border-radius: 100px;

                  // 进度条样式
                  .main-bar {
                    // 可选参数
                    // width: 105px;
                    height: 8px;
                    background-color: #ffffff;
                    border-radius: 100px;
                    background: linear-gradient(
                      90deg,
                      #2b52ed,
                      rgba(33, 169, 255, 0.5)
                    );
                  }
                }
              }

              // 完成进度百分比样式
              .progress-text {
                width: 53px;
                height: 16px;
                font-size: 20px;
                font-family: "Source Han Sans SC";
                font-weight: bold;
                color: #274d95;
                line-height: 19px;
                -webkit-text-stroke: 0.3px #ffffff;
              }
            }
          }

          // 项目概算图表样式
          .project-estimate {
            width: 370px;
            height: 260px;
          }

          // 系统数据汇聚情况图表样式
          .data-daggregation {
            display: flex;
            width: 423px;
            height: 216px;
            justify-content: center;
            align-items: center;

            // 单个元素样式
            .data-item {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              // 数字框样式
              .number {
                height: 64px;
                font-size: 38px;
                font-family: "SourceHanSansSC-Bold";
                font-weight: bold;
                color: #235ca3;
                line-height: 57px;
                text-shadow: 0px 3px 0px rgba(3, 46, 118, 0.2);
                text-align: center;
                background: linear-gradient(180deg, #0068ff 0%, #005dcf 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                -webkit-text-stroke: 0.3px #ffffff;
                color: transparent;
              }

              // 文字样式
              .content {
                font-size: 20px;
                font-family: "SourceHanSansSC-Bold";
                font-weight: bold;
                color: #235ca3;
                text-shadow: 0px 2px 2px rgba(3, 46, 118, 0.4);
                background: linear-gradient(180deg, #002866 0%, #4c7fc1 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }
      }
    }

    .right-chart-box {
      flex: 1;
      height: 602px;
      background-color: #c1dbf1;
      margin-left: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("../../../assets/img/矩形 1467 拷贝 数字像素 数字像素.png");
      background-position: center;
      background-size: 914px 570px;
      background-repeat: no-repeat;

      // 图表盒子样式
      .chart-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 8px;
        width: 914px;
        height: 570px;

        // 标题盒子样式
        .chart-title {
          display: flex;
          height: 40px;
          padding-left: 62px;
          justify-content: space-between;
          align-items: center;

          // 选项样式
          .option {
            width: 96px;
            height: 16px;
            font-size: 16px;
            font-family: "Source Han Sans SC";
            font-weight: bold;
            font-style: italic;
            color: #007eff;
            -webkit-text-stroke: 0.1px #ffffff;
          }
        }

        // 内容盒子样式
        .chart {
          width: calc(100% - 20px - 20px);
          height: 550px;
          padding: 0 20px 20px 20px;
        }
      }
    }
  }
}
// 合计数据标题样式
.title-box {
  width: 210px;
  height: 37px;
  background-image: url("./../../../assets/img/小标@2x.png");
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-left: 31px;
  padding-top: 8px;

  p {
    height: 26px;
    font-size: 20px;
    font-family: "SourceHanSansSC-Bold";
    font-weight: 900;
    font-style: italic;
    color: #ffffff;
    line-height: 26px;
    background: linear-gradient(180deg, #002866 0%, #4c7fc1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
// 合计数据展示内容公共样式
.content-box {
  width: 100%;
  margin: 20px 0;
  height: 64px;
  display: flex;
  flex-direction: row;
  .symbol-box {
    width: 50px;
    height: 64px;
    font-size: 32px;
    font-family: "SourceHanSansSC-Bold";
    font-weight: bold;
    color: #235ca3;
    line-height: 92px;
    text-shadow: 0px 3px 0px rgba(3, 46, 118, 0.2);
    -webkit-text-stroke: 0.5px #ffffff;
    text-stroke: 0.5px #ffffff;
    background: linear-gradient(180deg, #0068ff 0%, #005dcf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}
.number-box {
  height: 64px;
  p {
    &:nth-child(1) {
      font-size: 16px;
      font-family: "SourceHanSansSC-Bold";
      font-weight: bold;
      color: #235ca3;
      text-shadow: 0px 2px 2px rgba(3, 46, 118, 0.4);
      // -webkit-text-stroke: 0.1px #ffffff;
      background: linear-gradient(180deg, #002866 0%, #4c7fc1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:nth-child(2) {
      font-size: 32px;
      font-family: "SourceHanSansSC-Bold";
      font-weight: bold;
      color: #235ca3;
      text-shadow: 0px 3px 0px rgba(3, 46, 118, 0.2);
      -webkit-text-stroke: 0.5px #ffffff;
      text-stroke: 0.5px #ffffff;

      background: linear-gradient(180deg, #0068ff 0%, #005dcf 99.4873046875%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.right-number-box {
  margin-left: 25px;
}
</style>
