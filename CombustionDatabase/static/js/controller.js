angular.module("combustion.controllers",[]).
    controller('HomepageCtrl',['$scope', '$http','urls','$location','CsrfService',function($scope,$http,urls,$location,$csrf){
        console.log("homepageCtrl");
         $scope.login_info = {};
        $scope.login=function(){
            $csrf.set_csrf($scope.login_info);
            console.log($scope.login_info);
            $http.post(urls.api+'/user/login',$scope.login_info).success(function(data){
                console.log(data);
                if(data.error['code'] != 1){
                    $scope.error = $csrf.format_error(data.error);
                    alert($scope.error['errorMsg']);
                }
                else{
                    $location.url('/');
                    alert('login succeed!');
                }
            })
        }
        $scope.register = function(){
            $location.url('/reg');
        };
    }]).
    controller('RegisterCtrl',['$scope', '$http','urls','$location','CsrfService',function($scope, $http,urls,$location,$csrf){
        console.log("RegisterCtrl");
        $scope.regist_info = {};
        $scope.regist_user = function(){
            if($scope.regist_info.password != $scope.regist_info.repassword){
                alert('请检查您的输入', '两次输入密码不同');
                return;
            }
            $csrf.set_csrf($scope.regist_info);
            console.log($scope.regist_info);
            $http.post(urls.api+'/user/regist', $scope.regist_info).success(function(data){
                console.log(data);
                if(data.error['code'] != 1){
                    $scope.error = $csrf.format_error(data.error);
                }
                else{
                    $location.url('/');
                }
            });
        };
    }]).
    controller('HeaderCtrl',function($scope,$location){
        console.log("HeaderCtrl");
        $scope.search = function(){
            $location.url('/search');
        }
        $scope.login = function(){
            $location.url('/');
        }
        $scope.regist=function(){
            $location.url('/reg');
        }
        $scope.modelEdit=function(){
            $location.url('/data/model');
        }
    }).
    controller('SearchCtrl',function($scope,$location){
        console.log("SearchCtrl");
        $scope.model=[
         {name:"bibliography",
         items:['primeID','preferredKey','title', 'year']},
         {name:"data_attribute",
         items:['primeID','preferredKey','origin']},
         {name:"dataset",
         items:['primeID']},
         {name:"element",
         items:['primeID','elementName','elementSymbol','number']},
         {name:"experiment",
         items:['primeID','preferredKey']},
         {name:"instrumental_model",
         items:['primeID','preferredKey']},
         {name:"model",
         items:['primeID','preferredKey']},
         {name:"optimization_variable_bound",
         items:['primeID','variableID']},
         {name:"reaction",
         items:['primeID','canonicalForm']},
         {name:"reaction_rate",
         items:['primeID','reactionID','preferredKey']},
         {name:"surrogate_model",
         items:['primeID','datasetID','dataAttributeID']},
         {name:"species",
         items:['primeID','preferredKey','name','CASRegistryNumber','InChI','formula']},
         {name:"thermo_dynamic_polynomia",
         items:['primeID','speciesID']}
         ];
        $scope.result = ['1','2','3'];
        $scope.search_result = function(){
            $scope.show = true;
        }
        $scope.show = false;
    }).
    controller('ModelCtrl',function($scope,$location){
        console.log("ModelCtrl");
        $scope.openXml=function(){

        }
    });