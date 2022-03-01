angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/about",{
        templateUrl: "app/templates/about.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/contact",{
        templateUrl: "app/templates/contact.html"
    })
    .when("/gallery",{
        templateUrl: "app/templates/gallery.html"
    })
    .when("/sessions",{
        templateUrl: "app/templates/sessions.html"
    })
    .when("/teachers",{
        templateUrl: "app/templates/teachers.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .when("/video",{
        templateUrl: "app/templates/video.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});