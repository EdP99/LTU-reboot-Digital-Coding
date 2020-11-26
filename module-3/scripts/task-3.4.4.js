var recipe = {
    recipeTitle: 'Chicken rice',
    servings: 6;
    ingredients: [
        '1 tbsp olive oil',
        'chicken', 
        'onion', 
        'rice', 
        'peppers',
    ],
    directions: [
        "Fry onion",
        "brown chicken",
        'Add peppers',
         "<br>" ]
};
    {
        // console.log(recipe.recipeTitle);
        // console.log(recipe.servings);
        // console.log(recipe.ingredients);
        // console.log(recipe.directions);


        var ingredients = recipe.ingredients

        for(var index = 0; index <= ingredients.length; index++) {

            document.write( ingredients[index] );
        }
}