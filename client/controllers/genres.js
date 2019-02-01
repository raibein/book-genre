var myApp = angular.module('myApp');

myApp.controller('GenresController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    
    console.log('GenresController loaded...');
    
    $scope.getGenres = function(){
        $http.get('/api/genres').then(function(response){
            $scope.genres = response.data;
            console.log($scope.genres);
        });
    }

    $scope.getGenre = function(){
        var id = $routeParams.id;
        $http.get('/api/genres/'+id).then(function(response){
            $scope.genre = response.data;
            console.log($scope.genre);
        });
    }

    $scope.createGenre = function(){
        $http.post('/api/genres/', $scope.genre).then(function(response){
            window.location.href = '#!/genres';
        });
    }

    $scope.updateGenre = function(){
        var id = $routeParams.id;
        $http.put('/api/genres/'+id, $scope.genre).then(function(response){
            window.location.href = '#!/genres';
        });
    }

    $scope.deleteGenre = function(id){
        // var id = $routeParams.id;
        $http.delete('/api/genres/'+id).then(function(response){
            window.location.href = '#!/genres';
        });
    }

}]);