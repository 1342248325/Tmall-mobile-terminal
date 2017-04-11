/*
* @Author: gj
* @Date:   2017-04-01 11:20:01
* @Last Modified by:   gj
* @Last Modified time: 2017-04-01 17:05:25
*/

'use strict';
'use strict';


window.onload = function(){
	var designWidth = 375;

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		console.log(CW);
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style.fontSize=size;
	}
	fontSize();
	window.onresize = fontSize;
}