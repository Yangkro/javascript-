### DOM 操纵CSS样式
通过DOM查询来获取相应的元素，然后更改元素的样式。
#### 通过style来读取修改元素样式
**注：通过style只能读取内联样式，无法读取样式表中的样式**
* 读取样式
    * 语法：<font color="purple">元素.style.样式名</font>。
    当读取的样式为有单位的样式时，例如高度跨度等，读取的是字符串，容易产生拼串操作
* 修改样式
   * 语法：<font color="purple">元素.style.样式名 = 样式值</font>。
   * <font color="red">通过JS修改的style属性有较高的优先级，往往会立即显示。（除了有!important)</font>。
```
<style>
	.box1 {
		height: 300px;
		width: 200px;
		background-color: pink;
		}
</style>
</head>
<body>
	<button id="btn1">点我换颜色</button>
	<div class="box1" id="box1">
		<p id="info">你好</p>
	</div>
	<script type="text/javascript">
		var box1 = document.getElementById("box1");
		var btn1 = document.getElementById("btn1");
		console.log(box1.style.backgroundColor);//不能输出pink因为该方法只能读取行内样式
		btn1.onclick = function(){
			box1.style.backgroundColor = "red";
			console.log(box1.style.backgroundColor);//red
		}
	</script>
</body>
```
#### 通过currentStyle来读取样式
**注：该方法读取的是元素当前正在显示的样式**。读取的元素没有宽度时显示auto。
* 语法：<font color="purple">元素.currentStyle.样式名</font>
* <font color="pink">只支持IE浏览器，其他浏览器都不支持</font>
```
console.log(box1.style.width);// 200px 只支持IE浏览器
```
#### 通过getComputedStyle()来获取样式
**注：该方法读取的是元素当前正在显示的样式**这个方法是window的方法，可以直接使用。
* 参数
    * 第一个参数：为要获取样式的元素
    * 第二个参数：可以传递一个伪元素，一般都传递null
 * 返回值
    该方法会返回一个对象，对象中封装了当前元素对应的样式，如果获取的样式没有设置，则会获取到真实值，而不是默认值。例如：读取的元素没有设置宽度时，显示当前宽度，不会显示auto。
* <font color="pink">该方法只兼容IE9及其以上版本的浏览器</font>
```
console.log(getComputedStyle(box1, null).width);//200px
```
##### 解决浏览器兼容性的获取CSS样式的方法
自己定义一个函数，来实现对浏览器版本的识别

    function getStyle(obj, name){
        if(window.getComputedStyle){
            //正常浏览器，具有getComputedStyle()方法
            return getComputedStyle(obj, null)[name];//获取对象属性名称为name的属性值
        }else {
            //解决IE8中没有getComputedStyle()方法的问题
            return obj.cuurentStyle[name];
        }
    }

##### 其他方法获取元素样式（只读，没有单位）
通过元素直接获取元素的样式，但是不可以通过该方法修改元素的的样式，因为该方法为元素的属性，所以是只读的。
* <font color="8b7500">clientWidth clientHeight 获取可见元素的高度和宽度</font>
    * 这两个属性可以直接获取元素的宽度和高度包含<font color="red">内容区和内边距</font>
    * 返回值不带px单位，返回的是一个数字，可以直接进行计算
* <font color="8b7500">offsetWidth offsetHeight 获取可见元素的高度和宽度</font>
    * 其他功能同上，但是唯一区别为<font color="red">获取的宽度高度包括内容区，内边距和边框</font>。
* <font color="8b7500">offsetParent 获取当前元素的定位父元素</font>
会获取当前元素<font color="red">最近</font>开启了定位的祖先元素
* <font color="8b7500">offsetLeft 获取当前元素的相对于定位父元素的的水平偏移量</font>
* <font color="8b7500">offsetTop 获取当前元素的相对于其定位父元素的垂直偏移量</font>
* <font color="8b7500">scrollWidth scrollHeight 获取元素的滚动宽度/高度</font>
由于子元素可能超出父元素，当`overflow:auto;`设置滚动条的时候，可以获取子元素的整个滚动区域的高度或者宽度
* <font color="8b7500">scrollLeft scrollTop 获取滚动条水平滚动或者垂直滚动的距离</font>。兼容IE8及其以下的浏览器，当使用高版本的浏览器时可以使用window.pageX和window.pageY来获取滚动条的滚动距离
    * <font color="orange">当满足：scrollHeight - scrollTop == clientHeight的时候，说明垂直滚动条滚动到底了</font>
    * <font color="orange">当满足：scrollWidth - scrollLeft == clientWidth的时候，说明水平滚动条滚动到最右边了</font>
##### 新增获取元素样式类的方法
* classList 返回一个元素的样式类名集合
    * 添加类名
    `element.classList.add("name")`<font color="red">不要.</font>
    * 删除类
    `element.classList.remove("name)`<font color="red">不要.</font>
    * 切换类
    有则删除目标类，无则添加目标类`element.classList.toggle("name")`
        ```
        <div class="one two" id="div"></div>
        <script>
            var div = document.getElementById("div");
            console.log(div.classList);//['one', 'two']
            console.log(div.classList[0]);//"one"
            //添加类名
            div.classList.add("three");
            //删除类
            div.classList.remove("one");
            //切换类名
            div.classList.toggle("bg");
        </script>

