<script>
	import {fly} from 'svelte/transition'
	let name = 'world';
	let magic = false
	let names = ['John', 'Cena', 'Fister Klaus']
	const removeItem = (i) => {
		names.splice(i,1)
		names = names
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<input type="text" bind:value={name}>
	<button on:click={()=> {names = [...names, name]; name = ''}}>ADD</button>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={()=> magic = !magic}>Show me the Magic!</button>
	{#if magic}
	<div class="people">
		{#each names as n, index}
			<div transition:fly="{{ y: 200, duration: 500, delay:index*100}}" class="person" on:click={()=>removeItem(index)}>{n} ({index})</div>
		{/each}
	</div>
	{/if}
	
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.people{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}
	.person{
		display: grid;
		place-items: center;
		background-color: lightseagreen;
		height: 10rem;
		color:aqua;
		font-size: x-large;
		border-radius: 1rem;
		border: 1px solid hotpink;
		box-shadow: 10px 10px 20px 4px purple;
	}
</style>