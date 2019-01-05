//轮播图
$(function(){
//	小圆圈
	var _index = 0;
	$(".lbs yuan li").click(function(){
		var _index = $(this).index();
		$(this).eq(_index).addClass('hover').siblings().removeClass('hover');
		$(".lbs ul li").eq(_index).fadeIn().siblings().hide();
	});
	setInterval(function () {
		_index++;
		if (_index>2) {
			_index = 0;
		} 
		$(".llbs yuan li").eq(_index).addClass('hover').siblings().removeClass('hover');
		$(".lbs ul li").eq(_index).show().siblings().hide();
	},2000)

});



//排行榜 隐藏显示
$(function(){
	$(".right_ul_li").mousemove(function(){
		var _index = $(this).index();
		$(".right_ul li dl").eq(_index).show().siblings().hide();
	})
	$(".right_ul_li").mouseout(function(){
		var _index = $(this).index();
		$(".right_ul li dl").eq(_index).hide().siblings().show();
		
	})
	
})

//左边内容图片移动效果
$(function(){
	$(".mleft img").hover(function(){
			$(this).stop().animate({"marginLeft":-20},300);
		},function(){
			$(this).stop().animate({"marginLeft":0},300);
		})
	});