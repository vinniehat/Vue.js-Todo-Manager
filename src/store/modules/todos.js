import axios from "axios";

const state = {
    todos: [],
    filter: 'oldestFirst'
}

const getters = {
    todos(state) {
        return state.todos;
    }
}

const actions = {
    async addTodo({commit}, name) {
        await axios.post(`http://localhost:8081/todos?name=${name}`).then(response => {
            commit('addTodo', response.data); // Calls the addTodo mutation
        }).catch(error => {
            console.log(error)
        });

    },
    async fetchTodos({commit}) {
        await axios.get("http://localhost:8081/todos").then(response => {
            commit('setTodos', response.data);
        })
    },
    async deleteTodo({commit}, todoID) {
        await axios.post(`http://localhost:8081/todos/delete/${todoID}`).then(() => {
            commit('deleteTodo', todoID);
        }).catch(error => {
            if (error) throw error;
        })
    },
    async filterTodos({commit}, selected) {
        commit('filterTodos', selected);
    },
    async updateTodo({commit}, todo) {
        await axios.put(`http://localhost:8081/todos?id=${todo.id}&?completed=${todo.completed}`).then(() => {
            commit('updateTodo', todo);
        }).catch(error => {
            if(error) throw error;
        })
    }

}

const mutations = {
    async addTodo(state, todo) {
        if (state.filter === "newestFirst") {
            state.todos.unshift(todo);
        } else {
            state.todos.push(todo);
        }
    },
    async setTodos(state, todos) {
        state.todos = todos;
    },
    async deleteTodo(state, todoID) {
        state.todos = state.todos.filter(todo => todo.id !== todoID);
    },
    async filterTodos(state, filter) {
        state.todos = state.todos.reverse();
        state.filter = filter;
    },
    async updateTodo(state, todo) {
        for (let i = 0; i < state.todos.length; i++) {
            if (state.todos[i].id === todo.id) {
                console.log('changed todo!');
                state.todos[i] = todo;
                return;
            }
        }
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}