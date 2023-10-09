import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

/**
 * パス解析
 * webpackの定義で"__dirname"を参照するようなパス解析をこれに置き換える
 * @param {String} relativePath
 * @returns
 */
const resolvePath = (relativePath) =>
    fileURLToPath(new URL(relativePath, import.meta.url));

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8089,
        origin: "http://localhost:8089",
    },
    base: "/customer/",
    build: {
        polyfillModulePreload: false,
        manifest: true,
        outDir: "src/main/resources/static/",
        rollupOptions: {
            input: {
                main: "src/main.js",
                // main: "./src/index.html",
            },
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "[name]-[hash].js",
                assetFileNames: "[name]-[hash][extname]",
            },
        },
    },
    resolve: {
        alias: {
            "@": resolvePath("src"),
            "@asset": resolvePath("src/assets"),
            "@config": resolvePath("src/config"),
            "@comp": resolvePath("src/components"),
            "@view": resolvePath("src/views"),
        },
    },
});
