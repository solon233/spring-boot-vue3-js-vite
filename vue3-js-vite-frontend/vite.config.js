import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

/**
 * 【パス解析】
 * Viteでは"__dirname"が使用できないのでViteで動作する形式に変更する
 * @param {String} relativePath 相対パス
 * @returns 解析後のパス
 */
const resolvePath = (relativePath) =>
    fileURLToPath(new URL(relativePath, import.meta.url));

/**
 * 【ファイル拡張子チェック】
 * チェック対象ファイルの拡張子が許可された拡張子であるかを判定する
 * @param {String} filename チェック対象ファイル
 * @param {String} exts 許可する拡張子（正規表現）
 * @returns true：許可、false：不許可
 */
const isFileExt = (filename, exts) => filename.match(`.(${exts})$`);

/**
 * 【静的リソース出力先振分】
 * @param {AssetInfo} info
 * @returns 出力先のパス
 */
const sortAssetFile = (info) => {
    // 拡張子からサブディレクトリを設定
    const subDir = isFileExt(info.name, "css")
        ? "css/"
        : isFileExt(info.name, "svg")
        ? "svg/"
        : isFileExt(info.name, "jpeg|jpg|png|bmp|gif")
        ? "img/"
        : isFileExt(info.name, "eot|woff|woff2")
        ? "font/"
        : "";
    // 出力ファイルのパス
    return `${subDir}[name]-[hash][extname]`;
};

export default defineConfig({
    plugins: [vue()],
    /** 【ローカル開発サーバ 】*/
    server: {
        port: 8089,
        // ここを設定しないとSpringBootでページを開いたとき画像などがリンク切れになる
        origin: "http://localhost:8089",
    },
    /** 【プロジェクトルートディレクトリ】 */
    root: "src",
    /** 【SpringBootのコンテキストパス】 */
    base: "/customer/",
    build: {
        // 公式リファレンスにpolyfillは無効にしろと記載があるので無効にする
        modulePreload: {
            polyfill: false,
        },
        // manifest.jsonは使用しないので出力しない
        manifest: false,
        /**
         * 【ビルド時の出力先】
         * rootを設定しているとカレントディレクトリがずれるので注意
         * プロジェクト外に出力したときはビルド時に警告メッセージが出力される
         * emptyOutDirをtrueにするとoutDirをクリアしてからビルドを実行する
         */
        outDir: "../../spring-boot-backend/src/main/resources/static/",
        emptyOutDir: true,
        /**
         * 【rollup設定】
         * Viteはビルド時にRollupというバンドラを使用する
         */
        rollupOptions: {
            input: {
                main:
                    process.env.NODE_ENV === "development"
                        ? "src/main.js"
                        : "src/templates/production.html",
            },
            output: {
                entryFileNames: "dist/[name].js",
                chunkFileNames: "dist/chunk/[name]-[hash].js",
                // 拡張子ごとにサブディレクトリを設定する
                assetFileNames: (info) => `dist/${sortAssetFile(info)}`,
            },
        },
    },
    resolve: {
        alias: {
            "@": resolvePath("src"),
            "@asset": resolvePath("src/assets"),
            "@svg": resolvePath("src/assets/svg"),
            "@config": resolvePath("src/config"),
            "@comp": resolvePath("src/components"),
            "@view": resolvePath("src/views"),
        },
    },
});
