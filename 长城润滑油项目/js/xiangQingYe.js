//产品介绍切换
$(function(){
	$(".con2_right_ul li").click(function(){
		var _index =$(this).index();
		
		$(this).addClass("jies").siblings().removeClass("jies");
		$(".con2_right div").eq(_index).show().siblings("div").hide();

	})
	
})


