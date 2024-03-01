var menu = document.querySelector(".menu");
var page = document.querySelector(".mobileviewer");
var close = document.querySelector(".icon");
var main = document.querySelector(".main");


menu.addEventListener("click",function(){
	page.style.display = "block";

})
close.addEventListener("click",function(){
	page.style.display = "none";
	
})