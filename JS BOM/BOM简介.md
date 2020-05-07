### BOM
BOM（Browser Object Mode）浏览器对象模型。BOM可以使用JS来操作浏览器
#### BOM对象
这些对象都是作为window的对象属性来保存的，可以通过window对象来使用，因为是全局对象也可以直接使用。
##### Window
代表整个浏览器的窗口，同时window也是网页中的全局对象。window对象常见的事件
* onDOMContentLoaded
事件触发时间为，仅当DOM加载完成，不包括样式表，图片，flash等等。如果当页面的图片比较多是，从用户访问到onload需要时间过长，交互效果难以实现，影响体验，onDOMContentLoad可以解决此问题。<font color="pink">只兼容IE9以上的浏览器</font>
* onresize
window.onresize 只要窗口的大小发生改变就能出发该事件。
* innerWidth获取window当前屏幕的宽度，可以利用这个来实现响应式布局
* window定时器
##### Navigator
代表的是浏览器额信息，通过该对象可以识别不同的浏览器
##### Location
代表浏览器的地址信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面。<font color="red">Location对象时window对象的一部分，可以通过window.Location属性对其进行访问</font>。支持所有浏览器
* 直接打印location，则可以获取到地址栏信息（当前页面的完整路径）
* 如果直接将location属性修改为一个完整的路径，或者相对路径，则我们页面会自动跳转到该路径，并且会生成响应的历史记录
* location的属性将地址分成了各种块和段，详见W3C文档，着重介绍search和href属性。
    * Location.search 返回参数，即URL的查询部分
    * Location.href 返回整个URL路径
* Location的方法
    * assign() 参数为目标页面地址。作用跟直接修改location一样
    * reload() 用于从新加载当前页面，作用同刷新按钮，<font color="red">如果在方法中传递true作为参数，则会强制清空缓存刷新页面</font>
    * replace() 参数为新页面地址，可以使用一个页面替换当前页面，调用完毕也会跳转页面。<font color="red">不会生成历史记录，不能使用回退按钮退回上个界面</font>

##### History
代表浏览器的历史记录，可以通过该对象来操作向前或者向后翻页。由于隐私问题，该对象不能获取到具体的浏览器历史记录，只能操作浏览器向前或者向后进行翻页，<font color="red">且该操作只在当次访问时有效</font>
##### Screen
代表用户的屏幕信息，通过该对象可以获取到用户的显示器相关信息。