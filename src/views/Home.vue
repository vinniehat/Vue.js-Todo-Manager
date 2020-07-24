<template>
    <div class="home">

        <AddTodo/>
        <FilterTodos/>
        <Todos/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import AddTodo from "../components/AddTodo";
    import Todos from "../components/Todos";
    import FilterTodos from "../components/FilterTodos";

    export default {
        name: 'Home',
        components: {
            FilterTodos,
            AddTodo,
            Todos
        }
    }
</script>

<style scoped>

</style>
