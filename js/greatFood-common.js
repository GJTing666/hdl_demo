// 左侧菜单栏的显示与隐藏
$('.showCaidan').click(function() {
	// console.log($(this))
	if ($(this).hasClass('on')) {
		$(this).removeClass('on');
		$('.food-caidan').animate({
			'marginLeft': "-.92rem"
		}, 600)
	} else {
		$(this).addClass('on');
		$('.food-caidan').animate({
			'marginLeft': 0
		}, 600)
	}
})

// 左侧菜单栏的点击事件
var pathname = location.pathname
console.log(pathname)
// if(pathname == "shuanCai.html"){
// 	console.log(111)
// }else{
// 	console.log(222)
// }
let caiDanLists = document.querySelectorAll('.caidan-lists .caidan-cont');
for(let k=0;k<caiDanLists.length;k++){
	$('.caidan-lists .caidan-cont').eq(k).click(function(){
		console.log(111)

		$(this).parent('.caidan-list').addClass('default');
		$(this).parent('.caidan-list').siblings().removeClass('default');
	})
}

// 锅底界面-加载更多按钮点击事件
let count = 0;
$('.animteBtn .moreBtn').click(function() {
	count++;
	if (count % 2 == 0) {
		$('.guodi-lists .guodiList-cont').css({
			"display": "list-item"
		})
		$('.animteBtn .moreBtn').css({
			"display": "none"
		})
	} else {
		$('.guodi-lists .guodiList-cont').eq(5).nextUntil($('.guodi-lists .guodiList-cont').eq(12)).css({
			"display": "list-item"
		})
	}
})

// 涮菜li的hover事件：图片以及inside向上移动
 window.onload = function(){
	let foodLists = document.querySelectorAll('.foodLists .guodiList-cont');
	for (let i = 0; i < foodLists.length; i++) {
		$('.foodLists .guodiList-cont').eq(i).hover(function() {
			// console.log(111)
			$(this).addClass('up')
		}, function() {
			$(this).removeClass('up')
		})
	}
 }


// 涮菜-加载更多按钮点击事件
let moreBtn = document.querySelectorAll('.scBtn .moreBtn');
// console.log(moreBtn);
for(let k=0;k<moreBtn.length;k++)
$('.scBtn .moreBtn').eq(k).click(function(){
	count++;
	if (count % 2 == 0) {
		// console.log(222)
		$(this).siblings('.guodi-lists').find('.guodiList-cont').css({
			"display": "list-item"
		})
		$(this).css({
			"display": "none"
		})
	} else {
		// console.log($(this).siblings('.guodi-lists').find('.guodiList-cont'))
		$(this).siblings('.guodi-lists').find('.guodiList-cont').nextUntil($('.guodi-lists .guodiList-cont').eq(12)).css({
			"display": "list-item"
		})
		// console.log($(this).siblings('.guodi-lists').find('.guodiList-cont').length)
		if($(this).siblings('.guodi-lists').find('.guodiList-cont').length < 12){
			$(this).siblings('.guodi-lists').find('.guodiList-cont').css({
				"display": "list-item"
			})
			$(this).css({
				"display": "none"
			})
		}
	}
})


