/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var SummaryModel = Backbone.Model.extend({
        defaults: {
            title: 'Totales'
        }
    });

    return SummaryModel;
});