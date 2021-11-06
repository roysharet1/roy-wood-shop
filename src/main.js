import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";

import router from "./router/router";

import { store } from "./store/store.js";

import colors from "vuetify/lib/util/colors"

import he from "vuetify/es5/local/he";

const opts={
    rtl:true,
    lang:{
        locales:{he},
        current:"he"
    },
    icons:{
        iconfont:"md"
    },
    theme:{
        themes:{
            light:{
                primary: colors.red.accent3,
                secondary:colors.red.lighten1,
                accent:colors.shades.black,
                error:colors.red.accent3,
                info:colors.blue.lighten1,

            }
        }
    }
};
Vue.use(Vuetify);
Vue.use(require("vue-shortkey"));

new Vue({
    el:"#app",
    router,
    vuetify:new Vuetify(opts),
    store,
    render:h=>h(App)
});