/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/operators'
], function ($, _, Backbone, OperatorsCollection) {
    'use strict';

    var ReportsView = Backbone.View.extend({

        el: $('#appcontainer'),

        initialize: function () {
            console.log('initialize ReportsView');
        }

    });

    return ReportsView;
});