<script>
	let animals = [{"name": "kat"},{"name":"kakkerlak"},{"name":"due"},{"name":"grønlands haj"},{"name":"malke kakkerlak"},{"name":"my little pony"},{"name":"goofy"},{"name":"helmut"},{"name":"chewbacca"},{"name":"peter from family dude"}]

</script>

<main>
	<div class="header">
		<h1>Sjove dyr 😁🥼👙</h1>
	</div>
	<div class="animals">
		{#each animals as a}
			<div class="animal">{a["name"]}</div>
		{/each}
	</div>
</main>

<style>
	.header{
		background-color: hotpink;
		display: grid;
		place-items: center;
		color: blanchedalmond;
	}
	.animals{
		padding: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		place-items: center;
	}
	.animal{
		border-radius: 50%;
		border: 1px solid black;
		display: grid;
		place-items: center;
		width: 300px;
		height: 300px;
		box-shadow: -5px 5px 10px 1px rgb(95, 104, 55);
		
	}
</style>