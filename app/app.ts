import HomeModule from "./home/home"
import "angular";
import "./app.scss";

var AppModule = angular.module("app", [
    HomeModule.name
]);

angular.bootstrap(document, [AppModule.name], {
    strictDi: true
});