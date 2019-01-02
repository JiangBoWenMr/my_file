//搜索输入关键字
$(function(){
	//       焦点进入
	$(".inp1").focus(function(){
		                         //内定值
		if($(this).val() ==this.defaultValue){  
			  $(this).val("").css("color","#333");           
		} 
	})
	//   焦点离开
	$(".inp1").blur(function(){
		 if ($(this).val() == "") {
			$(this).val(this.defaultValue).css("color","#717371");
		 }
	});	
	
});