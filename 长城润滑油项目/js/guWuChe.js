$(function(){
	//全选
	$(".xuan input").click(function(){
		//		alert(111);
		$(".td1 input").attr("checked",this.checked);
		
	})
		//清空购物车
	$(".qc").click(function(){
//		alert(111)
		$(".tb").detach();  //detach()  分离
	})
		//全选删除
	$(".qsin").click(function(){
//		alert(111);
		$(".td1 input").attr("checked",this.checked);
		
	})
	
})
