angular.module("app").controller("jobsController", function ($scope, $resource) {
    $scope.message = "Find a job today!";
    $scope.jobs = $resource('/api/jobs').query();
});
//# sourceMappingURL=jobsController.js.map