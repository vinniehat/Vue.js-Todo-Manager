<template>
    <div class="header">
        <h2>Vinniehat's Todo Manager</h2>
        <h4>Welcome, {{name}}</h4> <!-- Calls a function called name -->
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
    export default {
        name: "Header",
        computed: {
            name() {
                return this.$store.getters.name;
            }
        }
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