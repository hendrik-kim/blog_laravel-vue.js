/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// const { default: Vuetify } = require("vuetify");

require("./bootstrap");

window.Vue = require("vue");

import Vuetify from "../plugins/vuetify";
import store from "./store";

Vue.component(
    "app-container",
    require("./components/AppContainer.vue").default
);
Vue.component("login-form", require("./components/loginForm.vue").default);

const app = new Vue({
    vuetify: Vuetify,
    store,
    el: "#app"
});
