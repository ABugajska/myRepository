define([
    'backbone',
    'models/recipe'
], function(Backbone, Recipe) {
    var CookBook = Backbone.Collection.extend({
        model: Recipe

    });

    return CookBook;
});

