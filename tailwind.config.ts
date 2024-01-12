import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "tiger-image": "url(/images/tiger.jpg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
} satisfies Config;
