//监听页面滚动事件
$(document).ready(function() {
	$('.sea-top').addClass('css3Animation')
	var p = 0,
		t = 0;
	$(window).scroll(function() {
		p = $(this).scrollTop();
		if (t < p) {
			$('.sea-top').css({
				"top": "-1.06rem"
			})
		} else{
			$('.sea-top').css({
				"top": 0
			})
		}
		setTimeout(function() {
			t = p;
		}, 0)
	})
})


// 回到顶部按钮隐显 start
$(document).scroll(function() { //页面加载时，获取滚动条初始高度
	var distance = $(document).scrollTop(); //获取滚动条初始高度的值 ：0
	// console.log(distance); //打印滚动条不同高度的位置的值

	if (distance == 0) { //当滚动条高度为0时
		$('.slide-list.on').css({
			'opacity': 0
		}) //移除css
	} else {
		$('.slide-list.on').css({
			'opacity': 1
		}) //添加css
	}

})
// 回到顶部按钮隐显 end

// 返回顶部 start
var retop = document.querySelector(".slide-list-cont.on");

// 滚动距离
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop

retop.onclick = function() {

	// 每隔10毫秒执行函数体一次，不间断一直执行，除非是手动关闭
	var retoptime = setInterval(function() {
		// 在函数中定义的变量 只在函数中生效

		scrollTop = scrollTop - 50;
		// console.log(scroll)

		document.body.scrollTop = scrollTop;
		document.documentElement.scrollTop = scrollTop;

		if (scrollTop <= 0) {
			clearInterval(retoptime);
		}
	}, 1)

	// 兼容IE、火狐等浏览器
	document.documentElement.scrollTop = 0;
	// 兼容Chrome浏览器
	document.body.scrollTop = 0;
}
// 返回顶部 end

// 国家详情弹出
$('.tab-guojia .guojia').click(function() {
	$('.tab-guojia .guojia-cont').slideToggle();
})

// 搜索盒子隐显
$('.searchBox').click(function() {
	if ($(this).hasClass('on')) {
		$(this).removeClass('on');
	} else {
		$(this).addClass('on')
	}
	$('.slideS_Box').slideToggle();
})
$('.search_close').click(function() {
	$('.slideS_Box').slideUp();
})

// 头部导航栏二级下拉列表
let slideList = document.querySelectorAll('.nav .nav-item');
for (let i = 0; i < slideList.length; i++) {
	$('.nav .nav-item').eq(i).hover(function() {
		$(this).addClass('in');
		$(this).find('.slidedown').slideDown();
		let twoList = document.querySelectorAll('.nav .nav-item.in .slidedown-cont');
		// 二级菜单的效果
		for (let j = 0; j < twoList.length; j++) {
			$('.nav .nav-item.in .slidedown-cont').eq(j).hover(function() {
				$(this).find('.slidedown-text').addClass('on');
				if ($(this).find('.slidedown-fuhao').hasClass('add')) {
					$(this).find('.slidedown-fuhao').removeClass('add');
					$(this).find('.slidedown-fuhao').addClass('del');
					// 三级菜单的隐显
					// $(this).find('.three-lists').css({
					// 	"display": "block"
					// })
				}
			}, function() {
				$(this).find('.slidedown-text').removeClass('on');
				if ($(this).find('.slidedown-fuhao').hasClass('del')) {
					$(this).find('.slidedown-fuhao').removeClass('del');
					$(this).find('.slidedown-fuhao').addClass('add');
					// 三级菜单的隐显
					// $(this).find('.three-lists').css({
					// 	"display": "none"
					// })
				}
			})
		}
	}, function() {
		$(this).removeClass('in');
		$(this).find('.slidedown').slideUp(0);
	})
}
// 头部导航栏的点击事件
for (let k = 0; k < slideList.length; k++) {
	$('.nav .nav-item').eq(k).click(function() {
		$(this).addClass('call');
		$(this).siblings().removeClass('call');
	})
}

// 小屏列表
$('.pullBtn').click(function() {
	// console.log($('.smaNav-lists').height())
	if ($('.smaNav-lists').hasClass('active')) {
		$('.smaNav-lists').removeClass('active');
		$('.smaNav-lists').animate({
			top: "-2.8rem",
			"opacity": "0"
		}, 100)
	} else {
		$('.smaNav-lists').addClass('active');
		$('.smaNav-lists').animate({
			top: "0",
			"opacity": "1"
		}, 100)
	}
})
