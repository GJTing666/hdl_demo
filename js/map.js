//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(80.698389,52.422523);//定义一个中心点坐标
        map.centerAndZoom(point,5);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT,type:BMAP_NAVIGATION_CONTROL_ZOOM});
	map.addControl(ctrl_nav);
                }
    
    //标注点数组
   var markerArr = [{title:"",content:"我的备注",point:"116.388459|40.09047",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ,{title:"",content:"我的备注",point:"94.974005|36.851553",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ,{title:"",content:"我的备注",point:"91.220957|31.723857",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ,{title:"",content:"我的备注",point:"88.571746|41.929868",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ,{title:"",content:"我的备注",point:"84.59793|49.730637",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ,{title:"",content:"我的备注",point:"101.891389|31.092679",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ,{title:"",content:"我的备注",point:"106.453918|47.436341",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ,{title:"",content:"我的备注",point:"104.982135|37.908615",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ,{title:"",content:"我的备注",point:"97.108092|31.345664",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ,{title:"",content:"我的备注",point:"100.125248|34.388254",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
  	 ];
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
       var icon = new BMap.Icon("http://api.map.baidu.com/lbsapi/creatmap/images/us_cursor.gif", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
       return icon;
   }
    
initMap();//创建和初始化地图