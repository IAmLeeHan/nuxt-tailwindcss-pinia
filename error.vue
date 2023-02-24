<template>
    <div class=" flex items-center justify-center flex-col w-full h-screen">
        <p>Code:{{ props.error.statusCode }}</p>
        <NuxtLink to="/">
            <button class=" px-10 py-3 bg-blue-400 rounded-lg text-white">首页</button>
        </NuxtLink>
        <p v-if="props.error.statusCode === 404">Message:{{ props.error.statusMessage }}</p>
        <p v-else>Message:{{ props.error.message }}</p>
        <div v-html="props.error.stack"></div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    error: null
})
console.log(props.error);

</script>

<style scoped></style>