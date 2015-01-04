"use strict";
var jobsService = (function () {
    function jobsService($http) {
        this.$http = $http;
        console.log("jobsService ... loaded");
    }
    jobsService.prototype.save = function (job, success, error) {
        console.log("in save");
        this.$http.post("api/jobs", job).then(success).catch(error);
    };
    return jobsService;
})();
exports.jobsService = jobsService;
angular.module("app").factory("jobsService", function ($http) {
    return new jobsService($http);
});
//# sourceMappingURL=jobsService.js.map