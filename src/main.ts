import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "windi.css";
import "@/assets/scss/font.scss";
import "@/assets/scss/reset.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
