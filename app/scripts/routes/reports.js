/*global define*/

define([
    'jquery',
    'backbone',
    'views/reports',
    'views/summary',
    'views/alerts-table',
    'views/operator-panel',
    'models/summary',
    'collections/operators'
], function ($, Backbone, ReportView, SummaryView, AlertsTableView, OperatorPanelView, SummaryModel, OperatorsCollection) {
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
            $('#summaryrow').append(this.summaryview.render().el);
            this.harvest();
        },

        harvest: function () {
            console.log('harvest');
            if (this.alertstableview !== undefined) {
                this.alertstableview.close();
            }

            this.operators.each(function (operator) {
                var oppanelview = new OperatorPanelView(operator);
                operator.view = oppanelview;
            }, this);
        },

        operator: function () {
            console.log('operator');
            this.operators.each(function (operator) {
                operator.view.close();
            });
            this.alertstableview = new AlertsTableView();
            $('#content').append(this.alertstableview.render().el);
        }

    });

    return ReportsRouter;
});