/*global define*/

define([
    'jquery',
    'backbone',
    'views/reports',
    'views/summary',
    'views/operator-panel',
    'models/summary',
    'collections/operators'
], function ($, Backbone, ReportView, SummaryView, OperatorPanelView, SummaryModel, OperatorsCollection) {
    'use strict';

    var ReportsRouter = Backbone.Router.extend({

        routes: {
            ':id': 'operator',
            '': 'harvest'
        },

        initialize: function () {
            console.log('initialize');
            this.operators = new OperatorsCollection();
            this.operators.fetch();
            this.reportview = new ReportView();
            this.summary = new SummaryModel();
            this.summaryview = new SummaryView({model: this.summary});
            this.harvest();
        },

        harvest: function () {
            console.log('harvest');

            this.operators.each(function (operator) {
                var oppanelview = new OperatorPanelView(operator);
                operator.view = oppanelview;
            }, this);
        },

        operator: function (cid) {
            console.log('operator');
            var operator = this.operators.get(cid);
            operator.view.close();

        }

    });

    return ReportsRouter;
});