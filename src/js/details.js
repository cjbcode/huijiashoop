// JavaScript Document

window.onload=function(){
/*====================详情页切换=================*/
    var nav = document.getElementById('nav').getElementsByTagName('li');//获取导航
    var box = document.getElementById('u_cont').getElementsByTagName('div');//获取模块
    for (var i = 0; i <= nav.length - 1; i++) {
        nav[i].onclick = function () {
            for (var i = 0; i <= nav.length - 1; i++) {
                if (nav[i] == this) {
                    nav[i].className = 'curr';
                    box[i].style.display = 'block';
                } else {
                    nav[i].className = '';
                    box[i].style.display = 'none';
                }
            }
        }
	}
/*=================购物车显示隐藏=======================*/
//鼠标划过显示隐藏购物车
	var gou=document.getElementById('gou');
	var cart=document.getElementById('ware_list');
	gou.onmouseover=function(){
		cart.style.display="block";
	}
	gou.onmouseout=function(){
		cart.style.display="none";
	}
}
/*====================放大镜=====================*/
$(function(){
	var $smallpic=$('.smallpic');
	var $box=$('.big');
	var $bigpic=$('.bigpic');
	$bigpic.hide();
		$smallpic.hide()
	$box.on('mousemove',function(e){
		$bigpic.show();
		$smallpic.show()
		var nleft=$box.offset().left;
		var ntop=$box.offset().top
		var w=e.clientX-nleft-70;
		
		var h=e.clientY-ntop-70;
		if(w<=0){
			w=0;
		}else if(w>=320){
			w=320;
		}
		if(h<=0){
			h=0
		}else if(h>=320){
			h=320;
		}
		$smallpic.css({left:w,top:h});
	
		$('.bp').css({left:-w*2,top:-h*2});
		
	}).on('mouseleave',function(){
			$bigpic.hide();
		$smallpic.hide()
	})
})





























