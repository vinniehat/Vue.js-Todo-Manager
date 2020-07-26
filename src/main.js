import firebase from "firebase";
import "firebase/firestore";

// INITIALIZING FIREBASE

var firebaseConfig = {
    apiKey: "AIzaSyCgPRBM-FCN9AT4yrXNwH3xQK2R0lRiuf4",
    authDomain: "vinniehats-todo-manager.firebaseapp.com",
    databaseURL: "https://vinniehats-todo-manager.firebaseio.com",
    projectId: "vinniehats-todo-manager",
    storageBucket: "vinniehats-todo-manager.appspot.com",
    messagingSenderId: "1010711437644",
    appId: "1:1010711437644:web:e26e164a9b6414ebc4efe9",
    measurementId: "G-9N3BFLY9FL"
}
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