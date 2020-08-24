import firebase from "firebase";
import "firebase/firestore";

// INITIALIZING FIREBASE

var firebaseConfig = {};
firebase.initializeApp(firebaseConfig);

// IMPORTING THE REST OF THE THINGS THAT REQUIRE FIREBASE

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let app;
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
