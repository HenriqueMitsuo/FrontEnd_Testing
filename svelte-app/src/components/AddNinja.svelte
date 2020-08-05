<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let name = null;
  let age = null;
  let belt = null;
  
  function handleSubmit() {
    let newNinja = {
      name: name,
      age: age,
      belt: belt,
      id: Math.random()
    }

		dispatch('addNinja', newNinja);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="name">Name: <input id="name" type="text" bind:value={name}></label>
  <label for="age">Age: <input id="age" type="text" bind:value={age}></label>
  <label for="bel">Belt: <input id="belt" type="text" bind:value={belt}></label>
  <button>Submit</button>
</form>