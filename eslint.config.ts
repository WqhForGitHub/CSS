import html from "eslint-plugin-html";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
  {
    ignores: ["node_modules/**", ".obsidian/**", "__pycache__/**", "_gen/**"],
  },
  {
    files: ["demo/**/*.html", "CSS权威指南第4版/demo/**/*.html"],
    plugins: {
      html,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  eslintPluginPrettierRecommended,
];

export default config;
