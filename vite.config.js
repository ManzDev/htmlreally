import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
const isGitHubPages = true;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

export default defineConfig({
  root: "src",
  base,
  mode,
  publicDir: "../public",
  plugins: [vue()],
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
});
