var slider=document.getElementById("slider");
var logo=document.getElementById("logo");
var button=document.getElementById("button");
var div=button.getElementsByTagName("div");
var nav=document.getElementById("nav");
var arrowTop=document.getElementById("arrowTop");
var downUp=document.getElementById("downUp");
var obama=document.getElementById("obama");
var river=document.getElementById("river");
var textImg1=document.getElementById("textImg1");
var textImg2=document.getElementById("textImg2");
var model=document.getElementById("model");
var heart=document.getElementById("heart");
var filo=document.getElementById("filo");
var textImg3=document.getElementById("textImg3");
var fish=document.getElementById("fish");
var aviator=document.getElementById("aviator");
var container=document.getElementById("container");
var btn=document.getElementById("btn");
var li=btn.getElementsByTagName("li");
var myLeft;var myRight;var prevNo=0;var currentNo=0;
var liLeft;var liRight,imgWordLeft,imgWordRight;
var clientH=document.documentElement.clientHeight;
var istop=true;
var timeTop=0;var timeUp=0;
window.onscroll=function(){
	var scrollHight=document.body.scrollTop;
	console.log(scrollHight);
	if(!istop){
		clearInterval(timeTop);
	}
	if(!istop){
		clearInterval(timeUp);
	}
	//导航条改变高度事件
	if(scrollHight>0){
		nav.style.transform="translateY(46px)";
		nav.style.backgroundColor="rgba(255,255,255,.7)";
		nav.style.transition="all .3s linear";
		logo.style.color="#000";
		div[0].style.backgroundColor="#000";
		div[1].style.backgroundColor="#000";
		div[2].style.backgroundColor="#000";
	}else{
		nav.style.transform="translateY(1px)";
		nav.style.backgroundColor="rgb(85,224,197)";
		logo.style.color="#fff";
		div[0].style.backgroundColor="#fff";
		div[1].style.backgroundColor="#fff";
		div[2].style.backgroundColor="#fff";
	}
	//图片出现事件
	if(scrollHight>500){
		obama.style.cssText="top:0px;transition:all .3s linear";
		river.style.cssText="top:0px;transition:all .3s linear";
		textImg1.style.cssText="top:0px;transition:all .3s linear";
	}
	if(scrollHight>950){
		textImg2.style.cssText="top:0px;transition:all .3s linear";
		model.style.cssText="top:0px;transition:all .3s linear";
		filo.style.cssText="top:0px;transition:all .3s linear";
		fish.style.cssText="top:0px;transition:all .3s linear";
	}
	if(scrollHight>1200){
		aviator.style.cssText="top:0px;transition:all .3s linear";
		textImg3.style.cssText="top:0px;transition:all .3s linear";
		heart.style.cssText="top:0px;transition:all .3s linear";
	}
	istop=false;
	//返回顶部点击事件
	arrowTop.onclick=function(){
		timeTop=setInterval(function(){
				//获取滚动条高度
			var scrollHight=document.body.scrollTop;
			var isdeepTop=Math.floor(-scrollHight/3);
				//点击时滚动条高度增加
			document.body.scrollTop=scrollHight+isdeepTop;
			istop=true;
				//当滚动条=0时，清除定时器
			if(scrollHight==0){
				clearInterval(timeTop);//清除定时器
			}
		},40);
	}
	//轮播图上的下箭头点击事件
	downUp.onclick=function(){
		timeUp=setInterval(function(){
			var scrollHight=document.body.scrollTop;
			var isdeepUp=Math.floor(scrollHight/3);
			document.body.scrollTop=scrollHight+isdeepUp;
			istop=true;
				//当滚动条>380时，清除定时器
			if(scrollHight>380){
				clearInterval(timeUp);//清除定时器
			}
		},40);
	}
}
//头部点击出现蓝色页面事件
var pageMove=document.getElementById("page");
button.onclick=function (){
	if(pageMove.style.left !='0px'){
		div[0].style.transform="rotate(45deg) translateY(3px)";
		div[1].style.display="none";
		div[2].style.transform="rotate(-45deg) translateY(-3px)";
		pageMove.style.left="0px";
		pageMove.style.transition="all .3s linear";
		document.documentElement.style.overflowY = 'hidden' ;
		logo.style.color="#fff";
		div[0].style.backgroundColor="#fff";
		div[1].style.backgroundColor="#fff";
		div[2].style.backgroundColor="#fff";

	}else{
		div[0].style.transform="rotate(0deg) translateY(0px)";
		div[2].style.transform="rotate(0deg) translateY(0px)";
		div[1].style.display="block";
		document.documentElement.style.overflowY = 'visible'; 
		pageMove.style.left="-100%";
		logo.style.color="#fff";
		div[0].style.backgroundColor="#fff";
		div[1].style.backgroundColor="#fff";
		div[2].style.backgroundColor="#fff";
		pageMove.style.transition="all .3s linear";
	}
}

//点击轮播
function sliderClick(pos,obj){
	clearInterval(x);
	currentNo=pos;
	myLeft=document.getElementById("slider"+prevNo);
	myRight=document.getElementById("slider"+currentNo);
	imgWordLeft=document.getElementById("imgWord"+prevNo);
	imgWordRight=document.getElementById("imgWord"+currentNo);
	liLeft=document.getElementById("bullet"+prevNo);
	liRight=document.getElementById("bullet"+currentNo);
	if(prevNo==currentNo){}
	else{
		//小圆点改变
		for(var i=0;i<li.length;i++){
			obj.style.cssText="width:6px;height:6px;border:2px solid #fff;background:none";
			if(li[i]!=obj){
				li[i].style.cssText="width:10px;height:10px;border:none;background:#fff";
			}
		}
		myLeft.style.cssText="left:-1349px;z-index:9;transition:all 1s linear";
		myRight.style.cssText="left:0px;z-index:6;transition:all .6s linear";
		btn.style.cssText="bottom:-32px;transition:all .3s linear";
		imgWordLeft.style.cssText="bottom:-260px;transition:all .3s linear";
		imgWordRight.style.cssText="bottom:-260px;transition:all .3s linear";
		setTimeout(function(){
			btn.style.cssText="bottom:32px;transition:all .3s linear";
			imgWordLeft.style.cssText="bottom:-260px;transition:all .3s linear";
			imgWordRight.style.cssText="bottom:70px;transition:all .3s linear";
			myLeft.style.left="1349px";
			myLeft.style.webkitTransition="";
			myRight.style.webkitTransition="all .7s linear";
		},1000)
		
	}prevNo=currentNo;
	 x = setInterval(lunbo,5000);

}

//自动轮播
function lunbo(){
	if(prevNo<2){
		currentNo+=1;
		//小圆点改变
		for(var j=1;j<=currentNo;j++){
			li[j].style.cssText="width:6px;height:6px;border:2px solid #fff;background:none";
			li[currentNo-1].style.cssText="width:10px;height:10px;border:none;background:#fff";
		}
	}else{
		currentNo=0;
		//小圆点改变
		for(var k=prevNo;k>0;k--){
			li[k].style.cssText="width:10px;height:10px;border:none;background:#fff";
			li[k-1].style.cssText="width:6px;height:6px;border:2px solid #fff;background:none";
		}
	}
	myLeft=document.getElementById("slider"+prevNo);
	myRight=document.getElementById("slider"+currentNo);
	imgWordLeft=document.getElementById("imgWord"+prevNo);
	imgWordRight=document.getElementById("imgWord"+currentNo);
	liLeft=document.getElementById("bullet"+prevNo);
	liRight=document.getElementById("bullet"+currentNo);
	myLeft.style.cssText="left:-1349px;z-index:9;transition:all 1s linear";
	myRight.style.cssText="left:0px;z-index:6;transition:all .6s linear";
	btn.style.cssText="bottom:-32px;transition:all .3s linear";
	imgWordLeft.style.cssText="bottom:-260px;transition:all .3s linear";
	imgWordRight.style.cssText="bottom:-260px;transition:all .3s linear";
	setTimeout(function(){
		btn.style.cssText="bottom:32px;transition:all .3s linear";
		imgWordLeft.style.cssText="bottom:-260px;transition:all .3s linear";
		imgWordRight.style.cssText="bottom:70px;transition:all .3s linear";
		myLeft.style.left="1349px";
		myLeft.style.webkitTransition="";
		myRight.style.webkitTransition="all .7s linear";
	},1000)
prevNo=currentNo;
}
var x = setInterval(lunbo,5000);