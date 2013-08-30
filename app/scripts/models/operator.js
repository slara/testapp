/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var OperatorModel = Backbone.Model.extend({
        defaults: {
            name: 'Operador'
        }
    });

    return OperatorModel;
});