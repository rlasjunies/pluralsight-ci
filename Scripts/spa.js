"use strict";
var app = angular.module("app", ['ngResource']);
app.controller("test", function ($scope, $resource) {
    $scope.message = "Find a job today!";
    $scope.jobs = $resource('/api/jobs').query();
});
//# sourceMappingURL=spa.js.map