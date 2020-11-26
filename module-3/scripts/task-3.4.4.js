var recipe = {
    recipeTitle: 'Chicken rice',
    servings: 6,
    ingredients: [
        '1 tbsp olive oil',
        'chicken', 
        'onion', 
        'rice', 
        'peppers' 
        ],
    directions: 'Fry onion, brown chicken, add peppers etc'
}


    // {
    //     console.log( "Title " + recipe.recipeTitle );
    //     console.log( "Servings " + recipe.servings );
    //     console.log( "Ingredients " + recipe.ingredients );
    //     console.log( "Directions " + recipe.directions );
    // }

    var ingredients = recipe.ingredients;

    for (var index = 0; index < ingredients.length; index++ ) {

        console.log( ingredients [index] );
    }

    