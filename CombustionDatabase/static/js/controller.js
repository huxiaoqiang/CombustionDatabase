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

    });
