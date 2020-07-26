<template>
    <div>
        <h3>Register</h3>
        <form>
            <div class="input-field">
                <i class="material-icons prefix">person</i>
                <input type="text" id="name" placeholder="Enter name..." v-model="name">
            </div>
            <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" placeholder="Enter email..." v-model="email">
            </div>
            <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" placeholder="Enter password..." v-model="password">
            </div>
            <b-btn @click.prevent="register">Register</b-btn>

        </form>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "Register",
        data() {
            return {
                email: "",
                password: "",
                name: ""
            }
        },
        methods: {
            ...mapActions(['registerUser']),
            register() {
                this.registerUser([this.name, this.email, this.password, this.$router]);
            }
        }
    }
</script>

<style scoped>

</style>