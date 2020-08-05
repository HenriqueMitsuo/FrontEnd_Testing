<template>
  <div>
    <div v-for="ninja in ninjasByAge" :key="ninja.id" class="ninja-list">
      <h3>Name: {{ ninja.name }}</h3>
      <p>Age: {{ ninja.age }}</p>
      <p>Belt: {{ ninja.belt }}</p>
      <button @click="handleClick(ninja.id)">Delete</button>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ninjas", "deleteNinja"],
  computed: {
    ninjasByAge() {
      return this.ninjas.filter((ninja) => {
        return ninja.age > 20
      }) 
    }
  },
  methods: {
    handleClick(id) {
      this.deleteNinja(id)
    }
  },
};
</script>

<style></style>
