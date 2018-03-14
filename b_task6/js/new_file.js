var leftInButton = document.getElementById("leftIn");
var rightInButton = document.getElementById("rightIn");
var leftOutButton = document.getElementById("leftOut");
var rightOutButton = document.getElementById("rightOut");
var queryBtn = document.getElementById("queryBtn");
var boxcon = document.getElementById("boxcontainer");
var inputText = document.getElementById("stringInput");
//删除boxcon中空格
//for (var i=0;i<boxcon.childNodes.length;i++) {
//	if(boxcon.childNodes[i].nodeType!==1){
//		boxcon.removeChild(boxcon.childNodes[i]);
//	}
//}
function createNewBox() {

	var stringInput = inputText.value;
	//将输入的字符串用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号隔开，成为一个数组
	var inputArray = stringInput.split(/\r|，|,|、|\s/);

	//新建一个数组用于存放格式为数字、中文、字母的字符串
	var newnodelist = new Array();
	var pattern = /(\w|[\u4e00-\u9fa5])+/;
	if(stringInput) {
		
		//判断数组中每个字符串是否格式为数字、中文、字母。如果是，将其push到newnodelist中
		inputArray.forEach(function(item, index, Array) {
			
			//判断数组中每个字符串是否格式为数字、中文、字母
			if(pattern.test(item)) {
				
				//为格式为数字、中文、字母的字符串创建新的元素节点，并将其push到newnodelist中
				var newbox = document.createElement("div");
				newbox.innerHTML = item;
				newbox.className = "boxstyle";
				newbox.addEventListener("click", function() {
					this.parentNode.removeChild(this)
				});
				newnodelist.push(newbox);
			}

		})

	} else {
		alert("请输入内容！");
		inputText.value = "";
	}

	return newnodelist;
	//	return newbox;
}
leftInButton.addEventListener("click", function() {

	//有两个添加按钮，将新元素的创建集中到createNewBox函数中

	var newnodelist = createNewBox();

	//初始队列为空，不存在firstchild
	if(boxcon.childNodes.length) {
		
		//为了显示顺序与textarea中显示顺序一致，将数组reverse一下
		newnodelist = newnodelist.reverse();
		newnodelist.forEach(function(item, index, Array) {
			boxcon.insertBefore(item, boxcon.firstChild);
		})

	} else {
		newnodelist.forEach(function(item, index, Array) {
			boxcon.appendChild(item);
		})

	}

	//添加完毕后清空input，将光标focus到input便于进一步添加
	inputText.value = "";
	inputText.focus();
});
rightInButton.addEventListener("click", function() {

	var newnodelist = createNewBox();
	newnodelist.forEach(function(item, index, Array) {
		boxcon.appendChild(item);
	})
	inputText.value = "";
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

queryBtn.addEventListener("click", function() {
	
	//将输入字符串利用eval函数转换为正则表达式
	var querystr = '/' + document.getElementById("query").value + '/g';
	var pattern1 = eval(querystr);
	var nodelistnow = boxcon.childNodes;
	
	//清除之前元素节点的border样式
	for(var j = 0; j < nodelistnow.length; j++) {

		nodelistnow[j].style.border = "none";

	}
	
	//如果模糊匹配成功，将其元素节点的border突出以示意
	for(var i = 0; i < nodelistnow.length; i++) {

		var matches = nodelistnow[i].innerHTML.match(pattern1);
		//      alert(matches);
		if(matches) {
			nodelistnow[i].style.border = "solid 2px green";
		}

	}
});