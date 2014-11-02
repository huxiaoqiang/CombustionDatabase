angular.module("combustion.controllers",[]).
    controller('HomepageCtrl',['$scope', '$http','urls','$location','CsrfService','$cookieStore',function($scope,$http,urls,$location,$csrf,$cookieStore){
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
                    $cookieStore.put("username",$scope.login_info.username);
                    window.location.href='/#/search';
                    alert('login succeed!');
                }
            })
        }
        $scope.register = function(){
            $location.url('/reg');
        };
    }]).
    controller('RegisterCtrl',['$scope', '$http','urls','$location','CsrfService','UserService',function($scope, $http,urls,$location,$csrf,$user){
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
        $scope.backtologin=function(){
              $location.url('/');
        };
    }]).
    controller('HeaderCtrl',['$scope','$location','UserService', function($scope,$location,$user){
        console.log("HeaderCtrl");
        console.log($user.username());
        $scope.username = $user.username();
        $scope.logout=function(){
            alert("logout");
            $user.logout();
        }
    }]).
    controller('SearchCtrl',['$scope','$location','UserService',function($scope,$location,$user){
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
        $scope.result = [
            [{'primeID':'x0000001'},
            {'preferredKey':'data'},
            {'origin':'1990/09/01'}],
            [{'primeID':'x0000001'},
            {'preferredKey':'data'},
            {'origin':'1990/09/01'}]
        ];
        $scope.search_result = function(){
            $scope.show = true;
        }
        $scope.show = false;
    }]).
    controller('ModelCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("ModelCtrl");
        $scope.openXml=function(){
        }
    }]).
    controller('bibliographyCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("bibliographyCtrl");
    }]).
    controller('data_attributeCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("data_attributeCtrl");
    }]).
    controller('datasetCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("datasetCtrl");
    }]).
    controller('elementCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("elementCtrl");
    }]).
    controller('experimentCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("experimentCtrl");
    }]).
    controller('instrumental_modelCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("instrumental_modelCtrl");
    }]).
    controller('optimization_variableCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("optimization_variableCtrl");
    }]).
    controller('optimization_variable_boundCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("optimization_variable_boundCtrl");
    }]).
    controller('reactionCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("reactionCtrl");
    }]).
    controller('reaction_rateCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("reaction_rateCtrl");
    }]).
    controller('surrogate_modelCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("surrogate_modelCtrl");
    }]).
    controller('speciesCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("speciesCtrl");
    }]).
    controller('thermo_dynamic_polynomiaCtrl',['$scope','$location','UserService',function($scope,$location,$user){
        console.log("thermo_dynamic_polynomiaCtrl");
    }]);