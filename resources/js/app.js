require('./bootstrap')
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import Vueaxios from 'vue-axios';
import axios from 'axios'

createApp(App)
  .use(router)
  .use(Vueaxios, axios)
  .mount("#app");