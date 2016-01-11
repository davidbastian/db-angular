/*global david, $, console*/
david.controller('Home', function ($scope, $routeParams, $http, $location, $window) {

    'use strict';

    $scope.message = 'This is Home';
    $scope.slug = $routeParams.detail;

    console.log($routeParams.detail);
    $http.get("js/yo.json", {
        cache: true
    }).
    success(function (data) {
        
        $scope.project = data.projects.filter(function (e) {
            return e.slug === $scope.slug;
        });

        $scope.number = data.projects.indexOf($scope.project[0]);
        console.log($scope.number)
        $scope.detail = $scope.project[0];
        
        
         $scope.item = data.projects;
        
         $.getScript("js/functions.js");
        
    });
});