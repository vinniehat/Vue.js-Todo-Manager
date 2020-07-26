import * as firebase from "firebase/app";

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
    async addTodo(nullable, name) {
        let todo = {
            name,
            completed: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }
        await firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("todos")
            .add(todo)
    },
    async fetchTodos({commit}) {
        var todosRef = await firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("todos");
        let todosCopy = []

        todosRef.orderBy("createdAt")
            .onSnapshot(snap => {
            todosCopy = [];
            snap.forEach(doc => {
                var todo = doc.data();
                todo.id = doc.id;
                todosCopy.push(todo);
            });
            if(state.filter === "newestFirst") {
                todosCopy = todosCopy.reverse();
            }

            commit('setTodos', todosCopy);
        });

    },
    async deleteTodo(nullable, todoID) {
        await firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("todos")
            .doc(todoID)
            .delete();
    },
    async filterTodos({commit}, selected) {
        commit('filterTodos', selected);
    },
    async updateTodo(nullable, todo) {
        await firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("todos")
            .doc(todo.id)
            .update({
                completed: todo.completed
            });
    }

}

const mutations = {
    async setTodos(state, todos) {
        state.todos = todos;
    },
    async filterTodos(state, filter) {
        state.todos = state.todos.reverse();
        state.filter = filter;
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}