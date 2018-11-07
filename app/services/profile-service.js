"use strict";

function profileService() {
    const self = this;
 console.log("hello world2");

}

angular
    .module("App")
    .service("profileService", profileService);