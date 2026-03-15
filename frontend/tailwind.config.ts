import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111d",
        mist: "#d7e4fb",
        aurora: "#8a7dff",
        boreal: "#6658ff",
        frost: "#f4f7fd",
        panel: "rgba(8, 14, 26, 0.76)",
        graphite: "#050912",
        polar: "#82d6ff",
        ion: "#57c7c4",
        lunar: "#eef4ff",
        ember: "#cfa16f"
      },
      boxShadow: {
        halo: "0 24px 60px rgba(5, 10, 20, 0.24)",
        vein: "0 0 0 1px rgba(130, 214, 255, 0.18), 0 18px 45px rgba(8, 18, 36, 0.3)"
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "aurora-mesh":
          "radial-gradient(circle at 12% 10%, rgba(138, 125, 255, 0.24), transparent 24%), radial-gradient(circle at 82% 12%, rgba(87, 199, 196, 0.18), transparent 18%), radial-gradient(circle at 50% 80%, rgba(130, 214, 255, 0.16), transparent 20%), linear-gradient(180deg, #040812 0%, #091222 42%, #0b1626 100%)"
      }
    }
  },
  plugins: []
} satisfies Config;
