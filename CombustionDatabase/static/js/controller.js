angular.module("myApp.controllers",[]).
    controller('HomepageCtrl',['$scope'],function($scope){
        console.log("homepageCtrl");
    $scope.register = function(){
        
    };
    $scope.log = function(){

    };

    }).
    controller('RegisterCtrl',['$scope','$http','urls'],function($scope,$http,urls){
        console.log("RegisterCtrl");
        $scope.account_info = {
            username:'',
            password:'',
            passwordagain:''
        };

    })