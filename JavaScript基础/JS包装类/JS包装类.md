#### JS包装类
在JS中为我们提供了三个包装类，通过三个包装类可以将基本数据类型转换为对象
* String() 可以将基本数据类型字符串转换为string对象
* NUmber() 可以将基本数据类型数字转换为Number对象
* Boolean() 可以将基本数据类型的布尔值转化为Boolean对象
    ```
	var num = new Number(3);
	console.log("num = "+num, "   typeof = "+typeof num);//num = 3   typeof = object
	var num2 = new Number(3);
	console.log(num == num2);//false
	var hello = new String("hello");
	console.log("hello = "+hello, "   typeof = "+typeof hello);
    var bol = new Boolean(true);
    console.log(bol,typeof bol);//true  object
    ```
**可以给对象添加属性和方法，但是不可以向基本数据类型添加属性和方法**<font color="red">当我们对一些基本数据类型调用属性和方法时，浏览器会临时使用包装类将其转化为对象，然后调用对象的属性和方法，调用完成后又还原了</font>

```
    var s = 123;
    //浏览器调用Number()包装类，转化为对象
    s = s.toString();
    console.log(s);//"123"
    console.log(typeof s);//String
    s.hello = "hi";
    console.log(s.hello);//undefined 因为将其转换为对象后又还原了，没有保存其地址，垃圾回收了，二期前后两次转换的对象不是同一个对象
```

