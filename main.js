
    var emero = angular.module('emeroto',['ui.bootstrap','ngRoute','ngAnimate']);
    emero.controller('CarouselCtrl' , function ($scope) {
        $scope.myInterval=1000;
        $scope.slides=[
            {image:'img/mebel1.jpg'},
            {image:'img/mebel2.jpg'},
            {image:'img/mebel3.jpg'},

        ];
    });

    emero.config(function($routeProvider) {
        $routeProvider

            // route for the kitchen page
            .when('/kitchen', {
                templateUrl : 'templates/kitchen.html',
                controller  : 'kitchenCtrl'
            })

            // route for the bedroom page
            .when('/bedroom', {
                templateUrl : 'templates/bedroom.html',
                controller  : 'bedroomCtrl'
            })

            // route for the prihojaya page
            .when('/prihojaya', {
                templateUrl : 'templates/prihojaya.html',
                controller  : 'prihojayaCtrl'
            })
          // route for the gostinnaya page
        .when('/gostinnaya', {
                templateUrl : 'templates/gostinnaya.html',
                controller  : 'gostinnayaCtrl'
            });
    });
            //controller for kitchen page
        emero.controller('kitchenCtrl',  function ($scope) {
       $scope.images = [
           {source:'img/mebel1.jpg',template:'mebel1.html',url:'mebel.html'},,
           {source:'img/mebel1.jpg',template:'mebel1.html',url:'mebel.html'},
           {source:'img/mebel1.jpg',template:'mebel1.html',url:'mebel.html'}];
    });
            //controller for bedroom page
    emero.controller('bedroomCtrl',  function ($scope) {
            $scope.message = "Hello from  bedroom";
        });
            //controller for gostinnnaya page
    emero.controller('gostinnayaCtrl', function ($scope) {
            $scope.message = "Hello from gostinnaya";
        });
            //controller for prihojaya page
    emero.controller('prihojayaCtrl',function ($scope) {
            $scope.message = "Hello from prihojaya";
        });

