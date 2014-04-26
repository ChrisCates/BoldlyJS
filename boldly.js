/*
By Chris Cates. Enjoy :)
http://boldly.chriscates.ca

MIT License 2014
*/
function boldlyMasterFn(selector, size){
	[].forEach.call(selector, function(el) {
		var color = el.style.color;
		el.style.fontWeight = "bold";
		var pos1 = size/2;
		var pos2 = -(size/2);
		
		el.style.textShadow = "0px "+(pos1)+"px 0px "+color+", 0px "+(pos2)+"px 0px "+color;
	});
}

//The natively supported boldly tags.
//You can add your own tags if you'd like too!
var b1 = document.querySelectorAll("b1");
var b2 = document.querySelectorAll("b2");
var b3 = document.querySelectorAll("b3");
var b4 = document.querySelectorAll("b4");
var b5 = document.querySelectorAll("b5");

boldlyMasterFn(b1, 1);
boldlyMasterFn(b2, 2);
boldlyMasterFn(b3, 3);
boldlyMasterFn(b4, 4);
boldlyMasterFn(b5, 5);