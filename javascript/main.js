require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        //handlebars: './handlebars_shim',
        handlebars: '../bower_components/handlebars/handlebars.min',
        semantic: '../bower_components/semantic/build/packaged/javascript/semantic'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    }

});

require([

    // Load our app module and pass it to our definition function
    'app',
    'mocks/recipe_list',
    'collections/recipes',
    'views/recipe'
], function(App, MyRecipes, Recipes, RecipeView){
    // The "app" dependency is passed in as "App"
    var cookbook = new Recipes(MyRecipes);
    var view = new RecipeView;


});