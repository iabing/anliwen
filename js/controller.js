/**
 * @Title  安丽文-个人中心
 * @Author a_bing
 * @Date   2016-02-22
 * @email  ia_bing@163.com
 * @note   安丽文-版权所有
 */

 /* uController.js */

 app.controller('uController', function($scope){
 	//服务评价
 		$('.orderBoxP span').click(function(){
			$(this).siblings().removeAttr('id');
			$(this).attr('id','curOrderSP');
			$('div.orderConDemo').hide();
			$('div.orderConDemo').eq($(this).index()).show();
		});
 });