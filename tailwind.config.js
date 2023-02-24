/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes:[
      {
        mytheme: {
        
          "primary": "#498dc1",
                  
          "secondary": "#ce4a48",
                  
          "accent": "#01af4a",
                  
          "neutral": "#271F28",
                  
          "base-100": "#F0ECF3",
                  
          "info": "#6EA0F7",
                  
          "success": "#58D5BC",
                  
          "warning": "#FACE2E",
                  
          "error": "#FC4F55",
        },
      },
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
