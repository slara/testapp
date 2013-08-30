/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var SummaryView = Backbone.View.extend({
        template: JST['app/scripts/templates/summary.ejs'],

        initialize: function () {
            console.log('initialize SummaryView');
            this.render();
        },

        render: function () {
            $('#appcontainer').append(this.template(this.model.toJSON()));
            return this;
        }
    });

    return SummaryView;
});