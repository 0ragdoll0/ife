var leftInButton=document.getElementById("leftIn");
var rightInButton=document.getElementById("rightIn");
var leftOutButton=document.getElementById("leftOut");
var rightOutButton=document.getElementById("rightOut");
var boxcon=document.getElementById("boxcontainer");
for (var i=0;i<boxcon.childNodes.length;i++) {
	if(boxcon.childNodes[i].nodeType!==1){
		boxcon.removeChild(boxcon.childNodes[i]);
	}
}
leftInButton.addEventListener("click",function(){

	var boxNum=document.getElementById("boxNum").value;
	
	if(!boxNum){
		alert("请输入数值！");
	} else{
		var newbox=document.createElement("div");
		newbox.innerHTML=boxNum;
		newbox.className="boxstyle";
//		newbox.style.background="red";
//		newbox.style.display="inline-block";
//		newbox.style.width="20px";
//		newbox.style.color="white";
		if(boxcon.childNodes.length){
			boxcon.insertBefore(newbox,boxcon.firstChild);
		} else{
			boxcon.appendChild(newbox);
		}
		newbox.addEventListener("click",function(){
			this.parentNode.removeChild(this);
		})
		console.log(boxcon.childNodes.length);
		
	}
});
rightInButton.addEventListener("click",function(){

	var boxNum=document.getElementById("boxNum").value;
	if(!boxNum){
		alert("请输入数值！");
	} else{
		var newbox=document.createElement("div");
		newbox.innerHTML=boxNum;
		newbox.className="boxstyle";
		boxcon.appendChild(newbox);
		
	}
	newbox.addEventListener("click",function(){
			this.parentNode.removeChild(this);
		})
});
leftOutButton.addEventListener("click",function(){
	var s=boxcon.firstChild.innerHTML;
	alert(s);
	boxcon.removeChild(boxcon.firstChild);
});
rightOutButton.addEventListener("click",function(){
	var s=boxcon.lastChild.innerHTML;
	alert(s);
	boxcon.removeChild(boxcon.lastChild);
});