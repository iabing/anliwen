/**
 * @Title  安丽文-个人中心
 * @Author a_bing
 * @Date   2016-02-22
 * @email  ia_bing@163.com
 * @note   安丽文-版权所有
 */

//Angular.js
var app = angular.module('myApp', []);

//页面加载
app.controller('myCtrl', function($scope){
	$scope.pageUrl = "page/myOrder/gybwl.html";	//默认显示页面
	$scope.changePage = function(url,obj){
		$scope.pageUrl = "page/"+url;
	};
});