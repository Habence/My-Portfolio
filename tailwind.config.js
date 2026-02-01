/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        xs: { max: "500px" }, // Custom breakpoint for screens below 500px
        max_sm: { max: "640px" }, // Custom breakpoint for screens below 500px
        max_md: { max: "768px" },
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
      backgroundImage: {},

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
          "@apply bg-center": {},
          "background-attachment": "fixed",
          "background-position": "center",
          "background-size": "cover",
          "background-image": "url('/spaceWebsite.jpg')",
        },
        ".yellowCoder": {
          "@apply bg-center bg-no-repeat bg-cover": {},
          "background-attachment": "fixed",
          "background-position": "center",
          "background-image": "url('/yellowCoder.svg')",
        },

        ".blueCoder": {
          "@apply bg-center bg-no-repeat bg-cover": {},
          "background-attachment": "fixed",
          "background-position": "center",
          "background-image": "url('/lightCoder.svg')",
        },
        ".swal2-popup-light": {
          "background-color": "white",
          color: "#0d9488",
        },
        ".swal2-popup-dark": {
          "background-color": "#38343c",
          color: "#FEC45D",
        },
      });
    },
  ],
};
