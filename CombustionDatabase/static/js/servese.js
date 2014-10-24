angular.module("combustion.servise",["$scope"]).
    value('version','0.1').
    service('UserService',['urls', '$http', '$cookies', function(urls, $http, $cookies){
//        var user = {};
//        var islogin;
//        $http.get(urls.api + '/user/userinfo/get').success(function(data){
//            user = data.userinfo;
//            //console.log(data);
//        });
//        if($cookies.username){
//            user.username = $cookies.username;
//            islogin = true;
//        }
//        else{
//            islogin = false;
//        }
//        if($cookies.status){
//            user.status = $cookies.status;
//        }
//        if($cookies.role){
//            user.role = $cookies.role;
//        }
//        return {
//            'islogin':function(){
//                return islogin;
//            },
//            'username': function(){
//                return user.username;
//            },
//            'refresh': function(){
//                $.get(urls.api + '/user/status', function(data){
//                    user = data;
//                });
//            },
//            'status': function(){
//                return user.status;
//            },
//            'role': function(){
//                if(!('role' in user)){
//                    return 1;
//                }
//                return user.role;
//            },
//            'roles': function(){ //What's this?
//                return user.roles;
//            },
//            'school_manager': function(){
//                if(!('role' in user)){
//                    return false;
//                }
//                return parseInt(user.role) == 0 || parseInt(user.role) == 4;
//            },
//            'department_manager': function(){
//                if(!('role' in user)){
//                    return false;
//                }
//                return parseInt(user.role) == 0 || parseInt(user.role) == 3;
//            },
//            'logout': function(){
//                $http.get(urls.api + '/user/logout').success(function(data){
//                    delete $cookies['username'];
//                    delete $cookies['role'];
//                    delete $cookies['status'];
//                    console.log(data);
//                    if(data.error.code == 1){
//                        window.location.href = '/';
//                    }
////                });
//            }
//        };
    }]);