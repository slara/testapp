/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var OperatorPanelView = Backbone.View.extend({

        template: JST['app/scripts/templates/operator-panel.ejs'],

        initialize: function (operator) {
            this.model = operator;
            this.render();
        },

        render: function () {
            $('#content').append(this.template(this.model.toJSON()));
            return this;
        },

        close: function () {
            $('#panel-' + this.model.cid).remove();
        }
    });

    return OperatorPanelView;
});