define([
    'backbone',
    'semantic',
    'models/recipe',
    'templates/recipe'
], function (Backbone,Semantic, RecipeModel, RecipeTemplate) {


    var recipeView = Backbone.View.extend({
        el: '.recipe-list',
        template: RecipeTemplate,
        initialize: function () {
            this.model = new RecipeModel({
                name: 'My First Recipe'
            });

            this.render();
        },
        render: function () {
            var compiledTemplate = this.template(this.model.toJSON());
            this.$el.html(compiledTemplate);
        }
    });


    return recipeView;
});