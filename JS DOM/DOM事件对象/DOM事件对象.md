### DOM事件对象
当事件的响应函数触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数，在事件对象中封装了当前事件的一切相关信息。比如：鼠标的当前坐标，键盘的哪个键被按下，鼠标滚动轮的方向。
#### onmousemove 鼠标移动事件
* 使用clientX获取当前可见窗口的X坐标，clientY来获取当前可见窗口的Y坐标
当滚动条滚动时，左上角的坐标始终为（0,0）
```
div[0].onmousemove = function(event){
    var x = event.clientX;
    var y = event.clientY;
    div[1].innerHTML = "X = "+x+" Y = "+y;
}
```
* <font color="pink">兼容性</font>
    此方法只兼容IE9及其以上的浏览器，由于IE8响应函数触发时不会传递对象，而是将事件对象作为window属性保存，所以解决兼容性就是将其转化为window的属性
```
if(!event){
   event = window.event;
}
//或者直接简写为 event = event||window.event
```
* 使用pageX和pageY来获取整个HTML页面的坐标
当滚动条滚动时，获取的坐标会增加滚动条的距离
    * <font color="pink">兼容性</font>
    这两个属性在IE9及其以上的浏览器中兼容性较好，但是不兼容IE8浏览器，兼容性问题解决方案如下
    ```
	window.onload = function(){
		var box1 = document.getElementById("box1");
		var showMessage = document.getElementById("showMessage");
		var body = document.body;
		//为文档绑定一个鼠标移动事件
		document.onmousemove = function(event){
		event = event||window.event;
		// var X = event.clientX;
		// var Y = event.clientY;
		//当滚动条滚动时，鼠标和box1之间会出现距离，所以采用pageX和pageY，但是不兼容IE8及其以下版本的浏览器
		// var X = event.pageX;
		// var Y = event.pageY;
		//解决兼容性，采用event.clientX+scrollLeft(视口坐标加滚地条移动坐标)，
		//但是Chrome认为滚动条是body的，而火狐等浏览器认为滚动条是HTML的
		// var X = event.clientX + (body.scrollLeft || document.documentElement.scrollLeft);
		// var Y = event.clientY + (body.scrollTop || document.documentElement.scrollTop);
		//综上兼容性写法
		var X = event.pageX ||(event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft));
		var Y = event.pageY||(event.clientY + ( document.body.scrollTop || document.documentElement.scrollTop));
		showMessage.innerHTML = "X = "+X+" Y = "+Y;
		box1.style.left = X+"px";
		box1.style.top = Y+"px";
			}
		};
    ```
* type返回当前事件的名称
#### 事件的冒泡
事件的冒泡指的是事件会<font color="red">向上</font>传导，当后代元素的事件被触发时，其祖先<font color="red">相同</font>的事件也会被触发。如果不希望事件冒泡，可以通过事件对象来取消冒泡。
* 事件冒泡的取消
兼容IE678使用`event.cancleBubble = true`。高版本浏览器使用event.stopPropagation()
谁的事件不需要向上传导，就给谁添加。
```
<style>
	.box1 {
		height: 200px;
		width: 200px;
		background-color: pink;
	}
	span{
		background-color: #ADFF2F;
	}
</style>
<script type="text/javascript">
	window.onload = function(){
		var body = document.body;
		body.onclick = function(){
			alert("我是body");
		}
		var div = document.getElementsByTagName("div")[0];
		div.onclick = function(){
			alert("我是div");
			// 当点击box1时，也会弹出“我是body”，这就是事件的冒泡
		}
		var span = document.getElementsByTagName("span")[0];
		span.onclick = function(event){
		//取消事件冒泡，点击后只会弹出“我是span”
		event.cancelBubble = true;
		alert("我是span");//当点击span时
		}
	};
</script>
</head>
<body>
	<div class="box1">我是box1 <span>我是span我是span我是span我是span</span></div>
</body>
```
#### 事件的委派
将事件统一绑定为元素的共同祖先元素，这样当后代元素上的事件被触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应来处理事件。
事件委派是利用了事件的冒泡特性，通过事件委派可以减少事件的绑定次数，提高程序的性能。
* event中的target来返回触发事件的对象
对祖先绑定事件后，祖先的任意子元素都可以响应绑定的事件。使用target来过滤掉不需要作出响应的子元素。<font color="red">与this不同，this返回的绑定事件对象，而target返回的是触发事件的对象</font>兼容性问题：<font color="pink">在IE8及其以下的浏览器中只能使用event.srcElement来返回触发事件的对象</font>
```
<script type="text/javascript">
	window.onload = function(){
		var ul = document.getElementsByClassName("ul")[0];
		//用以前的方法为a添加一个点击事件,会造成新添加的元素没有点击响应函数
		// var allA = document.getElementsByTagName("a");
		// for(var i = 0; i < allA.length; i++){
		// 	allA[i].onclick = function(){
		// 	    var text = this.innerText;
			    //var text = allA[i].innerText; 点击函数代码点击的时候触发，此时i=长度
		        //alert(text);
		    //}
		//}
	
		//采用事件委派的方式，向其父元素添加点击响应函数，再过滤
		ul.onclick = function(event) {
			event.target = event.target || event.srcElement;
			if(event.target.className == "link"){
				alert(event.target.innerHTML);
			}
		}
		//添加li和a
		btn.onclick = function(){
		var btn = document.getElementById("btn");
		var newLi = document.createElement("li");
		newLi.innerHTML = "<a href='javascript:;'class='link'我是新添加的li</a>";
		ul.appendChild(newLi);
		};
	};
</script>
</head>
<body>
	<button type="button" id="btn">点击我增加列表</button>
	<ul class="ul">
		<li><a href="#" class="link">我是li1</a></li>
		<li><a href="#" class="link">我是li2</a></li>
		<li><a href="#" class="link">我是li3</a></li>
		<li><a href="#" class="link">我是li4</a></li>
	</ul>
</body>
```
#### 事件的绑定
使用对象.事件 = 函数的形式绑定响应函数，它只能同时为多个元素的一个事件绑定一个响应函数，不能绑定多个，如果绑定了多个响应函数，则后面的会覆盖前面的。
* addEventListener()添加事件监听为元素绑定响应函数
可以为一个元素的相同事件同时绑定多个响应函数，这样当事件触发时，<font color="red">响应函数将会按照顺序执行</font>。
	* 参数：
	1.事件的字符串，不要on;
	2.回调函数，当事件触发时该函数会被调用执行；
	3.是否在捕获阶段触发事件，需要一个布尔值，一般都是false
	* <font color="pink">兼容性</font>：不兼容IE8及其以下的浏览器
* 在IE8中可以使用attachEvent()来绑定事件
这个方法也可以同时为一个事件绑定多个处理函数，不同的是<font color="red">后绑定先执行，执行顺序和addEventListener()相反</font>
	- 参数：
		1.事件的字符串，要on
		2.回调函数
	- <font color="pink">兼容性</font>：不兼容火狐
* <font color="orange">兼容性问题解决方案</font>
定义一个函数，用来为指定元素绑定响应函数。addEventListener()中的this是绑定事件的对象；attachEvent()中的this，是window，可以采用让浏览器调用匿名函数，在匿名函数里调用回调函数，再使用call(obj)，可以转换成obj调用，此时this指向obj。
	* 参数：
	1.obj 要绑定事件的对象
	2.eventStr 要绑定事件的字符串名称（不要on，需要的话后期再加）
	3.callback 回调函数，即事件的响应函数
	```
	function bind(obj, eventStr, callback){
		if(obj.addEventListener) {
			obj.addEvenListener(eventStr, callback, false);
		} 
		/*else{
			obj.attachEvent("on"+eventStr, callback);
		}*/
		else{
			//使用这种方法，可以使this指向事件绑定者obj
			obj.attachEvent("on"+eventStr, function(){
				//在匿名函数中调用回调函数
				callback.call(obj);
			});
		}
	}
	```
#### 事件的解除绑定
* 传统事件的注册解绑方式
直接将事件赋值为null`eventTarget.onclick = null`
* 方法监听注册解绑方式
	1. eventTarget.removeEventListener(evenStr, callback)
	可以直接写在回调函数中，当事件触发一次后就被销毁
	2. detachment(onevenStr, callback)只支持IE8及其以下
	也可以写在回调函数中，使函数调用一次就被消除
* 解除事件绑定的兼容性写法
```
function removeEventListener(obj, enentStr, callback){
	//判断当前浏览器是否支持removeEventListener方法
	if(obj.removeEventListener){
		obj.removeEventListener(eventStr, callback);
	}else if(obj.detachEvent){
		obj.detachEvent("on" + eventStr, callback)
	} else{
		obj['on' + eventStr] = null
	}
}
```
#### 事件的传播
微软公司认为事件是由内向外传播的，即当事件触发时，应该先触发当前元素上的操作，然后再向当前元素的祖先元素上传播，也就是说事件在冒泡的时候执行。网景公司认为事件应该是由内向外传播的，也就是说当前事件触发时，应该先触发当前元素的最外层的祖先元素事件，然后再向内传播给后代元素。 最后由W3C制定标准 
* W3C将事件分为三个阶段
	1. 捕获阶段
		- 在捕获阶段时从最外层的祖先元素开始，向里层的目标元素事件进行捕获，但是此时默认不会触发事件
	2. 目标阶段
		- 事件捕获到目标元素，捕获阶段结束，开始在目标元素上触发事件
	3. 冒泡阶段
		- 事件从当前目标元素向他的祖先元素传递，依次触发祖先元素上的事件
* 如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true。但是一般用不到
* <font color="pink">兼容性</font>：只兼容IE9及以上的浏览器，IE8及以下的浏览器中没有捕获阶段。
* JS代码只能执行捕获或者冒泡的其中一个阶段
* onclick和attachEent只能得到冒泡阶段 
* 有些时间是没有冒泡的，比如onblur、onfocus、onmouseenter、onmouseleave等
#### 鼠标事件
* 鼠标按下onmousedown
可以定义当鼠标按下时发生的事件
* 鼠标移动事件 onmousemove
可以定义当鼠标移动时发生的事件
* 鼠标弹起 onmouseup
定义当鼠标按下弹起时触发的事件
**注：具体事例练习请参考 事件对象练习——拖拽**
* 鼠标滚轮事件	onmousewheel
会在滚轮滚动时触发事件，<font color="pink">不兼容火狐浏览器</font>。在火狐中需要使用DOMMouseScroll来绑定滚动事件，<font color="red">注意该事件需要通过addEventListener()或者attachEvent()函数来绑定事件</font>
	* event.wheelDelta 获取滚轮滚动的方向
	向上滚动为正值，向下滚动为负值（不同的浏览器的数值不一样，但是值得大小不重要，只看正负），<font color="pink">火狐不支持，undefined。在火狐中使用event.detail 来获取滚动的方向，**向上滚动为-3，向下滚动为3**</font>
	* 取消页面滚动条随之滚动 
	当页面有滚动条时，如果滚动滚动轮，滚动条会随之滚动。这是浏览器的默认行为，如果不希望发生，则可以取消该默认行为。
		* return false 取消默认行为。**由于火狐是采用bind函数绑定，所以此方法无效**
		* event.preventDefault() 取消事件的默认行为<font color="pink">不支持IE8</font> 
		```
		event.preventDefault && event.preventDefault();
		//表示有就直接使用，没有就不使用
		```
* contextmenu显示右键菜单
	```
	<h2>一个人的一生应该是这样度过的：当他回首往事的时候，他不会因为虚度年华而悔恨，也不会因为碌碌无为而羞耻</h2>
	<script type="text/javascript">
		var text= document.querySelector("h2");
		text.addEventListener("contextmenu", function(event){
			event.preventDefault();
			alert("不可以复制哦")
		},false)
	</script>
* selectstart 选中文字
可以阻止默认行为实现无法选中文字
	```
**示例：滚轮改变方块大小.html**
#### 键盘事件
键盘事件一般会绑定给一些可以获取到焦点的对象（表单）或者是document
* onkeydown 按键被按下
当按键被按着不松开的时候，事件会连续触发，但是第一次和第二次之间的间隔会长一点，其他的都很快。
	* 在文本框中输入内容，输入onkeydown的默认行为，如果取消后默认行为，则输入的内容不会出现在文本框中。
* onkeyup 按键松开
不会连续触发，只会触发一次。<font color="red">keyup事件触发时，文字已经落入文本框中</font>
* keyCode和特殊按键属性 
可以通过keyCode来获取被按下按键的编码。altKey、ctrlKey、shiftKey可以用来判断这些按键是否被按下（返回Boolean值），配合keycode来实现判断快捷键的使用。
* keydown和keypress在文本框中的特点
**他们两个事件触发的时候，文字还没有落入文本框中**

