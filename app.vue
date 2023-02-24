<template>
  <div class="h-screen bg-red-500 w-7.5">
    <NuxtLayout>
      <RouterView />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>

let _gap_time = 0;
let _beforeUnload_time = 1000;
let beforeunloadHandler = (e: any) => {
  _beforeUnload_time = new Date().getTime();
  getDuration()
};
let unloadHandler = (e: any) => {
  _gap_time = new Date().getTime() - _beforeUnload_time;
  //判断是窗口关闭还是刷新
  if (_gap_time <= 5) {
    getDuration()
  } else {
    console.log("YYYYYYY")
    getDuration()
  }
};
let timer: any
onMounted(() => {
  window.addEventListener("beforeunload", (e) => beforeunloadHandler(e));
  window.addEventListener("unload", (e) => unloadHandler(e));
  // timer = setInterval(()=>{
  //   getClipboard()
  // },2000)
})

var startTime = Math.ceil(new Date().getTime() / 1000) //单位秒
const getDuration = function () {
  var time = '',
    hours = 0,
    minutes = 0,
    seconds = 0,
    endTime = Math.ceil(new Date().getTime() / 1000),
    duration = endTime - startTime;

  hours = Math.floor(duration / 3600); //停留小时数
  minutes = Math.floor(duration % 3600 / 60); //停留分钟数
  seconds = Math.floor(duration % 3600 % 60); //停留秒数

  time = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

  return time;
};
const getClipboard = async () => {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Pasted content: ', text);
  } catch (err) {
    console.error('Failed to read clipboard contents: ', err);
  }
}
onUnmounted(() => {
  console.log('121212----');
  clearInterval(timer)
  window.removeEventListener("beforeunload", (e) => beforeunloadHandler(e));
  window.removeEventListener("unload", (e) => unloadHandler(e));
})
</script>
