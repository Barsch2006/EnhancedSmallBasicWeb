import { createApp} from "vue";
import App from "./components/pages/Docs.vue";

import vuetify from "./plugins/vuetify";

import "vuetify/styles"
import "@mdi/font/css/materialdesignicons.css";
import "./assets/base.css";

createApp(App)
    .use(vuetify)
    .mount("#app");
