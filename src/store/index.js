import Vue from 'vue'
import Vuex from 'vuex'
import todos from "./modules/todos"
import user from "./modules/user";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    user
  }
})