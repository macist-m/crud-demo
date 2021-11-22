import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
// eslint-disable-next-line no-unused-vars
import cookie from "./plugins/cookie";

import router from "./router";

Vue.use(VueRouter);

new Vue({
	vuetify,
	router,
	render: (h) => h(App)
}).$mount("#app");
