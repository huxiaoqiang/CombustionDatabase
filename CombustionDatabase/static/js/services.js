angular.module("combustion.services",[]).
    value('version','0.1').
    service('CsrfService', ['$cookies' ,function($cookies){
        return {
            'val': function() {
                return $cookies.csrftoken;
            },
            'set_csrf': function(data) {
                data['csrfmiddlewaretoken'] = $cookies.csrftoken;
            },
            'set_csrf_array': function(data){
                data.push({'csrfmiddlewaretoken': $cookies.csrftoken});
            },
            'format_error': function(error) {
                if(error['code'] == 1){
                    error['type'] = 'alert alert-success';
                }else{
                    error['type'] = 'alert alert-danger';
                }
                error['show'] = true;
                    return error;
                }
        };
    }]).
   service('UserService',['urls', '$http', '$cookies', function(urls, $http, $cookies){
       var user = {};
       var islogin;
       $http.get(urls.api + '/user/userinfo/get').success(function(data){
           user = data.userinfo;
       });
       if($cookies.username){
           user.username = $cookies.username;
           islogin = true;
       }
       else{
           islogin = false;
       }
       return {
           'islogin':function(){
               return islogin;
           },
           'username': function(){
               return user.username;
           },
           'mail':function(){
                return user.mail;
           },
           'logout': function(){
               $http.get(urls.api + '/user/logout').success(function(data){
                   delete $cookies['username'];
                   console.log(data);
                   if(data.error['code'] == 1){
                       window.location.href = '/';
                   }
               });
           }
       };
   }]);