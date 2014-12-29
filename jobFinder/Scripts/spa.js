"use strict";
var app = angular.module("app", []);
app.controller("test", function ($scope) {
    $scope.message = "Find a job today!";
    $scope.jobs = [{ title: "programmer", description: "super programmer requiresd!" }, { title: "baby sitting", description: "super baby sitting required!" }];
});
//# sourceMappingURL=spa.js.map