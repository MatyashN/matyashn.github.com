"use strict";var myApp=angular.module("myApp",["ngRoute","ctrl"]);myApp.config(["$routeProvider",function(t){t.when("/screen-1",{templateUrl:"views/screen-1.html"}),t.when("/screen-2",{templateUrl:"views/screen-2.html"}),t.when("/screen-3",{templateUrl:"views/screen-3.html"}),t.when("/screen-4",{templateUrl:"views/screen-4.html"}),t.when("/screen-5",{templateUrl:"views/screen-5.html"}),t.otherwise({redirectTo:"/screen-1"})}]);var ctrl=angular.module("ctrl",[]);ctrl.controller("mainCtrl",["$scope","$http",function(t,e){e.get("data.json").success(function(e){t.countries=e.countries,t.cities=e.cities}),t.data={name:"",mail:"",country:{},city:{},netWorks:[{name:"Facebook",status:!1,url:""},{name:"Vkontakte",status:!1,url:""},{name:"Twitter",status:!1,url:""},{name:"Odnoclassniki",status:!1,url:""}],image:{}},t.images=[{url:"img/cat1.jpg",type:"cat"},{url:"img/cat2.jpg",type:"cat"},{url:"img/cat3.jpg",type:"cat"},{url:"img/dog4.jpg",type:"dog"}],t.optionsFilter=function(e){return t.data.country.countryNum==e.country},t.startOver=function(){t.data={name:"",mail:"",country:{},city:{},netWorks:[{name:"Facebook",status:!1,url:""},{name:"Vkontakte",status:!1,url:""},{name:"Twitter",status:!1,url:""},{name:"Odnoclassniki",status:!1,url:""}],image:{}}}}]);