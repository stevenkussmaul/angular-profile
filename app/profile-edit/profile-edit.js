"use strict";

const profileEdit = {
    templateUrl: "app/profile-edit/profile-edit.html",
    bindings: [],
    controller: ["profileService", function (profileService) {
        const vm = this;
        console.log("hello world");

        profileService.setData = (data) => {

        }

    }]

};

angular
    .module("App")
    .component("profileEdit",profileEdit)