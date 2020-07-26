import * as firebase from "firebase/app";
import "firebase/auth";

const state = {
    name: "",
    isLoggedIn: null,
    currentUserEmail: ""
}

const getters = {
    name() {
        return state.name;
    },
    isLoggedIn() {
        return state.isLoggedIn;
    }
}

const actions = {
    async registerUser({commit}, [name, email, password, router]) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            router.go({path: router.path});
            firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid).set({name, email, todos: [], createdAt: firebase.firestore.FieldValue.serverTimestamp()})
        }).catch(error => {
            if (error) alert(error);
        })
        commit('registerUser', email);
    },

    async loginUser({commit}, [email, password, router]) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            commit("loginUser", email);

            router.go({path: router.path});
        }).catch(error => {
            if (error) alert(error);
        })
    },

    async logoutUser({commit}, router) {
        firebase.auth().signOut().then(() => {
            commit("logoutUser");
            router.go({path: router.path});
        }).catch(error => {
            if (error) alert(error);
        })
    },
    async setLogin({commit}) {
        firebase.auth().onAuthStateChanged(() => {
            commit("setLogin", !!firebase.auth().currentUser);
        })

    }
}

const mutations = {
    registerUser(email) {
        state.currentUserEmail = email;
    },
    loginUser(email) {
        state.currentUserEmail = email;
        state.isLoggedIn = true;
    },
    logoutUser() {
        state.currentUserEmail = "";
        state.isLoggedIn = false;
        state.name = ""
    },
    setLogin() {
        state.isLoggedIn = !!firebase.auth().currentUser;
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}