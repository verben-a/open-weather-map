angular.module('OWMApp', ['ngRoute'])
    
    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
    
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        }).when('/cities/:city', {
            templateUrl: 'city.html',
            controller: 'CityCtrl',
            controllerAs: 'vm',
            resolve: {
                city: function(owmCities, $route, $location) {
                	console.log('route', $route);
                    var city = $route.current.params.city;
                    if (owmCities.indexOf(city) === -1) {
                        $location.path('/error');
                        return;
                    }
                    return city;
                }
            }
        }).when('/error', {
            template: '<p>Error - Page Not Found</p>'
        })
    }])
    
    .controller('HomeCtrl', [function() {
        //empty for nowx
        console.log('this is a home ctrl');
    }])
    
    .controller('CityCtrl', ['city', function(city) {
    	console.log('we are here')
 var vm = this;
    vm.city = city;
}]);
