
/// <reference path="jobsService.ts" />

//import xJobs = require("jobsService"); 
//interface IJob {
//    title: string;
//    description: string; 
//} 
  
//import js = require("./jobsService");

//js.IJobDocument

export interface IMongooseDoc {
    _id: string;
    __v: number;
}
export interface IJobObject {
    title: string;
    description: string;
} 

export interface IJobDocument extends IJobObject, IMongooseDoc {
}


interface ITestScope extends ng.IScope { 
    message: string;
    jobs: IJobDocument[];
    submit(): void;
} 

angular.module("app").controller("jobsController", ($scope: ITestScope, $resource: ng.resource.IResourceService) => {
//angular.module("app").controller("jobsController", ($scope) => {
    $scope.message = "Find a job today!";
    //$scope.jobs = [{ title: "programmer", description: "super programmer requiresd!" }, { title: "baby sitting", description: "super baby sitting required!" }];
    $scope.jobs = $resource<IJobDocument>('/api/jobs').query();

    $scope.submit = () => {
        $resource<IJobDocument>('/api/jobs').save({ title: "test title", description: "description" }, () => {
            console.log("post OK");
            $scope.jobs = $resource<IJobDocument>('/api/jobs').query();
        }, (err) => {
            console.log("post KO!");
        });
    };
    console.log("jobsController ..... loaded!")
}); 