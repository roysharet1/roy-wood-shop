import Vue from "vue";
import Vuex from "vuex";
import { Api } from "../api/index";
import moment from "moment";

//import all modules

const cloneDeep = require("lodash/cloneDeep");

import text from "../assets/text";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: "",
    loadingPopup: false,
  },
  getters: {
    // // // // sample
    // structureCode: (state) => {
    //   return state.structureCode;
    // }
  },
  mutations: {
    // // // // sample
    // setStructureCode: (state, payload) => {
    //   state.structureCode = payload;
    // }
  },
  actions: {
    // // // // sample
    // updateDispanseDates({ commit }, payload) {
    //   commit("updateDispanseDates", payload);
    // }
  },
  modules:{
      
  }
});
