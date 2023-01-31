<script>
	export let title = 'unavngitet'
    export let index = 0
</script>

<main>
	<h1>{title}</h1>
    <div class="number">
        {index + 1}

    </div>
</main>

<style>
	main{
        display: grid;
        place-items: center;
        height: 400px;
        width: 400px;
        border: 1px solid fuchsia;
        position: relative;
    }
    h1{
        font-weight: 1000;
    }
    .number{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        height: 2rem;
        width: 2rem;
        background-color: black;
        color: aliceblue;
        display: grid;
        place-items: center;
        border-radius: 50%;
    }
</style>