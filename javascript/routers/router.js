define([
    'backbone',
    'collections/recipe',
    'models/recipe',
    'templates/recipe'




], function (Backbone, RecipeCollection, RecipeModel, RecipeTemplate) {
    var newRouter = Backbone.Router.extend({

        routes: {
            "": "index",
            "add": "add",
            "edit": "edit"


        },

        index: function(){


        },
        add: function(){
            var newRecipe = new newRecipeView({
               collection: RecipeCollection

            });

        },

        edit: function(name){
            var model = RecipeCollection.get(name)
            var editRecipe = new editRecipeView({

                model: RecipeModel
            })


        }


    });

});



