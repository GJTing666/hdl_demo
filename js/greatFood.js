// 轮播切换时间
$('.carousel').carousel("pause")

// 海底捞美食界面页数跳转 右按钮
$('.slide-btn.right').click(function() {
	let i = $('.greatFood-content .item.active').index();
	// console.log(i)
	let html = `<b>${i+2}</b>`
	$('.carousel-btn .carousel-num b').remove();
	$('.carousel-btn .carousel-num span').before(html);
	if (i >= 4) {
		i = 0
		let html = `<b>${i+1}</b>`
		$('.carousel-btn .carousel-num b').remove();
		$('.carousel-btn .carousel-num span').before(html);
	}
})
// 左按钮
$('.slide-btn.left').click(function() {
	let i = $('.greatFood-content .item.active').index();
	// console.log(i)
	if (i == 0) {
		i = 5
		let html = `<b>${i}</b>`
		$('.carousel-btn .carousel-num b').remove();
		$('.carousel-btn .carousel-num span').before(html);
	}
	if (i <= 4) {
		let html = `<b>${i}</b>`
		$('.carousel-btn .carousel-num b').remove();
		$('.carousel-btn .carousel-num span').before(html);
	}
})

// 锅底界面效果：li的hover事件
let guodiLists = document.querySelectorAll('.guodi-lists .guodiList-cont');
for (let i = 0; i < guodiLists.length; i++) {
	$('.guodi-lists .guodiList-cont').eq(i).hover(function() {
		$(this).find('.guodi-outside').addClass('active')
	}, function() {
		$('.guodi-lists .guodiList-cont').siblings().find('.guodi-outside').removeClass('active')
	})
}

// 涮菜界面js
let scLists = document.querySelectorAll('.scBtn .shuaiCai-nav .shuanCai-cont');
// console.log(scLists)
for (let i = 0; i < scLists.length; i++) {
	$('.scBtn .shuaiCai-nav .shuanCai-cont').eq(i).click(function() {
		$(this).addClass('in')
		$(this).siblings().removeClass('in')
		$('.scBtn .chuanCai-foods').eq(i).addClass('in')
		$('.scBtn .chuanCai-foods').eq(i).siblings().removeClass('in')
	})
}

// 蘸料图片运动
$('.zl-lists .zl-cont').hover(function() {
	// console.log(111)
	$(this).find('.zl-img').rotate(45);
	$(this).find('.zl-txt').css({
		"color": "#e50012"
	})
}, function() {
	$(this).find('.zl-img').rotate(0);
	$(this).find('.zl-txt').css({
		"color": "#666666"
	})
})


// 蘸料界面点击事件
let zhanLiaoLists = document.querySelectorAll('.zl-lists .zl-cont');
for (let j = 0; j < zhanLiaoLists.length; j++) {

	$('.zl-lists .zl-cont').eq(j).click(function() {
		$(this).parents('.zhanLiao-content').find('.zl-detali-box').eq(j).addClass('on');
		$(this).parents('.zhanLiao-content').find('.zl-detali-box').eq(j).siblings().removeClass('on');
	})
}

// 蘸料回到顶部图标
// 返回顶部 start
var retop = document.querySelector(".zl-goBack");

// 滚动距离
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop

$('.zl-goBack').click(function() {
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
})
// 返回顶部 end

// 页内点击跳转
function scrollToAnchor(anchorName) {
	if (anchorName) {
		// 找到锚点
		let anchorElement = document.querySelector(anchorName);
		//如果对应的id锚点存在就跳转
		if (anchorElement) {
			// block:"start" 相当于true，block:"end" 相当于false
			// behavior: auto,instant立即直接跳转到所在锚点
			// smooth平滑过渡到所在锚点
			anchorElement.scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		}
	}
}

// 食品安全界面
let fsList = document.querySelectorAll('.fsCont-lists .fsCont-item');
// console.log(fsList);
for (let q = 0; q < fsList.length; q++) {
	$('.fsCont-lists .fsCont-item').eq(q).click(function() {
		$('.fsCont-lists .fsCont-item').eq(q)
			.parents('.fsCont-lists .fsCont-list').addClass('on');
		$('.fsCont-lists .fsCont-item').eq(q)
			.parents('.fsCont-lists .fsCont-list').siblings().removeClass('on');
		$('.fsCont-r-box').eq(q).addClass('on');
		$('.fsCont-r-box').eq(q).siblings().removeClass('on');
	})
}
// 管理公告点击跳转
let noticeLists = document.querySelectorAll('.fsNotice-lists .fsNotice-cont')
console.log(noticeLists)
for (let p = 0; p< noticeLists.length; p++) {
	$('.fsNotice-lists .fsNotice-cont').eq(p).click(function() {
		$(window).attr('location', $('.fsNotice-cont').eq(p).attr('href'))
	})
}
