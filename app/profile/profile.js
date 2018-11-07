const profile = {
    templateUrl: "app/profile/profile.html",
    bindings: "",
    controller: ["profileService", function (profileService) {
        const vm = this;
        console.log("hello world")

    }]

};

angular
    .module("App")
    .component("profile",profile)