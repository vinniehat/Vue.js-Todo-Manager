<template>
    <div>
        <h3>Login</h3>
        <form>
            <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" placeholder="Enter email..." v-model="email">
            </div>
            <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" placeholder="Enter password..." v-model="password">
            </div>
            <b-btn @click.prevent="login">Login</b-btn>
        </form>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            ...mapActions(['loginUser']),
            login() {
                this.loginUser([this.email, this.password, this.$router])
            }
        }
    }
</script>

<style scoped>

</style>