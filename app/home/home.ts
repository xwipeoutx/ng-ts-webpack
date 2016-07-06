import * as angular from "angular"
import "./home.scss"

var HomeModule = angular.module("app.home", []);

HomeModule.component("home", {
    template: require("./home.html")
});

export default HomeModule;