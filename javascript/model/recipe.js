var RecipeList = [
    {title: "tomato soup",
     difficulty: "simple",
     ingredients: [
        "tomatos",
        "onion",
        "carrot"]

    },
    {title: "pea soup",
    difficulty: "simple",
    ingredients: [
        "peas",
        "onion",
        "potatos"]

    },
    {title: "dumplings",
    difficulty: "tough",
    ingredients:[
        "pastry",
        "pot cheese",
        "eggs"]
    }


];
window.recipeList = RecipeList;



var SingleRecipe = Backbone.Model.extend();

    window.SingleRecipe = SingleRecipe;


var CookBook = Backbone.Collection.extend({
    model: SingleRecipe

});

    window.CookBook = CookBook;
