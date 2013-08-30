/*global define*/

define([
    'underscore',
    'backbone',
    'models/operator'
], function (_, Backbone, OperatorModel) {
    'use strict';

    var OperatorsCollection = Backbone.Collection.extend({
        model: OperatorModel,

        fetch: function () {
            console.log('fetch collection');
            _.forEach(['Juan', 'Pedro', 'Jose'], function (name) {
                var op = new OperatorModel({name: name});
                this.add(op);
            }, this);
            console.log('operators:', this);
        }
    });

    return OperatorsCollection;
});