angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])
.config(['$routeProvider', function($routeProvider){
    /*
     * `when()` cuantas veces sea necesario
     * `otherwise()` una sola vez "OJO"
    */
    $routeProvider

    .when('/mobile', {
        templateUrl : "views/mobile.html",
        controller: 'mobileController'
    })

    .when('/smathphone', {
        templateUrl: "views/smathphone.html",
        controller: 'smathphoneController'
    })

    .otherwise({
        redirectTo: '/',
        templateUrl: 'otherwise.html'
    });
 }]);