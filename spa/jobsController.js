/// <reference path="../Scripts/typings/angularjs/angular-resource.d.ts" />
app.controller("test", function ($scope, $resource) {
    $scope.message = "Find a job today!";
    //$scope.jobs = [{ title: "programmer", description: "super programmer requiresd!" }, { title: "baby sitting", description: "super baby sitting required!" }];
    $scope.jobs = $resource('/api/jobs').query();
});
//# sourceMappingURL=jobsController.js.map