<script>
	let names = ['Kaj Munk', 'Adam Smith', 'Thomas Malthus', 'Fister Olfert']
	let people = [
		{
			"name": "Johnny",
			"surname":"On The Spot",
			"role": "mekaniker"
		},
		{
			"name": "Johnius",
			"surname":"Hitlus",
			"role": "Verdens overtager"	
		}]
	let cocktail
	const getCocktail = () => {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
			.then(res => res.json())
			.then(json =>{
				cocktail = json.drinks[0]
				console.log(cocktail)
			})	
	}
	let savedCocktail = []
	const saveCocktail = () => {
		savedCocktail = [...savedCocktail, cocktail]
	}

</script>

<main>
	<!--
	<ul>
		{#each names as name, index}
			 <li>Nummer {index} i listen, hedder {name}</li>
		{/each}
		{#each people as p, index}
			<div class="person">
				<h1>{p.name}</h1>
				<p>{p.surname} - role: {p.role}</p>
			</div>

		{/each}
	</ul>
	-->
	<button on:click={getCocktail}>COCK</button>
	{#if cocktail}
 	<div class="cocktail">
		<div class="description">
			<h2>{cocktail.strDrink}</h2>
			<p>{cocktail.strInstructions}</p>
		</div>
		<img src="{cocktail.strDrinkThumb}" alt="">
	</div>
	{/if}
		<button on:click={saveCocktail}>save</button>
		{#each savedCocktail as sC, index}
		<div class="description">
			<h2>{sC.strDrink}</h2>
			<p>{sC.strInstructions}</p>
		</div>
		<img src="{sC.strDrinkThumb}" alt="">
		{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/*h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}*/	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}


.cocktail{
    display:grid;
    grid-template-columns: 2fr 1fr;
    width:50vw;
    box-shadow: 1rem 1rem 1rem 1rem black; 
}
.cocktail img{
    width:100%;
    height:100%;
    object-fit: cover;
} 
.cocktail .description{
    padding:1rem;
}

</style>