// JavaScript Document
/*===============index--js==================*/
/*=================轮播======================*/
$(function(){
		var $carousel = $('.carousel');
		var $pic = $carousel.children('.pic');
		var $dongdian = $carousel.children('.dongdian');
		var $li = $pic.find('li');
		var $ul = $('.dongdian ul');
		var $btn_prev = $('.btn_prev');
		var $btn_next = $('.btn_next');
		var index = 0;
		//图片数量
		var len = $pic.find('li').length;
		//将li加入ul
		for(var i=0;i<len;i++){
			$('<li/>').appendTo($ul).html(i+1);
		};
		$dongdian.append($ul);
		//初始状态
		show();
		var timer;	//声明定时器
		// 鼠标移入清除定时器，鼠标移出重启定时器
		$carousel.on('mouseenter',function(){
			clearInterval(timer);
		}).on('mouseleave',function(){
			timer = setInterval(carousel,4000);
		}).trigger('mouseleave');
		//点击li切换
		$dongdian.on('click','li',function(){
			index=$(this).index();
			show();	
		})
		$btn_prev.on('click',function(){
			index--;
			show();	
		})
		$btn_next.on('click',function(){
			index++;
			show();	
		})
		//轮播函数
		function carousel(){
			index++;
			show();
		}
		//图片显示函数
		function show(){
			if(index<0){
				index = len-1;
			}else if(index>=len){
				index = 0;
			};
			$li.find('.img0').css({"opacity":0}).eq(index).animate({opacity:1},1000)

			$li.eq(index).show().siblings().hide();
			
			$dongdian.find('li').eq(index).addClass('select').siblings().removeClass('select');
		}

//======================楼层nav============================
	// 1、获取页面元素
	var $nav = $('#lou_nav');
	var $floor = $('.floor');

	// 2、滚动
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		// 1、滚动距离大于1200，显示楼层导航，小于1200时隐藏
		if(scrollTop > 1200){
			$nav.fadeIn('slow');//600
		}else{
			$nav.fadeOut('fast');//200
		}

		// 2>滚动到某一楼层时，高亮显示导航对应楼层
		// 得到当前楼层的index值
		$floor.each(function(idx,ele){
			if(scrollTop >= $(ele).offset().top && scrollTop < $(ele).offset().top + $(ele).outerHeight()/2){
				$nav.find('li').not('.last').removeClass('hover').eq(idx).addClass('hover');

				// 退出循环
				return false;
			}
		});
	});
	
	// 3、点击楼层导航，跳转到相应楼层
	$nav.on('click','li',function(){
		var index = $(this).index();
		var top;
		if($(this).hasClass('last')){
			top = 0;
		}else{
			top = $floor.eq(index).offset().top;
		}
		// $(window).scrollTop(top);
		$('html,body').animate({scrollTop:top});
	});
});

	



























