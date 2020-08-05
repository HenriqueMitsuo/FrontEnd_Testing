<script>
	import Ninjas from "./components/Ninjas.svelte";
	import AddNinja from "./components/AddNinja.svelte"

	let ninjaList = [
		{ name: "Ryu", age: 30, belt: "Black", id: 1 },
		{ name: "Ken", age: 25, belt: "Orange", id: 2 },
		{ name: "Doe", age: 10, belt: "Purple", id: 3 }
	]

	function addNinja(e) {
		let newList = [...ninjaList, e.detail]

		ninjaList = newList;
	}

	function deleteNinja(e) {
		let userID = e.detail.id;

		let newList = ninjaList.filter((ninja) => {
			return ninja.id !== userID
		})
		
		ninjaList = newList;
	}

</script>

<div>
	<Ninjas ninjas={ninjaList} on:deleteNinja={deleteNinja} />
	<AddNinja on:addNinja={addNinja} />
</div>