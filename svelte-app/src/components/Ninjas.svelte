<script>
  export let ninjas = []
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleButton(id) {
    dispatch("deleteNinja", {id: id})
  }
</script>

<div class="ninja-list">
  {#each ninjas as ninja }
    {#if ninja.age > 20}
      <div class="ninja" id={ninja.id}>
        <h3>Name: {ninja.name}</h3>
        <p>Age: {ninja.age}</p>
        <p>Belt: {ninja.belt}</p>
        <button on:click={() => {handleButton(ninja.id)}}>Delete</button>
        <hr>
      </div>
    {/if}
  {/each}
</div>