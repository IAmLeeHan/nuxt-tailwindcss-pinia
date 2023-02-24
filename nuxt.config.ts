// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from 'vite';
const envScript = process.env.npm_lifecycle_script?.split(" ") as Array<any>

interface VITE_ENV_CONFIG{
    VITE_API_ENV:string,
    VITE_BASE_URL:string

}
const envName = envScript[envScript?.length - 1] // 通过启动命令区分环境
const evnData = loadEnv(envName,"env") as unknown as VITE_ENV_CONFIG

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    css: [
        'animate.css/animate.css',
    ],
    runtimeConfig:{
        public:evnData
    }
})
