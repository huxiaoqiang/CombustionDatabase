angular.module("combustion.controllers",[]).
    controller('HomepageCtrl',function($scope,$http,urls,$location){
        console.log("homepageCtrl");
        $scope.register = function(){
            $location.url('/reg');
        };
    }).
    controller('RegisterCtrl',['$scope', '$http','urls','$location',function($scope, $http,urls,$location){
        console.log("RegisterCtrl");
        $scope.regist_info = {};
        $scope.regist_user = function(){
            console.log($scope.regist_info);
            if($scope.regist_info.password != $scope.regist_info.repassword){
                alert('请检查您的输入', '两次输入密码不同');
                return;
            }
            else
            {
                alert("zhucechenggong");
                $location.url('/');
            }
        };
    }]).
    controller('HeaderCtrl',function($scope,$location){
        console.log("HeaderCtrl");
        $scope.search = function(){
            $location.url('/search');
        }
    }).
    controller('SearchCtrl',function($scope,$location){
        console.log("SearchCtrl");
        $scope.option=[
        "bibliography",
        "data_attribute",
        "dataset",
        "element",
        "experiment",
        "instrumental_model",
        "model",
        "optimization_variable_bound",
        "reaction",
        "reaction_rate",
        "surrogate_model",
        "species",
        "thermo_dynamic_polynomia"];
    });