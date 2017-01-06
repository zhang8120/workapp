angular.module("myapp",["ngRoute","ctr","ngAnimate"]).config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"index.html",
        controller:"index"
    }).when("/list/:id",{
        templateUrl:"phone.html",
        controller:"list"
    }).when("/show/:id",{
        templateUrl:"show.html",
        controller:"show"
    }).otherwise("/")
})