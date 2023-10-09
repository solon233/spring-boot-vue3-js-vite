import { createApp } from "vue";
import App from "@/App.vue";
import router from "@config/router.js";

//import './assets/main.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
// サーバでエラー発生時のエラーハンドラ
app.config.errorHandler = (err, vm, info) => {
    router.replace({ name: "InternalServerError" });
};
app.use(router);
app.mount("#app");
