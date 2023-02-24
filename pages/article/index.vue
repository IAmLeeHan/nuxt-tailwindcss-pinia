<template>
    <div>
        ARTICLE LIST

        <ul>
            <li class="wow animate_animated animate__fadeInUp" data-delay=".3s">
                <NuxtLink to="article/123/呐喊">呐喊</NuxtLink>
            </li>
            <li class="wow animate_animated animate__fadeInLeft"  data-delay=".6s">
                <NuxtLink to="article/111/彷徨">彷徨</NuxtLink>
            </li>
            <li class="wow animate_animated animate__fadeInRight"  data-delay=".9s">
                <NuxtLink to="article/112/狂人日记">狂人日记</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    const { $wow } = useNuxtApp();
    onMounted(()=>{
        $wow().init()
    })
</script>

<style scoped>

</style>