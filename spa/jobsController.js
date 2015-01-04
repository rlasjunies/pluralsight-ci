/// <reference path="jobsService.ts" />
angular.module("app").controller("jobsController", function ($scope, $resource) {
    //angular.module("app").controller("jobsController", ($scope) => {
    $scope.message = "Find a job today!";
    //$scope.jobs = [{ title: "programmer", description: "super programmer requiresd!" }, { title: "baby sitting", description: "super baby sitting required!" }];
    $scope.jobs = $resource('/api/jobs').query();
    $scope.submit = function () {
        $resource('/api/jobs').save({ title: "test title", description: "description" }, function () {
            console.log("post OK");
            $scope.jobs = $resource('/api/jobs').query();
        }, function (err) {
            console.log("post KO!");
        });
    };
    console.log("jobsController ..... loaded!");
});
//# sourceMappingURL=jobsController.js.map