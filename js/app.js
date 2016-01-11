 console.log(document.title)



        var david = angular.module('david', ['ngRoute', 'ngSanitize']);


        david.config(['$routeProvider', '$locationProvider',
          function ($routeProvider, $locationProvider) {
                $routeProvider.
                when('/', {
                    templateUrl: "partials/home.html",
                    controller: 'Home'
                }).
                when('/:detail', {
                    templateUrl: "partials/project.html",
                    controller: 'Detail'
                }).
                otherwise({
                    redirectTo: '/'
                });
            }]).run(function () {});





        