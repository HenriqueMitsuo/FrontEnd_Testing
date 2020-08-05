<template>
  <div id="app">
    <Ninjas :ninjas="ninjas" :deleteNinja="deleteNinja"/>
    <AddNinja :addNinja="addNinja" />
  </div>
</template>

<script>
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";
export default {
  name: "App",
  components: {
    Ninjas,
    AddNinja
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", age: 30, belt: "Black", id: 1 },
        { name: "Ken", age: 25, belt: "Orange", id: 2 },
        { name: "Doe", age: 10, belt: "Purple", id: 3 }
      ]
    };
  },
  methods: {
    addNinja(newNinja) {
      return this.ninjas.push(newNinja);
    },
    deleteNinja(id) {
      let newList = this.ninjas.filter((ninja) => {
        return ninja.id !== id
      })

      return this.ninjas = newList;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
