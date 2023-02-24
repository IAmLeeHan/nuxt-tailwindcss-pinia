<template>
    <div>
        HOMOPAGE
        <!-- <button class="btn btn-primary" @click="getNav">获取数据</button> -->
        <div class=" flex ">
            <ul class=" bg-red-200" v-if="navValue">
                <li 
                    v-for="(nav,index) in navValue"
                    :key="index"
                >
                    <p>{{ nav.typeId + ":" + nav.typeName }}</p>
                    <p
                    v-for="(navChild,cIndex) in nav.childs"
                    :key="cIndex"
                    >{{ navChild.typeId + ":" + navChild.typeName + ':' +navChild.typeSeoTitle }}</p>
                </li>
            </ul>
            <ul class=" bg-blue-300" v-if="data">
                <li 
                    v-for="(nav,index) in data"
                    :key="index"
                >
                    <p>{{ nav.typeId + ":" + nav.typeName }}</p>
                    <p
                    v-for="(navChild,cIndex) in nav.childs"
                    :key="cIndex"
                    >{{ navChild.typeId + ":" + navChild.typeName + ':' +navChild.typeSeoTitle }}</p>
                </li>
            </ul>
        </div>
        <div>
            <VueCountTo :end='end' :autoPlay="true" :duration='3000' separator="," :decimals="2" decimal="."></VueCountTo>
        </div>
        <div>
            <progress class="progress w-56" value="70" max="100"></progress>
        </div>
        <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-5xl">
                    <span style="--value:15;"></span>
                </span>
                days
            </div>
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-5xl">
                    <span style="--value:10;"></span>
                </span>
                hours
            </div>
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-5xl">
                    <span style="--value:24;"></span>
                </span>
                min
            </div>
            <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-5xl">
                    <span :style="`--value:${sec}`"></span>
                </span>
                sec
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { nav } from '@/composables/api'
// import { clientNav } from '@/composables/clientApi'
import VueCountTo from '@/components/vue-countTo.vue'
const navData = await nav()
const {data} = navData
const navValue = ref([]) as any
const getNav = async ()=>{
    const res = await nav()
    navValue.value = res.data
}
onMounted(()=>{
    getNav()
})

const sec = ref(0)
const end = 60000.156632
// setInterval(() => {
//     sec.value++
// }, 1000);
const refset = ref()
// onMounted(() => {
//     for (let i = 0; i < itemRefs.length; i++) {
//         //console.log(itemRefs[i]);
//         useIntersectionObserver(itemRefs[i], ([{ isIntersecting }]) => {
//             // 如果target对应的DOM进入可视区，那么该回调函数就触发
//             if (isIntersecting) {
//                 // 被监听的DOM进入了可视区:此时调用接口获取数据；停止继续监听

//                 console.log(itemRefs[i]);
//                 if (typeof (itemRefs[i].displayValue) != "undefined") {
//                     if (itemRefs[i].displayValue < itemRefs[i].endVal) {
//                         itemRefs[i].start();
//                     } else {
//                         console.log("大于等于时不需要动画");
//                     }
//                 }
//             }
//         }, { threshold: 0.5 })
//     }}
// )
</script>