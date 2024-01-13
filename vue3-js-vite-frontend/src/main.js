import { createApp } from "vue";
import App from "@/App.vue";
import router from "@config/router.js";

//import './assets/main.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(router);

/**
 * SVGファイルを一括コンポーネント登録
 */
// === Viteを使用してSVGをコンポーネント登録 ===
const components = import.meta.glob("@svg/*.svg", {
    as: "component",
    eager: true,
});
Object.entries(components).forEach(([path, definition]) => {
    const componentName = path
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");
    // SVGファイルをコンポーネントとして登録する
    app.component(componentName, definition.default);
});

// サーバでエラー発生時のエラーハンドラ
app.config.errorHandler = (err, vm, info) => {
    router.replace({ name: "InternalServerError" });
};

app.mount("#app");
