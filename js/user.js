/**
 * @Title  安丽文-个人中心
 * @Author a_bing
 * @Date   2016-02-22
 * @email  ia_bing@163.com
 * @note   安丽文-版权所有
 */

 //require.js配置文件
 require.config({
     paths: {
         'jquery': 'jquery',
         'WdatePicker': 'My97DatePicker/WdatePicker',
         'easyui': 'easyui',
         'fullcalendar': 'fullcalendar',
         'layer': 'layer/layer',
         'angular': 'http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js',
         'angular-route': 'http://apps.bdimg.com/libs/angular-ui-router/0.2.15/angular-ui-router.js'
     },
     shim: {
        "angular":{
            exports:"angular"
        },
        "angular-route":{
            exports:"angular-route"
        }
    }
 })
 require(['WdatePicker'], function(){  //加载WdatePicker

 });

 $(function(){
  //个人中心 导航切换
  $('.navUl li>a').mouseenter(function(){
    $('.navUl li>a').removeAttr('id');
    $(this).attr('id','curNav');
    $('.subNav').hide();
    $(this).siblings('.subNav').show();
  });
  //subNav
  $('.subNav a').click(function(){
    $(this).siblings().removeClass('curSubNav');
    $(this).addClass('curSubNav');
  });
  //订单一、二切换
  /*$('.orderBoxP span').click(function(){
      $(this).siblings().removeAttr('id');
      $(this).attr('id','curOrderSP');
      $('div.orderBoxCon').hide();
      $('div.orderBoxCon').eq($(this).index()).show();
    });*/
 });

 //检验手机号码
 function isMobile(str){
 	var pattern = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
 	return str.test(pattern);
 }

 //检验邮箱
 function isEmail(str){
 	var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
 	return str.test(pattern);
 }

 //加入收藏
 function joinShou(url,title){
 	if(confirm("网站名称："+title+"\n网址："+url+"\n确定添加收藏?")){
       var ua = navigator.userAgent.toLowerCase();
       if(ua.indexOf("msie 8")>-1){
           external.AddToFavoritesBar(url,title,'');//IE8
       }else{
           try {
               window.external.addFavorite(url, title);
           } catch(e) {
               try {
                   window.sidebar.addPanel(title, url, "");//firefox
               } catch(e) {
                   alert("加入收藏失败，请使用Ctrl+D进行添加");
               }
           }
       }
   }
   return false;
 }