<template>
    <div class=" w-full h-screen bg-slate-200 flex flex-col items-center justify-center">
        <div class="">
            <label for="">username:</label>
            <input type="text" placeholder="username">
        </div>
        <div>
            <label for="">password:</label>
            <input type="text" placeholder="password">
        </div>
        <div>
            <button class=" btn btn-circle  btn-primary">注册</button>
            <button class=" px-2 py-4 rounded-lg bg-blue-400 text-white" @click="loginHandle">登录</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "~~/composables/store";
const user = useStore.user();
const route = useRoute()
definePageMeta({
    layout: false // 通过元信息的方式关闭 default 布局
})
const loginHandle = () => {
    let  data = {
        name:'Lee Han',
        age:30,
        sex:'1',
        token:'987654321',
    }
    user.login(data)
    const token = useCookie('token',{
        expires: new Date((new Date()).getTime() + 60 * 60 * 24)
    })
    token.value = data.token
    const redirect = route.query&&route.query.redirect ? route.query.redirect + '' : ''
    navigateTo(redirect)
}
</script>

<style scoped></style>