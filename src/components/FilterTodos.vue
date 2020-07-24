<template>
    <div class="filterTodos">
        <b-form-select class="selectFilter" v-on:change="filterTodos(selected)" v-model="selected"
                       :options="filterViewOptions">Oldest First
        </b-form-select>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "FilterTodos",
        methods: {
            ...mapActions(['filterTodos'])
        },
        data() {
            return {
                selected: "oldestFirst",
                filterViewOptions: [
                    {value: "oldestFirst", text: "Oldest First"},
                    {value: "newestFirst", text: "Newest First"}
                ]
            }
        },
    }
</script>

<style scoped>
    .selectFilter {
        width: 150px;
        position: relative;
        left: 350px;
        bottom: 48px;
        height: 35px;

        text-align: center;
    }

    .filterTodos {
        width: 100px;

    }
</style>