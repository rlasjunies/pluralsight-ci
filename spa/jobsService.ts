///ts:ref=angular.d.ts
/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/> ///ts:ref:generated
///ts:ref=app.ts
/// <reference path="./app.ts"/> ///ts:ref:generated
///ts:ref=angular-resource.d.ts
/// <reference path="../Scripts/typings/angularjs/angular-resource.d.ts"/> ///ts:ref:generated
"use strict";

export interface IMongooseDoc {
    _id: string;
    __v: number;
}
export interface IJobObject{
    title: string;
    description: string;
}

export interface IJobDocument extends IJobObject, IMongooseDoc {
}

export interface IJobService {
    save(job:IJobObject, success, error):void;
}

export class jobsService {
    private $http: ng.IHttpService;

    constructor($http: ng.IHttpService) {
        this.$http = $http;
        console.log("jobsService ... loaded");
    }

    public save(job: IJobObject, success, error) {
        console.log("in save");
        this.$http.post<IJobDocument>("api/jobs", job).then(success).catch(error);
    }
}


angular.module("app").factory("jobsService", ($http: ng.IHttpService) =>  {
    return new jobsService($http);
});