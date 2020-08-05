<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="name"
        >Name: <input type="text" id="name" v-model="name"
      /></label>
      <label for="age">Age: <input type="text" id="age" v-model="age"/></label>
      <label for="belt"
        >Belt: <input type="text" id="belt" v-model="belt"
      /></label>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    addNinja: {
      type: Function
    }
  },
  data() {
    return {
      name: null,
      age: null,
      belt: null
    };
  },
  methods: {
    handleSubmit() {
      let newNinja = {
        name: this.name,
        age: this.age,
        belt: this.belt
      };
      this.addNinja(newNinja);
    }
  }
};
</script>

<style></style>
