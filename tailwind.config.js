/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "500px" }, // Custom breakpoint for screens below 500px
        max_sm: { max: "640px" }, // Custom breakpoint for screens below 500px
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        space: "url('../public/space.jpg')",
        lightSpace: "url('../public/lightSpace.jpg')",
        "custom-space": "url('../public/resizeSpace.jpg')",
        "custom-spacely": "url('../public/space.jpg')",
      },
      backgroundSize: {
        cover: "cover",
      },
      backgroundPosition: {
        center: "center",
      },
      backgroundAttachment: {
        fixed: "fixed",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-custom": {
          "@apply bg-center bg-no-repeat bg-cover": {},
          "background-attachment": "fixed",
          "background-position": "center",
          "background-image": "url('../public/space.jpg')",
        },
        ".bence": {
          "@apply bg-center bg-no-repeat bg-cover": {},
          "background-attachment": "fixed",
          "background-position": "center",
          "background-image": "url('../public/bence.png')",
        },

        ".bence_colored": {
          "@apply bg-center bg-no-repeat bg-cover": {},
          "background-attachment": "fixed",
          "background-position": "center",
          "background-image": "url('../public/bence_colored.png')",
        },
      });
    },
  ],
};
