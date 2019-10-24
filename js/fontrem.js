// 根节点font-size
fontSize()
window.onresize = function() {
	fontSize()
}

function fontSize() {
	// 规定屏幕大小768  HTML字体大小100px  方便计算
	// 盒子的宽度/字体大小 = 750/100
	let width = document.documentElement.clientWidth * 2;
	width = width > 750 ? 750 : width;
	fontsize = width / 750 * 100;
	document.querySelector('html').style['font-size'] = fontsize + 'px';
}
