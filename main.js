
    var emero = angular.module('emeroto',['ui.bootstrap','ngRoute','ngAnimate']);
    emero.controller('CarouselCtrl' , function ($scope) {
        $scope.myInterval=3000;
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
           {source:'img/mebel1.jpg',template:'mebel1.html',url:'mebel.html'},
           {source:'img/mebel1.jpg',template:'mebel2.html',url:'mebel.html'},
           {source:'img/mebel1.jpg',template:'mebel1.html',url:'mebel.html'}];

            //First it loads main.html
            $scope.template = $scope.images[0];
            //Views selected page
            $scope.detail = function (imageUrl){
                $scope.template=imageUrl;
            };
            $scope.photos = [
                {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01',detail:[
                    {name:'Name',price:12.0,manufacturer:'USA'}]},
                {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
                {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
                {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
                {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
                {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
            ];
            // initial image index
            $scope._Index = 0;

            // if a current image is the same as requested image
            $scope.isActive = function (index) {
                return $scope._Index === index;

            };

            // show prev image
            $scope.showPrev = function () {
                $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
            };

            // show next image
            $scope.showNext = function () {
                $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
            };

            // show a certain image
            $scope.showPhoto = function (index) {
                $scope._Index = index;


            };
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

