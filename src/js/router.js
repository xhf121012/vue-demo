import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

import Home1 from "../cpnts/Home1";
import Home2 from "../cpnts/Home2";

let routes = [
    { path: "/", redirect: "/scroll" },
    { path: "/home1", component: Home1 },
    { path: "/home2", component: Home2 },
];

export default new VueRouter({
    routes
});