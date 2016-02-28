
//Angular.js 配置
var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
 //页脚导航
 $stateProvider
   .state('index',{
     url:'/index',
     templateUrl:'index.html'
   })
   .state('about',{
     url:'/about',
     templateUrl:'about.html'
   })
   .state('news',{
     url:'/news',
     templateUrl:'news.html'
   })
   .state('object',{
     url:'/object',
     templateUrl:'object.html'
   })
   .state('kefu',{
     url:'/kefu',
     templateUrl:'kefu.html'
   })
   .state('ayi',{
     url:'/ayi',
     templateUrl:'ayi.html'
   })
   .state('family',{
     url:'/family',
     templateUrl:'family.html'
   })
   .state('luntan',{
     url:'/luntan',
     templateUrl:'luntan.html'
   })
   .state('contact',{
     url:'/contact',
     templateUrl:'contact.html'
   });
 $urlRouterProvider.otherwise('page/myInfos/jbzl.html'); //其它路由跳转

 $stateProvider
   .state('home', {  //首页
     url: '',
     templateUrl: 'page/myOrder/fwjl.html'
   })
   .state('order',{  //订单
     url: '/order',
     'templateUrl': 'page/myOrder/fwjl.html'
   })
   .state('wdddxx',{ //订单
     url: '/wdddxx',
     templateUrl: 'page/myOrder/fwjl.html'
   })
   .state('fwayxx',{
     url: '/fwayxx',
     templateUrl: 'page/myOrder/fwayxx.html'
   })
   .state('fwht',{
     url: '/fwht',
     templateUrl: 'page/myOrder/fwht.html'
   })
   .state('wdfwbz',{
     url: '/wdfwbz',
     templateUrl: 'page/myOrder/wdfwbz.html'
   })
   .state('gygz',{
     url: '/gygz',
     templateUrl: 'page/myOrder/gygz.html'
   })
   .state('ayfwrj',{
     url: '/ayfwrj',
     templateUrl: 'page/myOrder/ayfwrj.html'
   })
   .state('gybwl',{
     url: '/gybwl',
     templateUrl: 'page/myOrder/gybwl.html'
   })
   .state('aycmjz',{
     url: '/aycmjz',
     templateUrl: 'page/myOrder/aycmjz.html'
   })
   .state('aycqtj',{
     url: '/aycqtj',
     templateUrl: 'page/myOrder/aycqtj.html',
     controller: 'cgtjController',
     resolve: {
        getUrl: function($http){
          $http.get('js/easyui.js');
          $http.get('js/fullcalendar.js');
        }
     }
   })
   .state('fwpj',{
     url: '/fwpj',
     templateUrl: 'page/myOrder/fwpj.html'
   })
   /**** orderNav ****/
   .state('xzdd',{
     url: '/xzdd',
     templateUrl: 'page/myOrder/xzdd.html'
   })
   .state('ddap',{
     url: '/ddap',
     templateUrl: 'page/myOrder/ddap.html'
   })
   .state('fwjl',{
     url: '/ddap',
     templateUrl: 'page/myOrder/fwjl.html'
   })
   .state('wlzm',{
     url: '/wlzm',
     templateUrl: 'page/myOrder/wlzm.html'
   })
   .state('ddls',{
     url: '/ddls',
     templateUrl: 'page/myOrder/ddls.html'
   })
   .state('fwxc',{
     url: '/fwxc',
     templateUrl: 'page/myOrder/fwxc.html'
   })
});

app.controller('myCtrl', function($scope){

});
app.controller('cgtjController', function($scope, $http){

});