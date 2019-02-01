var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'GenresController',
        templateUrl: '../../views/genre/genres.html'
    })
    .when('/genres', {
        controller: 'GenresController',
        templateUrl: '../../views/genre/genres.html'
    })
    .when('/genres/details/:id', {
        controller: 'GenresController',
        templateUrl: '../../views/genre/genre_details.html'
    })
    .when('/genres/add', {
        controller: 'GenresController',
        templateUrl: '../../views/genre/genre_add.html'
    })
    .when('/genres/edit/:id', {
        controller: 'GenresController',
        templateUrl: '../../views/genre/genre_edit.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});
