<template>
    <div>

        <div class="key">
            <span><span class="in-complete-box"></span> = Incomplete</span>
            <span><span class="complete-box"></span> = Complete</span>
        </div>
        <div class="todos">
            <div @dblclick="toggleCompletion(todo)" v-for="todo in todos" v-bind:key="todo.id"
                 v-bind:class="{'is-complete':todo.completed, 'is-not-complete':!todo.completed}">
                <h3>{{todo.name}}</h3>
                <h5>Created: {{todo.date}}</h5>
                <i @click="deleteTodo(todo.id)" class="fas fa-trash"></i>
            </div>

        </div>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Todos",
        methods: {
            ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
            toggleCompletion(todo) {
                todo.completed = !todo.completed;
                this.updateTodo(todo);
            }
        },
        computed: {
            ...mapGetters(['todos']),
        },
        created() {
            this.fetchTodos();
        }
    }
</script>

<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        padding: 0 5px;
    }

    .is-not-complete {
        border: 1px solid black;
        background: lightblue;
        padding: 0 1px;
        border-radius: 5px;
        text-align: center;
        position: relative;
    }

    .is-complete {
        border: 1px solid black;
        background: deepskyblue;
        padding: 0 1px;
        border-radius: 5px;
        text-align: center;
        position: relative;
    }

    i {
        cursor: pointer;
    }

    @media (max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }

    * {
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    h3 {
        padding-top: 5px;
        margin-bottom: 0px;
    }

    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: deepskyblue;
        margin-left: 5px;
    }

    .in-complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: lightblue;
    }

    .key {
        display: inline-flex;
        justify-content: left;
        margin-left: 15px;
        margin-bottom: 15px;
        left: 100px;
    }

</style>