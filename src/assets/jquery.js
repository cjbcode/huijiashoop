// JavaScript Document
//common
$(function(){
		var $main = $('#main');
		var $pic = $main.children('.pic');
		var $nav = $main.children('.nav');
		var $li = $pic.find('li');
		var $ul = $('.nav ul');
		var index = 0;
		//图片数量
		var len = $pic.find('li').length;
		//将li加入ul
		for(var i=0;i<len;i++){
			$('<li/>').appendTo($ul);
		};
		$nav.append($ul);
		//初始状态
		show();
		var timer;	//声明定时器
		// 鼠标移入清除定时器，鼠标移出重启定时器
		$main.on('mouseenter',function(){
			clearInterval(timer);
		}).on('mouseleave',function(){
			timer = setInterval(carousel,4000);
		}).trigger('mouseleave');
		//点击li切换
		$nav.on('click','li',function(){
			index=$(this).index();
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
			$li.find('.img0').css({"opacity":0}).eq(index).animate({opacity:1},function(){
				$li.find('.img1').css({"left":"-760px","opacity":0}).eq(index).animate({left:0,opacity:1},800,function(){
					$li.find('.img2').css({"left":"-20px","opacity":0}).eq(index).animate({left:0,opacity:1},1000)
				})
			});
			$li.eq(index).show().siblings().hide();
			
			$nav.find('li').eq(index).addClass('select').siblings().removeClass('select');
			console.log($nav.find('li').eq(index));
		}
	});
	






















