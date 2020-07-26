<template>
  <div id="app">
    <div id="nav">
      <Header />
      <router-view/>
    </div>

  </div>
</template>

<script>
  import Header from "./components/Header";
  import {mapActions} from "vuex";
  export default {
    name: "app",
    components: {
      Header
    },
    mounted() {
      this.setLogin();
    },
    methods: {
      ...mapActions(["setLogin"])
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
