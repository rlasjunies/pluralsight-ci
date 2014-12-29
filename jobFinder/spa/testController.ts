﻿
interface IJob {
    title: string;
    description: string;
}
interface ITestScope extends ng.IScope {
    message: string;
    jobs: IJob[];
}
app.controller("test", ($scope: ITestScope) => {
    $scope.message = "Find a job today!";
    $scope.jobs = [{ title: "programmer", description: "super programmer requiresd!" }, { title: "baby sitting", description: "super baby sitting required!" }];
});