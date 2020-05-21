### 移动端的DOM操作和事件对象
#### 移动端的DOM操作
移动端没有鼠标和键盘，所以移动端有自己独特的事件
* 触屏事件touch
触摸谁就绑定给谁。
	* touchstart 手指触摸到一个DOM元素是触发
	* touchmove 手指在一个DOM元素上滑动时触发
	* touchend 手指从一个DOM元素上移开时触发
#### 移动端的事件对象
* 触屏事件对象touchEvent
 touchEvent是描述手指在触摸平面的状态变化的事件。用来描述一个或者多个触点，可以检测触摸点的操作。部分事件对象如下：
 * touches 正在触摸屏幕的所有手指的一个列表
  <font color="red">当我们手指离开屏幕就没有了</font>
 * targetTouches 正在触摸当前DOM元素上的手指的一个列表
最常用，可以通过索引号来获取DOM元素的的手指相关信息<font color="red">当我们手指离开屏幕就没有了</font>
    ```
    console.log(e.targetTouches[0]);//获取第一个手指的信息
    ```
 * changeTouches 手指状态发生改变的列表，从无到有，从有到无的变化。
 <font color="red">当我们手指离开屏幕仍然可以获取</font>