import { defineStore } from 'pinia';
interface User {
    name: string,
    age: number,
    sex: string,
    token: string
}
const cookiesStorage = {
    setItem (key:string, state:any) {
        const cookies = useCookie(key)
      return cookies.value = state
    },
    getItem (key:string) {
      return useCookie(key).value
    },
  }
export const user = defineStore("user", {
    state: ():User => {
        return {
            name: "",
            age: 0,
            sex: "",
            token: ""
        }
    },
    actions: {
        login(data: User) {
            const { name,
                age,
                sex,
                token } = data;
            this.name = name
            this.age = age
            this.sex = sex
            this.token = token
        }
    },
    persist: process.client && {
        storage: cookiesStorage,
        paths: ['token','name','age','sex']
      }
})