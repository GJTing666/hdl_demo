// 下拉框

let show = document.getElementById('show');
words.size = 3;
words.onchange = function(e) {
	var option = this.options[this.selectedIndex];
	show.value = option.innerHTML;
	words.style.display = 'none';
}

// 通过点击向下展开收缩
$(".corner").click(function() {
	$(".words").slideToggle()
})

$(".intver").click(function() {
	$(".words").slideToggle()
})


// 三角形来回翻转
let deg = ""
// 

$(".zk").click(function() {
	if ($(this).hasClass("on")) {
		$(this).removeClass('on')
		$(".map-repfl").animate({
			"right":388,
			"width": "0"
		})
		$(".map_R").animate({
			"width": "100%"
		})
		deg += 360;
		document.querySelector(".css3guodu").style.transform = "rotate(" + deg + "deg)";
	} else {
		$(this).addClass('on')

		$(".map-repfl").animate({
			"right":0,
			"width": "389px"
		})
		$(".map_R").animate({
			"width": "8.1rem"
		})
		deg += 180;
		document.querySelector(".css3guodu").style.transform = "rotate(" + deg + "deg)";
	}
})


// 点击按钮显示隐藏城市列表
$(".zc").click(function(){
	$(".cityList").toggle()
	if($(".spani").hasClass("on")){
		$(".spani").removeClass("on")
		deg += 180;
		document.querySelector(".spani").style.transform = "rotate(" + deg + "deg)";
	}else{
		$(".spani").addClass("on")
		deg += 360;
		document.querySelector(".spani").style.transform = "rotate(" + deg + "deg)";
	}
})

$(".na").click(function(){
	$(".cityList").hide()
})


// 百度地图API功能
	

	$(".searchImg").click(function(){
		let Keyword=$(".Keyword").val()
		
		if(Keyword=="北京"){
			var map = new BMap.Map("dituContent");
			var point = new BMap.Point(116.413711,39.912454);
			map.centerAndZoom(point,11);
		}
		else if(Keyword=="重庆"){
			var map = new BMap.Map("dituContent");
			var point = new BMap.Point(106.557835,29.571142);
			map.centerAndZoom(point,11);
		}
		else if(Keyword=="贵阳"){
			var map = new BMap.Map("dituContent");
			var point = new BMap.Point(106.63526,26.65552);
			map.centerAndZoom(point,11);
		}
		
		else if(Keyword=="沙坪坝"){
			var map = new BMap.Map("dituContent");
			var point = new BMap.Point(106.463872,29.548908);
			map.centerAndZoom(point,11);
		}
		else if(Keyword=="菁英公寓"){
			var map = new BMap.Map("dituContent");
			var point = new BMap.Point(106.379948,29.60332);
			map.centerAndZoom(point,11);
		}
		else if(Keyword=="重庆足下软件学院"){
			var map = new BMap.Map("dituContent");
			var point = new BMap.Point(106.375969,29.606731);
			map.centerAndZoom(point,11);
		}

		else{
			alert("找寻不到")
		}	
	})

