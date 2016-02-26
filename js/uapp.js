/**
 * @Title  安丽文-个人中心
 * @Author a_bing
 * @Date   2016-02-22
 * @email  ia_bing@163.com
 * @note   安丽文-版权所有
 */

//Angular.js
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
	$urlRouterProvider.otherwise('page/myInfos/jbzl.html');	//其它路由跳转
	
	$stateProvider
		.state('home', {	//首页
			url: '',
			templateUrl: 'page/myOrder/fwjl.html'
		})
		.state('order',{	//订单
			url: '/order',
			'templateUrl': 'page/myOrder/fwjl.html'			
		})
		.state('order.wdddxx',{	//订单
			url: '/wdddxx',
			templateUrl: 'page/myOrder/fwjl.html'
		})
		.state('order.fwayxx',{
			url: '/fwayxx',
			templateUrl: 'page/myOrder/fwayxx.html'
		})
		.state('order.fwht',{
			url: '/fwht',
			templateUrl: 'page/myOrder/fwht.html'
		})
		.state('order.wdfwbz',{
			url: '/wdfwbz',
			templateUrl: 'page/myOrder/wdfwbz.html'
		})
		.state('order.gygz',{
			url: '/gygz',
			templateUrl: 'page/myOrder/gygz.html'
		})
		.state('order.ayfwrj',{
			url: '/ayfwrj',
			templateUrl: 'page/myOrder/ayfwrj.html'
		})
		.state('order.gybwl',{
			url: '/gybwl',
			templateUrl: 'page/myOrder/gybwl.html'
		})
		.state('order.aycmjz',{
			url: '/aycmjz',
			templateUrl: 'page/myOrder/aycmjz.html'
		})
		.state('order.aycqtj',{
			url: '/aycqtj',
			templateUrl: 'page/myOrder/aycqtj.html'
		})
		.state('order.fwpj',{
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

//页面加载
app.controller('myCtrl', function($scope){
	//$scope.pageUrl = "page/myOrder/fwjl.html";	//默认显示页面
	$scope.changePage = function(url,obj){
		$scope.pageUrl = "page/"+url;
	};
});