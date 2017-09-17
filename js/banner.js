window.onload = function(){
	var banner = document.getElementById("top");
	var text = document.getElementById("text");
	var ham =document.getElementById("ham");
	var div = ham.getElementsByTagName("div");
	window.onscroll = function(){
		if(document.body.screenTop>0||document.documentElement.scrollTop>0){
			banner.className = "banner_strenthen";
			text.style.color = "black";
			div[0].style.backgroundColor ="black";
			div[1].style.backgroundColor ="black";
			div[2].style.backgroundColor ="black";
		}else{
			banner.className = "banner";
			text.style.color = "#FFFFFF";
			div[0].style.backgroundColor ="#FFFFFF";
			div[1].style.backgroundColor ="#FFFFFF";
			div[2].style.backgroundColor ="#FFFFFF";
		}
		
	}
	
}
