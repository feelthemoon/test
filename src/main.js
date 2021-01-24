import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import storagePlugin from "./plugins/storage.plugin";

Vue.use(storagePlugin);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
