// JavaScript Document
//=========login===============

window.onload=function(){
	//获取页面元素
	var yongHu=document.getElementById('us');
	var kuaiJie=document.getElementById('login');
	var userN=document.getElementById('user');
	var kuick=document.getElementById('quick');
	
	var userName=document.getElementById('txtUserName');
	var phone=document.getElementById('txtPhone');
	var txtPass=document.getElementById('txtPass');
	yongHu.className="curr";
	//点击切换到快捷登录
	kuaiJie.onclick=function(){
		yongHu.className="";
		kuaiJie.className="curr";
		userN.style.display="none";
		quick.style.display="block";
		userName.value="";
	};
	//点击切换到普通用户登录
	yongHu.onclick=function(){
		yongHu.className="curr";
		kuaiJie.className="";
		userN.style.display="block";
		quick.style.display="none";
		phone.value="";	
	};
	//验证手机号
	
	userName.onblur=function(){
		checkPhone(userName);
	};
	phone.onblur=function(){
		checkPhone(phone);
	}
	
	function checkPhone(obj){
		var str=obj.value;
		//console.log(str);
		var reg=/^[1][0-9]{10}$/;
		
		if(reg.test(str)){
			document.getElementById('message').style.display="none";
			document.getElementById('em_1').style.display="block";
			document.getElementById('phoneMessage').style.display="none";
			document.getElementById('tips').style.display="block";
			
		}else{
			document.getElementById('message').style.display="block";
			document.getElementById('em_1').style.display="none";
			document.getElementById('phoneMessage').style.display="block";
			document.getElementById('tips').style.display="none";
			alert("请输入有效手机号");
		}	
	}
	var btnLogin=document.getElementById('btnLogin');
	
	
	if(document.cookie){
		var nameNum=fnCheckCookie("uName");	
		if(nameNum==""){
			
		}else{
			txtUserName.value=nameNum;	
		}
	}
	var passNum=fnCheckCookie("pWord");
	var topLogin=document.getElementById('topLogin');
	btnLogin.onclick=function(){
		if(txtPass.value==passNum){
			window.location.href="../index.html";
			topLogin.innerHTML=txtUserName.value;
		}else{
			alert("请输入正确的密码");					
		}
	}

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





