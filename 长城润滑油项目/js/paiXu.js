$(".lic").mousemove(function(){
	$(this).addClass("moren").siblings().removeClass("moren");
})

$(".lic:last-child,.u_jp").mousemove(function(){
	$(".u_jp").show();
})

$(".lic:last-child,.u_jp").mouseout(function(){
	$(".u_jp").hide();
})

$(".u_jp li").mousemove(function(){
	$(this).css("background","#0000FF").siblings().css("background","#FFFFFF")
})


//$(".u_lie li").mousemove(function(){
//	$(this).addClass("moren").siblings("li").removeClass("moren");
//	var _index=$(this).index();
//	$(".u_jp li").eq(_index).show().siblings(".u_jp li").hide();
//})