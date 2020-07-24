<template>
    <div>
        <form @submit="onSubmit">
            <b-form-input type="text" size="sm" v-model="name" placeholder="Add Todo here..."></b-form-input>
            <b-button class="success btn-sm" type="submit" value="Submit">Submit</b-button>
        </form>
        <b-alert :show="showSpaceAlert" dismissible @dismissed="showSpaceAlert=false" variant="danger">
            Hey! You can't add a todo with no words!
        </b-alert>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "AddTodo",
        data() {
            return {
                name: '',
                showSpaceAlert: false
            }
        },
        methods: {
            ...mapActions(["addTodo"]),
            onSubmit(e) {
                e.preventDefault();
                if (this.name.trim() !== '') {
                    this.addTodo(this.name);
                    this.name = '';
                } else {
                    this.name = '';
                    this.showSpaceAlert = true;
                }

            }
        }
    }
</script>

<style scoped>
    form {
        padding-bottom: 15px;
        display: inline-block;
    }
    input {
        margin-right: 20px;
    }
    .form-control {
        display: inline;
        width: 200px;
    }
    div {
        width: 300px;
        text-align: center;
        margin-top: 50px;
    }

</style>