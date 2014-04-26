/*
By Chris Cates. Enjoy :)
http://boldly.chriscates.ca

MIT License 2014
*/
function boldlyMasterFn(selector, size){
	[].forEach.call(selector, function(el) {
		var color = el.style.color;
		el.style.fontWeight = "bold";
		
		var ts = "";
		for (var i = 1; i < size + 1; i++) {		
			ts = ts + "0px "+(i/2)+"px 0px "+color+" , 0px "+(-i/2)+"px 0px "+color;
			//If you change the width it often times looks too fat.
			//ts = ts + " , "+(i/2)+"px 0px 0px "+color+" , "+(-i/2)+"px 0px 0px "+color;
			if (i != size) {
				ts = ts + " , ";
			}
		}
		console.log(ts);
		el.style.textShadow = ts;
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