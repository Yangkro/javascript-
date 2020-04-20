### JSON简介
JSON（JavaScript Object Notation）JS对象表示法是一个特殊格式的字符串，这个字符串可以被任意语言所识并且可以转换为任意语言的对象，JSON在开发中主要用于数据交互。
* JSON和JS的格式一样，<font color="red">只不过JSON字符串中的属性名必须加双引号</font>
* JSON分类
    1. 对象{}
    2. 数组[]
* JSON中允许的值
    1. 字符串
    2. 数值
    3. 布尔值
    4. null
    5. 对象
    6. 数组（普通对象，函数等不行）
* JS中的JSON工具类
这个对象可以帮助我们将一个JS对象转换为JSON字符串，也可以将JSON字符串转换为JS对象
    * JSON.parse()
    可以将JSON字符串转换为JS对象，参数为JSON字符串
    * JSON.stringify()
    可以将一个JS对象转换为JSON字符串，需要一个JS对象作为参数，会返回一个JSON字符串
* <font color="pink">JSON工具类不兼容IE7</font>
* eval()函数
该函数可以执行一段字符串形式的JS代码，并将执行结果返回。如果使用eval()执行的字符串中含有{},他会将{}当成代码块；如果不希望将其当成代码块来解析，则需要将大括号里面的内容放在()中。<font color="red">在开发中尽量不要使用，执行效率低，而且由于功能过于强大会有安全隐患</font>