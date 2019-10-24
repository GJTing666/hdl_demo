// 文档加载完成
// 地址
let api = 'http://192.168.97.220:3000';
$(function () {
  // 新闻
  $.ajax({
    url: api + '/newsdown',
    type: 'get',
    dataType: 'json',
    success: function (res) {
      if (res.status == 200) {
        res.api = api;
        let obj = res;
        let html = '';
        let meitiHtml = '';
        let baoutMediaHtml = '';
        for (let item of obj.data) {
          html += `<div class="news-success-title">
                <span class="mysqlId" style="display:none">${item.id}</span>
                <span class="title-time">${item.time.substring(0, 10)}</span>
                <span class="title-menu">${item.title}</span>
                <span class="title-img"><img src="../img/about/${item.img}"></span>
                <span class="title-content">${item.content}</span>
                <span class="title-state undoNews">撤销</span>
                </div>`;
          meitiHtml += `<li class="clearfix  margin-40-t">
                    <div class="about-meida-img fl">
                    <a href="about.sixth.html"><img src="../img/about/${item.img}"></a>
                    </div>
                    <div class="about-meida-content fr">
                        <div class="title clearfix">
                            <span class="font-24 text-gary fl">${item.title}</span>
                            <span class="fr font-18 text-gary">${item.time.substring(0, 10)}</span>
                        </div>
                        <div class="content font-16 text-graylight line-32 padding-15-top  clearfix">
                        ${item.content}
                        </div>
                    </div>
                    </li>`;
          baoutMediaHtml += `<li class="baoutMedia-content fl clearfix">
          <div class="fl left">
            <p class="month font-20 text-gary">${item.time.substring(5, 10)}</p>
            <p class="year font-14 text-graylight">${item.time.substring(0, 4)}年</p>
          </div>
          <div class="fr right">
            <a>
              <p class="title font-20 text-graylight text-left">${item.title}</p>
            </a>
            <p class="content-text font-16 text-graylight text-left">
            ${item.content}
            </p>
            <a href="about.sixth.html">
              <div class="btn-white margin-20-t">查看详情<span class="glyphicon glyphicon-arrow-right"></span></div>
            </a>
          </div>
          </li>`;
          haidilaoNewsHtml = `<h1 class="font-w text-gary padding-40-tb">${item.title}</h1>
          <p class="text-gary font-16 margin-40-b">发布时间：${item.time.substring(0, 10)}   ${item.time.substring(11, 19)}</p>
          <div>
              <p class="text-gary line-34 font-16 text-left" id="newsContent" style="text-indent:0.2rem">
              ${item.content}
              </p>
              <img src="../img/about/${item.img}">
              <p class="text-gary font-16 text-right margin-40-t">海底捞国际控股有限公司</p>
              <p  class="text-gary font-16 text-right margin-40-b">${item.time.substring(0, 10)}</p>
          </div>`
        }
        $(".news-content-lists").html(html);
        $(".meiti").html(meitiHtml);
        $(".baoutMedia").html(baoutMediaHtml);
        $(".haidilaoNews").html(haidilaoNewsHtml);
        //撤销新闻
        $(".undoNews").click(function () {
          // 获取 
          let newId = $(this).siblings('.mysqlId').html();
          $.ajax({
            url:api+'/undoNews',
            type:'post',
            data:{
              id:newId
            },
            dataType:'json',
            success:function(res){
              if(res.status == 200){
                alert('撤销成功');
                location.reload();
              }else{
                alert('撤销失败，请重试')
              }
            }
          })
        })
      }
    }
  })
  //提交新闻到后台
  $(".fabu").click(function () {
    // 必须
    let form = document.querySelector(".form-add");
    // 将from表单中的  赋值给fromdata
    var formData = new FormData(form);
    $.ajax({
      url: api + '/newsup',
      type: 'post',
      data: formData,
      dataType: 'json',
      // 将文件格式改为json格式
      contentType: false,
      // 限定文件数据传送格式
      processData: false,
      success: function (res) {
        if (res.status == 200) {
          alert('添加成功')
          $('.modal').modal('hide');
          location.reload();
        } else {
          alert("提交失败")
        }
      }
    })
  })


  // 添加食物菜单到数据库、
  $('.pushFood').click(function () {
    let form = document.querySelector(".form-addFood");
    // 将from表单中的  赋值给fromdata
    var formData = new FormData(form);
    $.ajax({
      url: api + "/pushfood",
      type: "post",
      data: formData,
      dataType: "json",
      // 将文件格式改为json格式
      contentType: false,
      // 限定文件数据传送格式
      processData: false,
      success(res) {
        if (res.status == 200) {
          alert('添加成功')
          $('.modal').modal('hide');
          location.reload();
        } else {
          $.tooltip({
            type: "error",
            content: res.message
          })
        }
      }
    })
  })

  // 从后台加载商品并渲染到html界面
  $.ajax({
    url: api + "/pullfood",
    type: "post",
    dataType: "json",
    success(res) {
      if (res.status == 200) {
        // console.log(api)
        // console.log(res.data)
        let foodHTML = '', rouLeiHTML = '', haiXianHTML = '', wanHuaHTML = '',
          shuCaiHTML = '', mianZhiPinHTML = '', junGuHTML = '', tianPinHTML = '', yinLiaoHTML = '';
        for (let item of res.data) {
          if (item.class == "肉类") {
            rouLeiHTML += `<li class="css3Animation guodiList-cont">
                    <div class="guodi-inside css3Animation">
                      <p>
                        <a><img src="../img/upload/${item.img}" border="0"></a>
                      </p>
                      <p class="pawpawItem-white">${item.name}</p>
                    </div>
                    <div class="guodi-outside css3Animation">
                      <div class="gdOutside-box">
                        <div class="gdOutside-cont">
                          <p class="gdOutside-title text-center">${item.name}</p>
                          <p class="gdOutside-txt">${item.content}</p>
                        </div>
                      </div>
                    </div>
                  </li>`
          }
          if (item.class == "河鲜海鲜") {
            haiXianHTML += `<li class="css3Animation guodiList-cont">
                              <div class="guodi-inside css3Animation">
                                <p>
                                  <a><img src="../img/upload/${item.img}" border="0"></a>
                                </p>
                                <p class="pawpawItem-white">${item.name}</p>
                              </div>
                              <div class="guodi-outside css3Animation">
                                <div class="gdOutside-box">
                                  <div class="gdOutside-cont">
                                    <p class="gdOutside-title text-center">${item.name}</p>
                                    <p class="gdOutside-txt">${item.content}</p>
                                  </div>
                                </div>
                              </div>
                            </li>`
          }
          if (item.class == "丸滑类") {
            wanHuaHTML += `<li class="css3Animation guodiList-cont">
                              <div class="guodi-inside css3Animation">
                                <p>
                                  <a><img src="../img/upload/${item.img}" border="0"></a>
                                </p>
                                <p class="pawpawItem-white">${item.name}</p>
                              </div>
                              <div class="guodi-outside css3Animation">
                                <div class="gdOutside-box">
                                  <div class="gdOutside-cont">
                                    <p class="gdOutside-title text-center">${item.name}</p>
                                    <p class="gdOutside-txt">${item.content}</p>
                                  </div>
                                </div>
                              </div>
                            </li>`
          }
          if (item.class == "蔬菜类") {
            shuCaiHTML += `<li class="css3Animation guodiList-cont">
                            <div class="guodi-inside css3Animation">
                              <p>
                                <a><img src="../img/upload/${item.img}" border="0"></a>
                              </p>
                              <p class="pawpawItem-white">${item.name}</p>
                            </div>
                            <div class="guodi-outside css3Animation">
                              <div class="gdOutside-box">
                                <div class="gdOutside-cont">
                                  <p class="gdOutside-title text-center">${item.name}</p>
                                  <p class="gdOutside-txt">${item.content}</p>
                                </div>
                              </div>
                            </div>
                          </li>`
          }
          if (item.class == "豆面制品类") {
            mianZhiPinHTML += `<li class="css3Animation guodiList-cont">
                                <div class="guodi-inside css3Animation">
                                  <p>
                                    <a><img src="../img/upload/${item.img}" border="0"></a>
                                  </p>
                                  <p class="pawpawItem-white">${item.name}</p>
                                </div>
                                <div class="guodi-outside css3Animation">
                                  <div class="gdOutside-box">
                                    <div class="gdOutside-cont">
                                      <p class="gdOutside-title text-center">${item.name}</p>
                                      <p class="gdOutside-txt">${item.content}</p>
                                    </div>
                                  </div>
                                </div>
                              </li>`
          }
          if (item.class == "菌菇类") {
            junGuHTML += `<li class="css3Animation guodiList-cont">
                            <div class="guodi-inside css3Animation">
                              <p>
                                <a><img src="../img/upload/${item.img}" border="0"></a>
                              </p>
                              <p class="pawpawItem-white">${item.name}</p>
                            </div>
                            <div class="guodi-outside css3Animation">
                              <div class="gdOutside-box">
                                <div class="gdOutside-cont">
                                  <p class="gdOutside-title text-center">${item.name}</p>
                                  <p class="gdOutside-txt">${item.content}</p>
                                </div>
                              </div>
                            </div>
                          </li>`
          }
          if (item.class == "小吃甜品") {
            tianPinHTML += `<li class="css3Animation guodiList-cont">
                              <div class="guodi-inside css3Animation">
                                <p>
                                  <a><img src="../img/upload/${item.img}" border="0"></a>
                                </p>
                                <p class="pawpawItem-white">${item.name}</p>
                              </div>
                              <div class="guodi-outside css3Animation">
                                <div class="gdOutside-box">
                                  <div class="gdOutside-cont">
                                    <p class="gdOutside-title text-center">${item.name}</p>
                                    <p class="gdOutside-txt">${item.content}</p>
                                  </div>
                                </div>
                              </div>
                            </li>`
          }
          if (item.class == "特色饮品") {
            yinLiaoHTML += `<li class="css3Animation guodiList-cont">
                              <div class="guodi-inside css3Animation">
                                <p>
                                  <a><img src="../img/upload/${item.img}" border="0"></a>
                                </p>
                                <p class="pawpawItem-white">${item.name}</p>
                              </div>
                              <div class="guodi-outside css3Animation">
                                <div class="gdOutside-box">
                                  <div class="gdOutside-cont">
                                    <p class="gdOutside-title text-center">${item.name}</p>
                                    <p class="gdOutside-txt">${item.content}</p>
                                  </div>
                                </div>
                              </div>
                            </li>`
          }
          foodHTML += `<div class="news-success-title">
                      <span class="title-menu">${item.name}</span>
                      <span class="title-menu">${item.class}</span>
                      <span class="title-img"><img src="../img/upload/${item.img}"></span>
                      <span class="title-content">${item.content}</span>
                      <span class="title-state">撤销</span>
                      </div>`

        }

        $('.foods-content-lists').html(foodHTML);
        $('.rouLei').html(rouLeiHTML);
        $('.rouLei .guodiList-cont').eq(5).nextAll().css({
          "display": "none"
        });
        $('.haiXian').html(haiXianHTML);
        $('.haiXian .guodiList-cont').eq(5).nextAll().css({
          "display": "none"
        });
        $('.wanHua').html(wanHuaHTML);
        $('.wanHua .guodiList-cont').eq(5).nextAll().css({
          "display": "none"
        });
        $('.shuCai').html(shuCaiHTML);
        $('.shuCai .guodiList-cont').eq(5).nextAll().css({
          "display": "none"
        });
        $('.mianZhiPin').html(mianZhiPinHTML);
        $('.mianZhiPin .guodiList-cont').eq(5).nextAll().css({
          "display": "none"
        });
        $('.junGu').html(junGuHTML);
        $('.junGu .guodiList-cont').eq(5).nextAll().css({
          "display": "none"
        });
        $('.tianPin').html(tianPinHTML);
        $('.routianPinLei .guodiList-cont').eq(5).nextAll().css({
          "display": "none"
        });
      }
    }
  })
})


