var leftInButton = document.getElementById("leftIn");
var rightInButton = document.getElementById("rightIn");
var leftOutButton = document.getElementById("leftOut");
var rightOutButton = document.getElementById("rightOut");
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
	var inputArray=stringInput.split(/\r|，|,|、|\s/);
	var newnodelist=new Array();
	var pattern=/(\w|[\u4e00-\u9fa5])+/;
	if(stringInput) {
		
		inputArray.forEach(function(item,index,Array){
			if(pattern.test(item)){
				var newbox = document.createElement("div");
			newbox.innerHTML = item;
			newbox.className = "boxstyle";
			newbox.addEventListener("click", function() {
			this.parentNode.removeChild(this)});
			newnodelist.push(newbox);
			}
			
		})
			
	} else {
		alert("请输入内容！");
		inputText.value="";
	}
	
	return newnodelist;
//	return newbox;
}
leftInButton.addEventListener("click", function() {
	
//有两个添加按钮，将新元素的创建集中到createNewBox函数中
	
	var newnodelist = createNewBox();
	
//初始队列为空，不存在firstchild
	if(boxcon.childNodes.length) {
		newnodelist=newnodelist.reverse();
		newnodelist.forEach(function(item,index,Array){
			boxcon.insertBefore(item, boxcon.firstChild);
		})
		
	} else {
		newnodelist.forEach(function(item,index,Array){
			boxcon.appendChild(item);
		})
		
	}
	
//添加完毕后清空input，将光标focus到input便于进一步添加
	inputText.value="";
	inputText.focus();
});
rightInButton.addEventListener("click", function() {

	var newnodelist = createNewBox();
	newnodelist.forEach(function(item,index,Array){
			boxcon.appendChild(item);
		})
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

