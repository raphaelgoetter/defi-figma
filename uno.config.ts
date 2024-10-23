import { defineConfig } from "unocss"
import bretzelPreset from "./uno-bretzel"
import { presetMini } from "unocss"
import customProperties from "unocss-custom-properties"
import { resolve } from "node:path"

export default defineConfig({
  presets: [
    /**
     * bretzelPreset : ajoute les règles spécifiques Alsacréations :
     * - reset CSS (avec media prefers-reduced-motion, etc.)
     * - classes utilitaires (.visually-hidden)
     * - classes Layouts (liquid/splash, autogrid, switcher, cluster, repel, reel, etc.)
     */
    bretzelPreset(),

    /**
     * presetMini : si activé, génère des classes utilitaires sur demande
     * dark : paramètre optionnel de presetMini, déclenche le darkmode si un ancêtre dispose
     * de l'attribut HTML `data-theme`
     */
    // presetMini({
    //   dark: { dark: "[data-theme='dark']" },
    // }),

    /**
     * Export des custom properties dans le fichier `vars.css`,
     * nécessite le plugin `unocss-custom-properties`
     */
    customProperties({
      writeFile: true,
      filePath: resolve(__dirname, "vars.css"),
      theme: "user",
    }),
  ],
  theme: {
    /**
     * Configuration des valeurs du projet, utilisables en custom properties
     * ou en classes utilitaires selon les besoins
     */
    breakpoints: {
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        500: "#6b7280",
        900: "#111827",
      },
      pink: {
        100: "#FFE9F2",
        200: "#FFC5DD",
        400: "#FF8EBC",
        700: "#B02A61",
      },
    },
    spacing: {
      0: "0",
      4: "0.25rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
    },
    fontFamily: {
      "opensans": "'Open Sans', sans-serif",
      "base": "system-ui, sans-serif",
    },
    fontSize: {
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      36: "2.25rem",
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      40: "2.5rem",
    },
    borderRadius: {
      none: "0",
      lg: "8px",
      "2xl": "24px",
      full: "9999px",
    },
  },
})
