#### String常见的属性和方法
字符串在JS底层是已数组的形式存储的，所以可以通过length来访问字符串长度，可以用索引访问某个字符
* charAt(index) 效果等同于string[index]，访问index处的字符
* charCodeAt(index) 访问index处的字符Unicode编码
* String.fromCharCode()根据字符编码来获取字符
* concat() 同`+`号，连接两个或者多个字符串
* indexOf() 该方法检索一个字符串中是否含有指定内容，如果存在则返回第一次出现的索引，如果没有找到则返回-1。可以指定参数设置开始查找的位置
* lastIndexOf()同indexOf(),但是从后向前找
* slice() 可以截取字符串内容，不会改变原字符串，而是将截取的字符串返回（同数组的slice）
* substring() 用来截取字符串，跟slice类似，<font color="red">但是不能传递负值，而且会自动调整参数的位置，如果第一个参数大于第一个参数，则会自动交换参数位置</font>
* split()将一个字符串拆分成一个数组。需要一个参数，根据这个参数来拆分字符串