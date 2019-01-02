$(function(){
	$(".st0301 li").click(function(){
		var _index = $(this).index();

		$(this).addClass("xxz").siblings().removeClass("xxz");
		$('.st0302 div').eq(_index).addClass('xxz2').siblings().removeClass('xxz2');

	})
	
	
})
