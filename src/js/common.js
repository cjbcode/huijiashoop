// JavaScript Document
/*============common================*/
window.onload=function(){
	//鼠标划过显示隐藏购物车
	var gou=document.getElementById('gou');
	var cart=document.getElementById('ware_list');
	gou.onmouseover=function(){
		cart.style.display="block";
	}
	gou.onmouseout=function(){
		cart.style.display="none";
	}
	
	//================登录================
	var topLogin=document.getElementById('topLogin');
	if(document.cookie){
		var nameNum=fnCheckCookie("uName");
		//alert(nameNum);	
		if(nameNum){
			var str4=nameNum.replace(nameNum.substring(3,8),"***");
			//alert(str4);
			topLogin.innerHTML=str4;	
		}else{
			
		}
	}
	//获取cookie封装函数
	function fnCheckCookie(cookName){
	//document.cookie 
		var result = "";
		var aCookie = document.cookie.split("; ");
		//先拆分成键值对数组
		for(var i=0; i<aCookie.length; i++){
			var aCook = aCookie[i].split("=");
			
			if(aCook[0] == cookName){
				result = aCook[1];
			}
		}
		return result;
	}
	
	
}














































