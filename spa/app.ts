///ts:ref=angular.d.ts
/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/> ///ts:ref:generated
"use strict";
angular.module("app", ['ngResource']);
var exports : any = {}; //stupid proposal to avoid exports errors from commonjs typescript compilation
 
//angular.module("app")
    //.run(['$rootScope', '$appScope', function ($rootScope, $appScope) {
    //    $rootScope.$on("$routeChangeStart", function (event, next, current) {
    //        $rootScope.onLoading();
    //    });
    //    $rootScope.onLoading = function () {
    //        $rootScope.$safeApply(function () {
    //            $rootScope.loading = true;
    //            $rootScope.status = 'loading';
    //        }, this);
    //    };
    //    $rootScope.onReady = function () {
    //        $rootScope.$safeApply(function () {
    //            $rootScope.loading = false;
    //            $rootScope.status = 'ready';
    //        }, this);
    //    };
    //}])

    //.factory('$appScope', ['$rootScope', function ($rootScope) {
    //    return {
    //        topScope: function () {
    //            return this.scope(document);
    //        },
    //        scope: function (element) {
    //            return angular.element(element).scope();
    //        },
    //        rootScope: function () {
    //            return $rootScope;
    //        },
    //        safeApply: function (fn, $scope) {
    //            $scope = $scope || this.topScope();
    //            fn = fn || function () { };
    //            if ($scope.$$phase) {
    //                fn();
    //            }
    //            else {
    //                $scope.$apply(function () {
    //                    fn();
    //                });
    //            }
    //        }
    //    };
    //}]);

//var jc = require('./jobsController');
//var js = require('./jobsService'); 