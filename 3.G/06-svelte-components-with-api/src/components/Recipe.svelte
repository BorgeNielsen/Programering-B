<script>
    export let recipe // javascript objekt med en hel opskrift
    console.log(recipe)
    let active = false 
</script>

<main on:click={()=>active=!active} class={active ? 'active' : ''} style='background-image:url({recipe.strMealThumb});'>
    <h1>{recipe.strMeal}</h1>
    {#if active}
        <div class="ing">
            <ul>
                <li>{recipe.strMeasure1} {recipe.strIngredient1}</li>
                <li>{recipe.strMeasure2} {recipe.strIngredient2}</li>
                <li>{recipe.strMeasure3} {recipe.strIngredient3}</li>
                <li>{recipe.strMeasure4} {recipe.strIngredient4}</li>
                <li>{recipe.strMeasure5} {recipe.strIngredient5}</li>
                <li>{recipe.strMeasure6} {recipe.strIngredient6}</li>
                <li>{recipe.strMeasure7} {recipe.strIngredient7}</li>
                <li>{recipe.strMeasure8} {recipe.strIngredient8}</li>
                <li>{recipe.strMeasure9} {recipe.strIngredient9}</li>
                <li>{recipe.strMeasure10} {recipe.strIngredient10}</li>
                <li>{recipe.strMeasure11} {recipe.strIngredient11}</li>
            </ul>
        </div>
        <div class="description">
            {recipe.strInstructions}
        </div>
        <div class="yt">
            <iframe src={recipe.strYoutube.replace('watch?v=', 'embed/')} frameborder="0" width='640' height='360'></iframe>
        </div>
    {/if}
</main>

<style>
    main{
        height:600px;
        width:100%;
        display:grid;
        place-items:center;
        font-weight: 100;
        color:white;
        border-radius:1rem;
        transition: all 1s ease-in-out;
    }
    .active{
        transition: all 1s ease-in-out;
        width:100vw;
        height:100vh;
        z-index:2;
        position:absolute;
        left:0;
        top:0;
        background-size: cover;
    }
    .yt{
        display: grid;
        place-items: center;
        height: 400px;
    }
</style>