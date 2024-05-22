/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", 
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    fontFamily: {
      quote: "Brygada 1918, serif",
      poppins: "Poppins, sans-serif",
      inter: "Inter, sans-serif",
    },
    container: {
      center: true,
      padding: {
        sm: "1rem", // 1rem of padding for small screens
        md: "1.5rem", // Increase to 1.5rem for medium screens
        lg: "2rem", // 2rem of padding for large screens
        xl: "2.5rem", // 2.5rem for extra-large screens
        "2xl": "3rem", // Maximum padding for 2xl screens
      },
      screens: {
        sm: "100%", // Full-width on small screens
        md: "640px", // Custom width for medium screens
        lg: "768px", // Large screens
        xl: "1024px", // Extra-large screens
        "2xl": "1280px", // Larger screens
      },
    },

    extend: {},
  },
  plugins: [ 

],
};
