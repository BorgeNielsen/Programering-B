<script>
	let juiceImg
	let counter = 0
	let n = Math.random(1)
	let juices = ['orange', 'apple', 'multifruit', 'ginger', 'tropical']
	$: console.log('when counter changes - this log will be induced: ' + counter)
	$: if(counter >= juices.length) counter = 0
	$:{ fetch("https://api.giphy.com/v1/gifs/search?q="+ juices[counter] + "&limit=1&api_key=B029lCm5yi64xaDS5x0V78VZmsLYKFP9") 
			.then(res => res.json)
			console.log(json)
}
		

</script>

<main>
	<h2>Todays juice is {juices[counter]}</h2>
	<button on:click={()=>counter=counter+1}>switch</button>
	<img src={juiceImg} alt="">
	<p>{n}</p>
	<button on:click={()=>n=Math.random()}>test</button>
	{#if n<0.5}
		😀	
	{:else}
		😑
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>