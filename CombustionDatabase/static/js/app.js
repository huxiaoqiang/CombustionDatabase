angular.module('combustion',[
    'ui.router',
    'combustion.controllers'
    ]).
    config(['$interpolateProvider',function($interpolateProvider){
        $interpolateProvider.startSymbol('<%');
	    $interpolateProvider.endSymbol('%>');
    }]).
    constant("urls",{
        "part":"/static/partial"
    }).
    config(['$stateProvider','$urlRouterProvider',"urls",function($stateProvider,$urlRouterProvider,urls){
//        $locationProvider.html5Mode(true);
//        $locationProvider.hashPrefix='';
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home',{
            url:'/',
            templateUrl:urls.part+'/homepage.html',
            controller:'HomepageCtrl'
        });
        $stateProvider.state('register',{
            url:'/reg',
            templateUrl:urls.part+'/register.html',
            controller:'RegisterCtrl'
         });
    }]);
