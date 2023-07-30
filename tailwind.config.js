/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}', 
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
        main: "Vazirmatn_500Medium",
    },
    colors: {
        prime:{100:"#EDEDED", 200:"#EDEDED", 300:"#EDEDED"},
        bg:{100:"#EDEDED", 200:"#EDEDED", 300:"#EDEDED"},
        accent:{100:"#EDEDED", 200:"#EDEDED",},
        text:{100:"#EDEDED", 200:"#EDEDED",},
        
        error: "#C4716C",
        success: "#1DC322",
        info: "#3A5290",
        warning:"#E7B10A",
    
        white: "#FFF",
        black: "#000",
        red: "#C4716C",
        green: "#1DC322",
        blue: "#3A5290",
    },
  },
  plugins: [],
}
