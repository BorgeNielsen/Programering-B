<script>
	import Recipe from "./components/Recipe.svelte"
	let recipes = ['Citron måne', 'Remonce', 'Mellem ost', 'Kurts gamle sko', 'Dr. Oetkers pizzaburger']
</script>

<header>
	<h1>Web components</h1>
</header>

<main>	
	{#each recipes as title, index}
		<Recipe {title} {index}/>
	
	{/each}
</main>	

<style>
	h1{
		color: hotpink;
		text-transform: uppercase;
		font-weight: 100;
	}
	main{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: .4rem;
	}
</style>