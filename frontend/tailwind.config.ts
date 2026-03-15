import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        mist: "#eef3fb",
        aurora: "#6d78ff",
        boreal: "#7a5cff",
        frost: "#f7f8fc",
        panel: "rgba(10, 18, 34, 0.72)"
      },
      boxShadow: {
        halo: "0 24px 60px rgba(9, 16, 31, 0.16)"
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "aurora-mesh":
          "radial-gradient(circle at top left, rgba(109, 120, 255, 0.22), transparent 36%), radial-gradient(circle at top right, rgba(122, 92, 255, 0.18), transparent 28%), linear-gradient(180deg, #f8fbff 0%, #edf3ff 46%, #f8f9fc 100%)"
      }
    }
  },
  plugins: []
} satisfies Config;

