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
function clearFocus() {
	inputText.value = "";
	inputText.focus();
}

function judgeandcreate() {
	var eleNum = boxcon.childNodes.length;
	if(eleNum > 9) {
		alert("已超过10个元素，无法继续添加！");
	} else {
		var newbox = createNewBox();
		return newbox;
	}
}

function createNewBox() {

	var boxNum = inputText.value;
	if(boxNum) {
		if(isNaN(boxNum)) {
			alert("请输入数值！");
			clearFocus();
		} else {
			if(boxNum > 10 && boxNum < 100) {
				var newbox = document.createElement("div");
//				newbox.innerHTML = boxNum;
				
				newbox.className = "boxstyle";
				newbox.style.height=boxNum+"px";
				newbox.addEventListener("click", function() {
				this.parentNode.removeChild(this);
				});
			} else {
				alert("请输入10-100之间的数值！");
				clearFocus();
			}

		}
	} else {
		alert("请输入数值！");
		clearFocus();
	}

	return newbox;
}
leftInButton.addEventListener("click", function() {

	//有两个添加按钮，将新元素的创建集中到createNewBox函数中
	var newbox = judgeandcreate();
	if(newbox) {
		//初始队列为空，不存在firstchild
		if(boxcon.childNodes.length) {
			boxcon.insertBefore(newbox, boxcon.firstChild);
		} else {
			boxcon.appendChild(newbox);
		}

		//添加完毕后清空input，将光标focus到input便于进一步添加
		clearFocus();
	}
	//将从小到大排序后的box展示在页面
	showrank();

});
rightInButton.addEventListener("click", function() {

	var newbox = judgeandcreate();
	boxcon.appendChild(newbox);
	clearFocus();
	showrank();
});
leftOutButton.addEventListener("click", function() {
//	var s = boxcon.firstChild.innerHTML;
//	alert(s);
	boxcon.removeChild(boxcon.firstChild);
	inputText.focus();
	showrank();
});
rightOutButton.addEventListener("click", function() {
//	var s = boxcon.lastChild.innerHTML;
//	alert(s);
	boxcon.removeChild(boxcon.lastChild);
	inputText.focus();
	showrank();
});

function showrank(){
	var showcon=document.getElementById("showcon");
	//清除之前排序好的box
	showcon.removeChild(showcon.lastChild);
	rankcontainer=boxcon.cloneNode(true);
	//clonenode会复制所有属性和对应值，为了避免相同id需重新修改
	rankcontainer.id="rankcon";
	boxlist=rankcontainer.childNodes;
	//利用函数rankbox排序
	boxlist=rankbox(boxlist);
	showcon.appendChild(rankcontainer);
}
function rankbox(boxlist){
	//冒泡排序
	for (var i=0;i<boxlist.length-1;i++) {
		for (var j=0;j<boxlist.length-1-i;j++) {
			//注意获得的属性值为string，最好转换为int
			if(parseInt(boxlist[j].style.height)>parseInt(boxlist[j+1].style.height)){
				
				var temp=boxlist[j].style.height;
				boxlist[j].style.height=boxlist[j+1].style.height;
				boxlist[j+1].style.height=temp;
				
			}
			
			
		}
	}
	
	return boxlist;
//	alert(boxlist.length);
}
