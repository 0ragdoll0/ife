var leftInButton = document.getElementById("leftIn");
var rightInButton = document.getElementById("rightIn");
var leftOutButton = document.getElementById("leftOut");
var rightOutButton = document.getElementById("rightOut");
var boxcon = document.getElementById("boxcontainer");
var inputText = document.getElementById("boxNum");
//删除boxcon中空格
//for (var i=0;i<boxcon.childNodes.length;i++) {
//	if(boxcon.childNodes[i].nodeType!==1){
//		boxcon.removeChild(boxcon.childNodes[i]);
//	}
//}
function createNewBox() {
	
	var boxNum = inputText.value;
	if(boxNum) {
		if(isNaN(boxNum)) {
			alert("请输入数值！");
			inputText.value="";
		} else {
			var newbox = document.createElement("div");
			newbox.innerHTML = boxNum;
			newbox.className = "boxstyle";
			newbox.addEventListener("click", function() {
				this.parentNode.removeChild(this);
			});
		}
	} else {
		alert("请输入数值！");
		inputText.value="";
	}

	return newbox;
}
leftInButton.addEventListener("click", function() {
	
//有两个添加按钮，将新元素的创建集中到createNewBox函数中
	var newbox = createNewBox();
	
//初始队列为空，不存在firstchild
	if(boxcon.childNodes.length) {
		boxcon.insertBefore(newbox, boxcon.firstChild);
	} else {
		boxcon.appendChild(newbox);
	}
	
//添加完毕后清空input，将光标focus到input便于进一步添加
	inputText.value="";
	inputText.focus();
});
rightInButton.addEventListener("click", function() {

	var newbox = createNewBox();
	boxcon.appendChild(newbox);
	inputText.value="";
	inputText.focus();
});
leftOutButton.addEventListener("click", function() {
	var s = boxcon.firstChild.innerHTML;
	alert(s);
	boxcon.removeChild(boxcon.firstChild);
	inputText.focus();
});
rightOutButton.addEventListener("click", function() {
	var s = boxcon.lastChild.innerHTML;
	alert(s);
	boxcon.removeChild(boxcon.lastChild);
	inputText.focus();
});