import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"; // Element Plus のデフォルトスタイル

const app = createApp(App);

app.use(ElementPlus); // Element Plus を Vue に適用
app.mount("#app");
