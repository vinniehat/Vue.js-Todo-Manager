<template>
    <div>
    <li class="header">
        <h2>Vinniehat's Todo Manager</h2>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li v-if="this.isLoggedIn()"><router-link to="/todos">Todos</router-link></li>
        <li v-if="!this.isLoggedIn()"><router-link to="/login">Login</router-link></li>
        <li v-if="!this.isLoggedIn()"><router-link to="/register">Register</router-link></li>
        <li><button v-if="this.isLoggedIn()" @click.prevent="logout" class="btn black">Logout</button></li>
    </div>
</template>

<script>
    // import {mapActions} from "vuex";

    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Header",
        methods: {
            ...mapActions(['logoutUser']),
            ...mapGetters(['isLoggedIn']),
            logout() {
                this.logoutUser(this.$router);
            },

        },
        computed: {
            name() {
                return this.$store.getters.name;
            }
        },
    }
</script>

<style scoped>

    h2 {
        padding: 0;
        margin: 0;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    div {
        padding-bottom: 20px;
        border-bottom: 2px solid black;
    }


</style>