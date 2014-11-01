angular.module('combustion',[
    'ui.router',
    'ngCookies',
    'combustion.directives',
    'combustion.controllers',
    'combustion.services'
    ]).
    config(['$interpolateProvider',function($interpolateProvider){
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]).
    constant("urls",{
        "part":"/static/partial",
        "api":"/api"
    }).
    config(['$stateProvider','$urlRouterProvider',"urls",'$locationProvider',function($stateProvider,$urlRouterProvider,urls,$locationProvider){
        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix = '';
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
//data
        $stateProvider.state('model',{
            url:'/data/model',
            templateUrl:urls.part+'/data/model.html',
            controller:'ModelCtrl'
        });
        $stateProvider.state('bibliography',{
            url:'/data/bibliography',
            templateUrl:urls.part+'/data/bibliography.html',
            controller:'bibliographyCtrl'
        });
        $stateProvider.state('data_attribute',{
            url:'/data/data_attribute',
            templateUrl:urls.part+'/data/data_attribute.html',
            controller:'data_attributeCtrl'
        });
        $stateProvider.state('dataset',{
            url:'/data/dataset',
            templateUrl:urls.part+'/data/dataset.html',
            controller:'datasetCtrl'
        });
        $stateProvider.state('element',{
            url:'/data/element',
            templateUrl:urls.part+'/data/element.html',
            controller:'elementCtrl'
        });
        $stateProvider.state('experiment',{
            url:'/data/experiment',
            templateUrl:urls.part+'/data/experiment.html',
            controller:'experimentCtrl'
        });
        $stateProvider.state('instrumental_model',{
            url:'/data/instrumental_model',
            templateUrl:urls.part+'/data/instrumental_model.html',
            controller:'instrumental_modelCtrl'
        });
        $stateProvider.state('optimization_variable',{
            url:'/data/optimization_variable',
            templateUrl:urls.part+'/data/optimization_variable.html',
            controller:'optimization_variableCtrl'
        });
        $stateProvider.state('optimization_variable_bound',{
            url:'/data/optimization_variable_bound',
            templateUrl:urls.part+'/data/optimization_variable_bound.html',
            controller:'optimization_variable_boundCtrl'
        });
        $stateProvider.state('reaction',{
            url:'/data/reaction',
            templateUrl:urls.part+'/data/reaction.html',
            controller:'reactionCtrl'
        });
        $stateProvider.state('reaction_rate',{
            url:'/data/reaction_rate',
            templateUrl:urls.part+'/data/reaction_rate.html',
            controller:'reaction_rateCtrl'
        });
        $stateProvider.state('surrogate_model',{
            url:'/data/surrogate_model',
            templateUrl:urls.part+'/data/surrogate_model.html',
            controller:'surrogate_modelCtrl'
        });
        $stateProvider.state('species',{
            url:'/data/species',
            templateUrl:urls.part+'/data/species.html',
            controller:'speciesCtrl'
        });
        $stateProvider.state('thermo_dynamic_polynomia',{
            url:'/data/thermo_dynamic_polynomia',
            templateUrl:urls.part+'/data/thermo_dynamic_polynomia.html',
            controller:'thermo_dynamic_polynomiaCtrl'
        });
    }]);
