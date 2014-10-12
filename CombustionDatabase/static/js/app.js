angular.module('myApp',[
    'ngRoute'
    ]).
    config(['$interpolateProvider',function($interpolateProvider){
        $interpolateProvider.startSymbol('<%');
	    $interpolateProvider.endSymbol('%>');
    }]).
    constant("urls",{"part":"/static/partial/"}).
    config(['$routeProvider',"urls",function($routeProvider,urls){
        $routeProvider.when('/',{templateUrl:urls.part+'homepage.html',controller:'HomepageCtrl',title:'HomePage',publicAccess:true});
        $routeProvider.when('reg',{templateUrl:urls.part+'Register.html',controller:'RegisterCtrl',title:'RegPage'});
        $routeProvider.when('login',{templateUrl:urls.part+'login.html',controller:LoginCtrl,title:login});
        $routeProvider.otherwise({redirectTo: '/'});
    }])