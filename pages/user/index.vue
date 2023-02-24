<template>
    <div>
        <p>name:{{ name }}</p>
        <p>age:{{ age }}</p>
        <p>sex:{{ sex }}</p>
        <p>token:{{ token }}</p>
        <div>
            <button class=" px-2 py-4 bg-blue-400 rounded-lg text-white" @click="changeName">changeName</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "~~/composables/store";
const user = useStore.user();
const { name, age, sex, token } = storeToRefs(user);
const changeName = () => {
    user.name = "mark"
}
</script>

<style scoped></style>
