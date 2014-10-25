angular.module('combustion',[
    'ui.router',
    'combustion.directives',
    'combustion.controllers'
    ]).
    config(['$interpolateProvider',function($interpolateProvider){
        $interpolateProvider.startSymbol('[[');
	    $interpolateProvider.endSymbol(']]');
    }]).
    constant("urls",{
        "part":"/static/partial"
    }).
    config(['$stateProvider','$urlRouterProvider',"urls",function($stateProvider,$urlRouterProvider,urls){
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
        $stateProvider.state('search',{
            url:'/search',
            templateUrl:urls.part+'/search.html',
            controller:'SearchCtrl'
        });
        $stateProvider.state('model',{
            url:'/data/model',
            templateUrl:urls.part+'/data/model.html',
            controller:'ModelCtrl'
        });
//        .config('$locationProvider',function($locationProvider){
//                $locationProvider.html5Mode(true);
//                $locationProvider.hashPrefix = '';
//            })
    }]);
