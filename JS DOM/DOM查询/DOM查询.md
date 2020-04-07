#### DOM查询
通过document对象调用获取元素节点。
##### getElementById()
通过标签的ID属性来获取<font color="red">一个</font>元素节点对象。
* <font color="	#8B7500">参数</font>
 参数id是大小写敏感的字符串，代表所要查找元素的唯一id
 * <font color="	#8B7500">返回值</font>
 返回的是id匹配的DOM Element对象。若在当前文档中没有找到，则返回null
 
 ```
<button type="button" id="btn">我是一个按钮</button>
<script type="text/javascript">
    var btn = document.getElementById("btn");
    console.log(btn);
    //打印返回的元素对象，可以更好地查看其中的属性和方法
    console.dir(btn);
    btn.onclick = function(){
        alert("我是按钮");
    }
</script>
 ```
##### getElementsByTagName()
通过标签名获取<font color="red">一组</font>元素节点对象（对象的集合），得到的内容会随着标签内容的变化发生变化（得到元素是动态的）。因为返回的是对象集合，因此操作里面的对象需要遍历集合（伪数组不是数组，不可以采用forEach()方法遍历）。**可以不再是document（文档节点）调用而可以是具体的元素节点调用**
* <font color="	#8B7500">参数</font>
参数时元素标签的名称
* <font color="	#8B7500">返回值</font>
如果查找到，返回的是元素对象的集合，用伪数组的形式存储，伪数组里面的每个元素是对象；如果没有查找到，则返回<font color="red">空的伪数组</font>
```
<ul>
	<li>昨夜雨疏风骤1</li>
	<li>昨夜雨疏风骤2</li>
	<li>昨夜雨疏风骤3</li>
	<li>昨夜雨疏风骤4</li>
</ul>
<ol>
	<li>浓醉不消残酒1</li>
	<li>浓醉不消残酒2</li>
	<li>浓醉不消残酒3</li>
	<li>浓醉不消残酒4</li>
</ol>
<script type="text/javascript">
	//通过标签名查询返回的是对象集合，以伪数组的形式储存，在文档中没有找到则返回一个空集合
	console.log(document.getElementsByTagName("div"))//[] 文档中没有div
	var getLi = document.getElementsByTagName("li");//这样会获取全部的li
	console.log(getLi);
        //[li, li, li, li, li, li, li, li] 具体操作元素得根据索引操作
	console.log( getLi[3]);//<li>昨夜雨疏风骤4</li>
	//如果需要对单个元素进行操作可以采用遍历或者根据索引获取元素,不是数组所以不可以采用forEach遍历
	// getLi.forEach(function(value, index){
	// 	console.log(value);
	// 	console(index);
	// })
	for(var i = 0; i < getLi.length; i++){
	    console.log(getLi[i]);
	}
</script>
```
* <font color="	#8B7500">指定父元素获取子元素</font>
语法：<font color="purple">element.getElementsByTagName("标签名")</font>。具体步骤如下：
    1. 查找取得父元素，也可以为父元素添加id，通过id获取父元素
        ```
		//获取ol中的li
		var getOl = document.getElementsByTagName("ol");
		console.log(getOl);//[ol] 集合中元素个数为1，长度为1
		console.log(getOl.li);//undefined 因为li不是对象ol的属性或者方法
        ```
    2. 通过父元素获得子元素，<font color="red">父元素必须为单个对象，必须指明具体是哪个元素对象</font>
        ```
		var getOlLi = getOl[0].getElementsByTagName("li");
		console.log(getOlLi);//[li, li, li, li]
        ```

##### getElementsByName()
通过name属性获取<font color="red">一组</font>元素节点对象
```
<input type="button" name="input" id="btn" value="我是一个按钮" />
<input type="text" name="input" value="请输入姓名">
<script type="text/javascript">
	//根据name属性进行查找
	var getInput = document.getElementsByName("input");
	console.log(getInput);
	for(var i = 0; i < getInput.length; i++){
	console.log(getInput[i]);
	}
</script>
```
##### 通过H5新增方法获取
* <font color="	#8B7500">getElementsByClassName("类名")</font>
根据类名返回元素对象集合**这是H5新增的方法，只兼容IE9以上版本**
    * 参数：直接填写类的名称
    * 返回值：返回调用该类的所有元素集合
    ```
	<div class="box">我是盒子1</div>
	<div class="box">我是盒子2</div>
	<p class="box">我是p标签，但是我调用了box</p>
    <ul class="nav">
		<li class="nav-li">应是绿肥红瘦1</li>
		<li class="nav-li">应是绿肥红瘦2</li>
		<li class="nav-li">应是绿肥红瘦3</li>
		<li class="nav-li">应是绿肥红瘦4</li>
	</ul>
    <script type="text/javascript">
        //类名选择器
        var getBox = document.getElementsByClassName("box");
        console.log(getBox[1]);//<div class="box">我是盒子2</div>
        console.log(getBox[2]);//<p class="box">我是p标签，但是我调用了box</p>
	</script>
    ```
* <font color="	#8B7500">document.querySelector("CSS选择器")</font>
根据指定选择器返回<font color="red">第一个元素对象</font>，参数为选择器，同CSS选择器符号。<font color="pink">可以兼容IE8以上版本浏览器</font>
    * 参数：类似于css选择器，需要加`.`、`#`等等
    * 返回值：调用指定选择器的<font color="red">第一个元素对象</font>
    ```
	//querySelector()类选择器，根据指定选择器返回第一个元素对象
	var getFirstBox = document.querySelector(".box");
	console.log(getFirstBox);//<div class="box">我是盒子1</div>
	var getFirstLi = document.querySelector(".nav");
	console.log(getFirstLi);//选中整个ul
	console.log(document.querySelector(".nav-li"));//<li class="nav-li">应是绿肥红瘦1</li>
    ```
* <font color="	#8B7500">document.querySelectorAll("CSS选择器")</font>
根据指定选择器返回调用该选择器的<font color="red">所有</font>元素对象，并以集合的形式返回。<font color="pink">兼容IE8以上版本浏览器</font>
    * 参数：类似于CSS选择器，需要加`.`、`#`等等
    * 返回值：调用指定选择器的<font color="red">所有</font>元素对象
    ```
    var getAllBox = document.querySelectorAll(".box");
    console.log(getAllBox);//[div.box, div.box, p.box]
	var getAllLi = document.querySelectorAll(".nav-li");
	console.log(getAllLi);
	console.log(getAllLi[0]);//<li class="nav-li">应是绿肥红瘦1</li>
    ```
* <font color="	#8B7500">特殊元素的获取方式（body，html）</font>
    * 获取body元素
        ```
        var getBody = document.body;//返回body元素对象
        ```
    * 获取html元素
        ```
        var getHtml = document.documentElement;//返回html元素对象
        ```
    * 获取所有元素
        ```
        var all = document.all;
        console.log(all);//如果显示undefined可能是个bug
        console.log(all.length);//显示当前文档中所有标签的个数
        console.log(typeof all);//undefined
        ```
##### DOM查询的属性
* <font color="	#8B7500">获取子节点</font>
    * childNodes 表示当前节点的所有子节点<font color="red">会获取包括文本节点在内的所有节点，包括标签中的空白都会当成节点，在IE8及其以下的版本中不会将空白文本当成子节点</font>
    * children 可以获取当前元素的所有<font color="red">子元素</font>，不包含空白文本。<font color="pink">不支持IE8以下的浏览器</font>
    * firstChild 表示当前节点的第一个子节点，包括空白文本
    * firstElementChild 表示获取当前元素的第一个font color="red">子元素</font>，不包含空白文本。<font color="pink">不支持IE8以下的浏览器</font>
    * lastChild 表示当前节点的最后一个字节点，同firstChild
    * lastElementChild,同firstElementChild
* <font color="	#8B7500">获取兄弟节点</font>
    * previousSibling 表示当前节点的前一个兄弟节点
    * previousElementSibling 表示当前节点的前一个兄弟元素
    * nestSibling 表示当前节点的后一个兄弟节点
    * nextElementSibling 表示当前节点的后一个兄弟节点
* <font color="	#8B7500">获取父节点</font>
    * parentNode 表示当前节点的父节点，是唯一的，不包括空白文档  
```
<ul id="ul1">
	<li>昨夜御风凋碧树1</li>
	<li id="ul1-li2">昨夜御风凋碧树2</li><li>昨夜御风凋碧树3</li>
	<li>昨夜御风凋碧树4</li>
</ul>
<script type="text/javascript">
	var ul1 = document.getElementById("ul1");
	console.log(ul1.childElementCount);//表示有4个子元素
	//获取当前元素的所有子元素，不包含空白文档节点，但是只兼容IE+
	console.log(ul1.children);//HTMLCollection(4) [li, li, li, li]
	//获取当前元素的子节点，会将空白当做文档子节点
	console.log(ul1.childNodes);//[text, li, text, li, text, li, text, li, text] 其中text为文档节点
	//获取当前元素节点的第一个子节点
	console.log(ul1.firstChild);//#text
	//获取当前元素节点的第一个子元素节点
	console.log(ul1.firstElementChild);//<li>昨夜御风凋碧树1</li>
	//获取当前元素节点的最后一个子节点
	console.log(ul1.lastChild);//#text
	//获取当前节点的最后一个子元素节点
	console.log(ul1.lastElementChild);//<li>昨夜御风凋碧树4</li>
	console.log("=====孩子====");
	var ul1Li2 = document.getElementById("ul1-li2");
	console.log(ul1Li2);
	//获取其父亲节点
	console.log(ul1Li2.parentNode);
	//获取其父亲元素，会忽视空白文档节点
	console.log(ul1Li2.parentElement);
	//获取当前节点的前一个兄弟节点
	console.log(ul1Li2.previousSibling);//#text 返回的是空白节点text
	//获取当前节点的前一个兄弟元素节点
	console.log(ul1Li2.previousElementSibling)//<li>昨夜御风凋碧树1</li>
	//获取当前元素的后一个兄弟节点
	console.log(ul1Li2.nextSibling)// 没有空格所以，其后一个兄弟节点为<li>昨夜御风凋碧树3</li>
	//获取当前元素的后一个兄弟元素节点
	console.log(ul1Li2.nextElementSibling)//<li>昨夜御风凋碧树3</li>
</script>
```
<font color="orange" size=4>注：所有的`xxxNode`在IE8以下版本中不会将空白当成子节点，高于IE8的会将空白当成子节点，返回类型是Node。所有`xxxElementxxx`都不会将空格读为子节点，但是只兼容IE9+,返回类型是HTMLElement</font>
##### 读取元素节点属性
通过DOM查询获取文档中的元素节点后，可以访问元素节点中的属性节点，如果是双标签可以访问文本节点
语法：<font color="purple">元素.属性</font>  
例如: `元素.id、元素.value、元素.name……`。但是class属性需要通过className来访问，语法为：<font color="purple">元素.className</font>  
访问元素中的文本节点，语法为: <font color="rpurple">`元素.innerHTML`</font>
