// JavaScript Document
/*============register===============*/
window.onload=function(){
	var phoneNo=document.getElementById('txtPhoneNo');
	var emphoneNo=document.getElementById('emPhoneNo');
	//验证手机
	phoneNo.onblur=function(){
		var str=phoneNo.value;
		var reg=/^[1][0-9]{10}$/;
		if(reg.test(str)){
			emphoneNo.style.display="block";
			emphoneNo.innerHTML="";
			emphoneNo.className="";
		}else{
			emphoneNo.style.display="block";
			emphoneNo.innerHTML="请输入11位有效手机号";
			emphoneNo.className="e1";
		}	
	}
	//验证密码
	var txtPass=document.getElementById('txtPass');
	var emPass=document.getElementById('emPass');
	txtPass.onblur=function(){
		var str=txtPass.value;
		var reg=/^\w{5,15}\w$/;
		if(str.indexOf(' ')!=-1){
			emPass.style.display="block";
			emPass.innerHTML="密码不能包含空格";
		}else if(reg.test(str)){
			emPass.style.display="block";
			emPass.innerHTML="";
			emPass.className="";
		}else{
			emPass.style.display="block";
			emPass.innerHTML="请输入6-16位密码";
			emPass.className="e1";		
		}
	}
	//确认密码
	var txtPassConfirm=document.getElementById('txtPassConfirm');
	var emPassConfirm=document.getElementById('emPassConfirm');
	txtPassConfirm.onblur=function(){
		if(txtPass.value==txtPassConfirm.value && txtPassConfirm.value.length!=0){
			emPassConfirm.style.display="block";
			emPassConfirm.innerHTML="";
			emPassConfirm.className="";

		}else if(txtPassConfirm.value.length==0){
			emPassConfirm.style.display="block";
			emPassConfirm.innerHTML="密码不能为空";
			emPassConfirm.className="e1";
		}
		else{
			emPassConfirm.style.display="block";
			emPassConfirm.innerHTML="请输入确认密码";
			emPassConfirm.className="e1";
		}
	}
	//验证码
	var txtValidCode=document.getElementById('txtValidCode');
	var emValidCode=document.getElementById('emValidCode');
	var checkCode=document.getElementById('checkCode');
	var btnCode=document.getElementById('btnCode');
	var str1;
	btnCode.onclick=function(){
		var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		str1="";
		for(var i=0;i<4;i++){
			 var index=parseInt(Math.random()*arr.length);
			str1+=arr[index];
		}
			checkCode.innerHTML=str1;	
	}
	txtValidCode.onblur=function(){
	var num=txtValidCode.value;
		if(num==str1){
			emValidCode.style.display="block";
			emValidCode.innerHTML="";
			emValidCode.className="";
		}else{
			emValidCode.style.display="block";
			emValidCode.innerHTML="验证有误,区分大小写";
			emValidCode.className="e1";
			}
	}
	//协议
	var btnAgree=document.getElementById('btnAgree');
	var btnPhoneRegister=document.getElementById('btnPhoneRegister');
	var str3=0;
	btnAgree.onclick=function(){
			str3++;
		if(str3%2 == 0){
			btnPhoneRegister.style.background="#dc0f50";
		}else{
			btnPhoneRegister.style.background="#ddd";
			
		}
	}
	//注册
	btnPhoneRegister.onclick=function(){
		if(emphoneNo.innerHTML.length!=0){
			alert("请输入11位手机号");
		}else if(emPass.innerHTML.length!=0){
			alert("请输入6-16位密码，不包含空格");
		}else if(emPassConfirm.innerHTML.length!=0){
			alert("请确认密码");
		}else if(emValidCode.innerHTML.length!=0 || checkCode.innerHTML.length!=4){
			alert("请输入正确验证码");
		}else if(btnPhoneRegister.style.background=="#ddd"){
			alert("请阅读协议是否同意");
		}else{
			var myname=phoneNo.value;
			var mypass=txtPass.value;
			setCookie("uName",myname,7);
			setCookie("pWord",mypass,7);
			alert("注册成功");
		}
	}
	/*-----------------登录注册（cookie）-----------*/
	function setCookie(userName,uservalue,day){
		var date=new Date();
		date.setDate(date.getDate()+day	);
		document.cookie=(userName+"="+uservalue+"; expires="+date+";path=/")
	}
	
	function removeCookie(userName){
		 setCookie(userName,"",-1)
	}
	
	
}


























