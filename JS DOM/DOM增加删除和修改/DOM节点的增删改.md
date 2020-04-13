#### DOM节点的增删改
##### DOM节点的增加
* <font color="#8b7500">document.creatElement("标签名称")</font>
创建一个元素节点，参数为标签名，返回值为参数标签名的元素节点对象
* <font color="#8b7500">document.creatTextNode("文本内容")</font>
创建一个文本节点，参数为文本的内容，返回值为文本节点
* <font color="#8b7500">appendChild()</font>
向一个父亲节点添加一个新的孩子节点，参数为子节点对象。语法：<font color="purple">父节点.appendChild(子节点对象)</font>。默认添加地方为父元素的最后一个孩子，例如ol会添加到最后一个
* <font color="#8b7500">insertBefore()</font>
<font color="red">由父节点调用</font>，在指定的子节点前面插入新的子节点。语法：<font color="purple">父节点.insertBefore(新节点，旧节点)</font>
* <font color="#8b7500">replaceChild()</font>
<font color="red">由父节点调用</font>，使用指定的子节点，替换已经存在的子节点。语法：<font color="purple">父节点.replaceChild(新节点，旧节点)</font>
* <font color="#8b7500">removeChild()</font>
删除一个子节点，语法：<font color="purple">父节点.removeChild() 或者 子节点.parentNode.removeChild(子节点)</font>
* <font color="#8B7500">innerHTML()</font>
可以通过innerHTML()方法来修改标签内部的内容，此方法也可以用来实现增删改
**具体操作代码见本人[Github的javascript-仓库](https://github.com/Yangkro/javascript-)DOM增删改练习1、DOM增删改查练习2**