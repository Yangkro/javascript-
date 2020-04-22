#### toSring()方法
当我们直接打印一个对象的时候，事件上是输出的对象toString()方法的返回值

    console.log("直接打印stu1"+stu1);//[object, Object]
	console.log("调用toSting()方法打印"+stu1.toString());//[object, Object]
	//对stu2的toString()进行重写后调用
	stu2.toString = function(){
		return "我是"+this.name+"，我"+this.age+"岁了";
	};
	console.log(stu2.toString());//我是Marry，我今年18岁了
#### JS垃圾回收
当一个对象没有任何的变量或者属性对他进行引用，此时我们将永远无法对该对象进行操作，此时这种对象就成为了垃圾，会占用大量内存，导致程序运行变慢，<font color="red">我们需要将不再使用的对象的变量设置为null</font>
#### Math对象
Math和其他的对象不同，他不是一个构造函数，它属于一个工具类，不用创造对象，它里面封装了数学运算的属性和方法
* Math的属性
Math有PI（圆周率）E（自然对数）、LN2（2的自然对数）……
* Math对象的方法
有绝对值函数，三角函数，向上取整、向下取整函数等等（详见API文档）
    * Math.random()生成0~1之间的随机数（不包含0和1）生成x-y的随机数`Math.round(Math.random()*(x-y)+x);`
        ```
        //去0~10之间的随机数
        for(var i = 0; i < 5; i++){
            console.log(Math.round(Math.random()*10));
            console.log(Math.round(Math.random()*9+1));//生成1-10包含1和10的随机数
        }
        ```
    * max()和min()来求一组数中的最值