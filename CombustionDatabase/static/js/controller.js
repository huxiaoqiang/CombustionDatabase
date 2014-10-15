angular.module("combustion.controllers",[]).
    controller('HomepageCtrl',function($scope,$http,urls,$location){
        console.log("homepageCtrl");
        $scope.register = function(){
            $location.url('/reg');
        };
    }).
    controller('RegisterCtrl',function($scope,$http,urls,$location){
        console.log("RegisterCtrl");
        $scope.account_info = {
            username:'',
            password:'',
            passwordagain:''
        };
    });