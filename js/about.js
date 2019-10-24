

$(function () {
    // 轮播显示页数
    let banner = $(".haidilaoBanner .item");
    let bannerNumber = banner.length;
    $(".banner-left").click(function () {
        let index = $(".haidilaoBanner .active").index();
        console.log(index);
        let html = `<span class="margin-5-lr text-main-active ">${index}</span>/<span class="margin-5-lr">${bannerNumber}</span>`;
        html = $(".banner-number").html(html);
        if (index <= 0) {
            index = 4;
            let html = `<span class="margin-5-lr text-main-active ">${index}</span>/<span class="margin-5-lr">${bannerNumber}</span>`;
            html = $(".banner-number").html(html);
        }
    })
    $(".banner-right").click(function () {
        let index = $(".haidilaoBanner .active").index();
        let html = `<span class="margin-5-lr text-main-active ">${index + 2}</span>/<span class="margin-5-lr">${bannerNumber}</span>`;
        html = $(".banner-number").html(html);
        if (index >= 3) {
            console.log(111);
            index = 1;
            let html = `<span class="margin-5-lr text-main-active ">${index}</span>/<span class="margin-5-lr">${bannerNumber}</span>`;
            html = $(".banner-number").html(html);
        }
    })
    $('.carousel').carousel('pause');
    // tab切换
    let list = $(".about-haidilaoCulture-list");
    let listName = $(".about-haidilaoList");
    for (let i = 0; i < listName.length; i++) {
        // 给tabTitle对象添加index熟悉，属性值为下标
        listName[i].index = i;
        listName[i].onmouseenter = function () {
            let parent = this.parentNode.nextElementSibling;
            // 找到所有tabLists
            let tabLists = parent.children;
            for (let j = 0; j < listName.length; j++) {
                listName[j].classList.remove('tab');
                list[j].classList.remove('tab');
            }
            this.classList.add('tab');
            tabLists[this.index].classList.add('tab');
        }
    }
    // 视频点击按钮全屏播放
    let videoBig = $(".videoBig");
    let clickVideoBig = $(".about-video-mask");
    clickVideoBig.click(function () {
        videoBig.css("display", "block");

    });
    videoBig.click(function () {
        videoBig.css("display", "none");
    });
    // 历史与奖项切换
    $(".haidilaoHistory-time").click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(".about-haidilaoHistory-time").css("display","block");
        $(".about-haidilaoHistory-honor").css("display","none");
    });
    $(".haidilaoHistory-honor").click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(".about-haidilaoHistory-time").css("display","none");
        $(".about-haidilaoHistory-honor").css("display","block");
        // 海底捞荣耀 bottom
        let honorUlheigeht = parseInt($(".about-haidilaoHistory-honor ul").css("height"));
        let honorLists = $(".history-lists");
        for(let i=0;i<honorLists.length;i++){
            let honorLists = $(".history-lists");
            let honorHeight=parseInt($(".history-lists").eq(i).css("height"));
            let bottom = -(honorUlheigeht-honorHeight)+'px';
            $(".history-lists").eq(i).css("bottom",bottom);
        }
        // let honorLists = document.querySelectorAll('.history-lists')
        // console.log(honorLists)
        // for(let i=0;i<honorLists.length;i++){
        //     // console.log($('.history-lists').eq(i).css('height'))
        //     let ary = $('.history-lists').eq(i).css('height')
        //     console.log(ary)
            
        // }
        
    })





    $(".about-haidilaoHistory-honor .right").click(function(){
        // 获取当前的left值
        let left =$(".about-haidilaoHistory-honor ul").css("left");
        let leftLength = parseInt(left)-300 ;  
        $(".about-haidilaoHistory-honor ul").css("left",leftLength+'px');
        if(leftLength <= (-3600)){
            $(".about-haidilaoHistory-honor ul").css("left",-3900+'px');
        }          
    })
    $(".about-haidilaoHistory-honor .left").click(function(){
        // 获取当前的left值
        let left =$(".about-haidilaoHistory-honor ul").css("left");
        let leftLength = parseInt(left)+300 ;  
        $(".about-haidilaoHistory-honor ul").css("left",leftLength+'px');
        if(leftLength >= (-300)){
            $(".about-haidilaoHistory-honor ul").css("left",0+'px');
        }          
    })
    
    


    // 视频离开页面 暂停播放
    // document.addEventListener('webkitvisibilitychange', function () {
    //     let video = $("video");
    //     console.log(video);
    //     var isHidden = document.webkitVisibilityState;
    //     if (isHidden == 'hidden') {
    //         video.pause();
    //     } else {
    //         video.play();
    //     }
    // });
})