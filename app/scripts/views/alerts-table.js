/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AlertsTableView = Backbone.View.extend({
        template: JST['app/scripts/templates/alerts-table.ejs']
    });

    return AlertsTableView;
});