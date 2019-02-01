var myApp = angular.module('myApp', ['ngRoute']);

// myApp.config(function($routeProvider){
//     $routeProvider.when('/', {
//         controller: 'BooksController',
//         templateUrl: 'views/books.html'
//     })
//     .when('/books', {
//         controller: 'BooksController',
//         templateUrl: 'views/books.html'
//     })
//     .when('/books/details/:id', {
//         controller: 'BooksController',
//         templateUrl: 'views/book_details.html'
//     })
//     .when('/books/edit/:id',{
//         controller: 'BooksController',
//         templateUrl: 'views/edit_book.html'
//     })
//     .otherwise({
//         redirectTo: '/'
//     })
// });












myApp.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'GenresController',
        templateUrl: 'views/genre/genres.html'
    })
    .when('/genres', {
        controller: 'GenresController',
        templateUrl: 'views/genre/genres.html'
    })
    .when('/genres/details/:id', {
        controller: 'GenresController',
        templateUrl: 'views/genre/genre_details.html'
    })
    .when('/genres/add', {
        controller: 'GenresController',
        templateUrl: 'views/genre/genre_add.html'
    })
    .when('/genres/edit/:id', {
        controller: 'GenresController',
        templateUrl: 'views/genre/genre_edit.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});









