<template>
  <div class="top-title-box">
    <div class="currentTime-box">
      <div class="location">
        泉州市XXXX区
      </div>
      <div class="timer">
        {{ currentTime }}
      </div>
    </div>
    <div class="top-title">
      <div class="big-title">泉州市数字政务建设项目调度监测系统</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import dayjs from 'dayjs';

// 星期映射对象
const weekMap = {
  '0': '星期日',
  '1': '星期一',
  '2': '星期二',
  '3': '星期三',
  '4': '星期四',
  '5': '星期五',
  '6': '星期六'
}

// 当前时间
let currentTime = ref('')
const timerId = ref()
// 页面加载后调用
onMounted(() => {
  timerId.value = setInterval(() => {
    // 获取当前时间
    currentTime.value = getCurrentTime()
  }, 1000)
})
// 页面卸载后调用
onUnmounted(() => {
  clearInterval(timerId)
})

// 日期
let date = ref('')
// 星期
let week = ref('')
// 时间
let time = ref('')
// 获取当前时间
const getCurrentTime = () => {
  // 日期
  date = dayjs().format('YYYY/MM/DD')
  // 星期
  week = weekMap[dayjs().day()]
  // 时间
  time = dayjs().format('HH:mm:ss')
  return `${date}    ${week}    ${time}`
}
</script>

<style lang="scss" scoped>
.top-title-box {
  position: relative;

  .currentTime-box {
    position: absolute;
    display: flex;
    top: 15px;
    left: 29px;
    font-size: 12px;
    font-weight: 400;
    color: #2D97FF;

    .location {
      margin-right: 24px;
    }
  }

  .top-title {
    width: 100%;
    height: 80px;
    background-image: url(../../../assets/img/主标题@2x.png);
    background-size: 83% 80px;
    background-repeat: no-repeat;
    background-position: 160px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .big-title {
      margin-top: 14px;
      height: 26px;
      text-align: center;
      font-size: 34px;
      font-family: 'YouSheBiaoTiHei';
      font-weight: 400;
      color: #ffffff;
      line-height: 24px;
      text-shadow: 0px 2px 10px #0063d2;
    }
  }
}
</style>
