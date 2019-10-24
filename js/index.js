var myVideo = document.querySelector(".video");
let country = $('.hdl-Country')
let countryName = $('.container-list .item')
let ct = $('.container-list .ct')
let cir4 = $('.cir4')

$('.video-btn').click(function() {
	$('.video-box').toggleClass('on')
	$('.video').toggleClass('on')
	myVideo.play();
	$('.video-btn').hide()
	myVideo.addEventListener('ended', function() {
		$('.video-btn').show()
	})

})
// 自动播放视频
paly()

function paly() {
	// 播放视频1s
	setInterval(function() {
		myVideo.play();
	}, 1000)
}

// 国家tab切换
for (let i = 0; i < countryName.length; i++) {

	countryName[i].onclick = function() {
		//切换国家 
		for (var j = 0; j < country.length; j++) {

			country[j].classList.remove('on')
		}
		country[i].classList.add('on')
		
		// 切换国家位置
		for (var j = 0; j < cir4.length; j++) {
		
			cir4[j].classList.remove('on')
		}
		cir4[i].classList.add('on')
	}
}

//li元素的宽（包括padding，margin，border）
			var liW = $('.container-list li').outerWidth(true)
			var len = $('.container-list li').length
			$('.container-list').css("width",liW*len)
			var flag = true
			$(".Nbtn").click(function(){
				if(flag){
					flag = false
					$('.container-list').find("li").eq(len-1).prependTo($('.container-list'))
					$('.container-list').css({"marginLeft":-liW}).delay(8).queue(function(){
						$('.container-list').animate({"marginLeft":0})
						flag = true
						$(this).dequeue();
					})
				}
			})
			
			$(".Pbtn").click(function(){
				if(flag){
					flag = false
					$('.container-list').animate({"marginLeft":-liW}).delay(8).queue(function(){
						$('.container-list').find("li").eq(0).appendTo($('.container-list'))
						$('.container-list').css({"marginLeft":0})
						flag = true
						$(this).dequeue();
					})
				}
			})


countryName.click(function() {
	$(this).addClass('on')
	$(this).siblings().removeClass('on')
})

// index界面效果
	$(function() {
		$('#hdl-carousel').fullpage({
			scrollingSpeed: 1000,
			navigation: true,
			navigationPosition: 'left',
			afterLoad: function(anchorLink, index) {
				yuan(index)
			},
			easing:'easeInQuart',
			loopHorizontal:true,
			slidesNavigation:true,
			 anchors: ['page1', 'page2', 'page3','page4','footer']
		});
		
		
		ani()
		function ani(){
			setInterval(function(){
				console.log('1秒调用一次')
				$('.hdl-lobster1').animate({
					left:'45%'
				},800)
				
				$('.hdl-center1').animate({
					top: '25%',
				},800)
				
				$('.hdl-young').animate({
					right:'15%'
				},800)
			},1000)
		}
		
		
	});
	
	
	function yuan(index) {
		if (index == 2) {
			$('.autoMain .circular01').animate({
				top: "-2.45rem"
			}, 300)
			$('.autoMain .circular02').animate({
				top: "50%"
			}, 600)
			$('.autoMain .circular03').animate({
				top: "50%"
			}, 900)
			$('.autoMain .circular04').css({
				"opacity": "1"
			}, 1100)
		} else {
			$('.autoMain .circular01').css({
				"top": "-12.4rem"
			})
			$('.autoMain .circular02').css({
				"top": "-26%"
			})
			$('.autoMain .circular03').css({
				"top": "-26%"
			})
			$('.autoMain .circular04').css({
				"opacity": "0"
			})
		}
		if(index == 4){
			$("#four-cirOne").animate({
				width: "12.4rem",
				height: "12.4rem",
			}, 2000)
			$("#four-cirTwo").animate({
				width: "9rem",
				height: "9rem",
			}, 2000)
			$("#four-cirThree").animate({
				width: "6rem",
				height: "6rem",
			}, 2000)
			$("#four-cirOne").animate({
				left:"3rem",
			}, 1200)
		}else{
			$("#four-cirOne").css({
				width: "3rem",
				height: "3rem",
			})
			$("#four-cirTwo").css({
				width: "3rem",
				height: "3rem",
			})
			$("#four-cirThree").css({
				width: "3rem",
				height: "3rem",
			})
			$("#four-cirOne").css({
				left:"50%"
			})
		}
		if(index == 3){
			$('#circular01').animate({
				width: "12rem",
				height: "12rem",
				opacity: "0",
			},2000)
			$('#circular02').animate({
				width: "10rem",
				height: "10rem",
			},2000)
			$('#circular03').animate({
				width: "8rem",
				height: "8rem",
			},2000)
			$('.hdl-list-item').eq(0).animate({
				"top":'0px'
			},800)
			$('.hdl-list-item').eq(1).animate({
				"top":'0px'
			},1000)
			$('.hdl-list-item').eq(2).animate({
				"top":'0px'
			},1200)
		}else{
			$('#circular01').css({
				width: "7rem",
				height: "7rem",
				opacity: "1",
			},2000)
			$('#circular02').animate({
				width: "6rem",
				height: "6rem",
				opacity: "0.5",
			},2000)
			$('#circular03').animate({
				width: "5rem",
				height: "5rem",
				opacity: "0.5",
			},2000)
			
			$('.hdl-list-item').css({
				"top":'-800px'
			})
		}
		
		if(index==1){
			console.log(8)
			$('.circular1').animate({
				opacity:"1"
			},1000)
			
			$('.hdl-lobster').animate({
				left:'45%'
			},800)
			
			$('.hdl-center1').animate({
				top: '25%',
			},800)
			
			$('.hdl-young').animate({
				right:'15%'
			},800)
			ani()
			function ani(){
				var timer = setInterval(function(){
					console.log('1秒调用一次')
					$('.hdl-lobster').animate({
						left:'45%'
					},800)
					
					$('.hdl-center1').animate({
						top: '25%',
					},800)
					
					$('.hdl-young').animate({
						right:'15%'
					},800)
				},1000)
			}
			
		}else{
			$('.circular1').css({
				opacity:"0"
			})
			$('.hdl-lobster').css({
				left:'-8rem'
			},800)
			
			$('.hdl-center').css({
				top: '-8rem',
			},800)
			
			$('.hdl-young').css({
				right:'-8rem'
			},800)
		}
		
	}
	
	// iframe 跳转
	$('[data-href]').click(function() {
		let url = $(this).data('href')
	
		$("#iframe").attr('src', url)
	})