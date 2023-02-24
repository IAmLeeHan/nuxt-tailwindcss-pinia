/*@ts-ignore*/
import WOW from "wow.js";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            wow: () =>  new WOW({animateClass: 'animate__animated'})
        }
    }
})