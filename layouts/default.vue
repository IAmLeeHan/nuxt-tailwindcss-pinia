<template>
    <div class=" layout default">
        <header class=" flex items-center justify-between py-6 px-4 bg-blue-200 text-white font-bold">
            <div class=" logo">
                <NuxtLink to="/"> NUXT3 TEMPLATE </NuxtLink>
            </div>
            <div class=" link flex-1 px-6">
                <NuxtLink to="/article"> 文章 </NuxtLink>
            </div>
            <div class=" user">
                <div class="dropdown">
                    <label tabindex="0" class="btn m-1">Click</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <NuxtLink v-if="name" to="/user"> 用户：{{ name }} </NuxtLink>
                <NuxtLink v-else to="/login"> 登录/注册 </NuxtLink>
            </div>
        </header>
        <div class="content flex">
            <div class="slidebar w-1/4 h-screen bg-green-200">
                SLIDRBAR
            </div>
            <main class="content w-3/4 h-screen bg-slate-100">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "~~/composables/store";
const user = useStore.user();
const { name } = storeToRefs(user);
</script>

<style scoped></style>