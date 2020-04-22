### JavaScript函数
函数也是一个对象，可以封装一些功能，可以在需要的时候调用函数来实现功能
* 函数的创建
    * 使用构造函数来创建函数
    可以将需要封装的代码以字符串的形式传递给构造函数
        ```
        var fun = new Function("console.log("hello world");");
        console.log(typeof fun);//function
        ```
    * 使用函数声明创建函数
    可以有0个或者多个参数
        ```
        function 函数名 ([形参1,形参2,...形参n])//[]表示可选的{
            函数体....
        }
        function myFunction() {
            console.log("这是我的函数");
        }
        //调用
        myFunction()
        ```
    * 使用函数表达式创建函数
    先创造一个匿名函数，在将匿名函数赋值给一个变量。采用函数表达式声明函数的时候，function后面不带有函数名。<font color="red">如果加上函数名，函数名只在函数内部有效，在函数体外部无效。此方法便于在函数体内部调用自身实现递归，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）</font>
        ```
        function([形参1,形参2,...形参n]) {
            //匿名函数
            函数体....
        }
        var 函数名 =function([形参1,形参2,...形参n]) {
            //将匿名函数赋值给某个变量
        };
* 函数的参数
可以在函数的`()`中指定0个或者多个形式参数，多个形参之间用`,`隔开，声明的形参相当于在函数内部声明了对应的变量，传递参数的时候，实参会传递给形参。当我们参数过多时可以封装到一个对象中，然后通过对象传递参数，这样可以避免参数混淆问题**由于实参可以是任意的数据类型，但是调用函数时解析器不会检查实参的类型，所以要注意，是否可能会接收到非法的参数，如果有可能要进行参数类型的转换，且多余的实参不会被赋值，如果实参的数量小于形参的数量，则没有对应的实参的形参将是undefined。如果有多个相同的形参，则以最后一个为准**
    ```
    var sum = function(a,b) {
        console.log(a+b);
    }
    sum(123,456);//579
    sum(true,123);//457
    sum(123,false,"hello",null,undefine);//123
    sum(123);//NaN 由于没有对应的形参是undefined类型，转化为数值为NaN，所以运算后为NaN
    //用对象传递参数
	function sayHello(o) {
	//es6的写法
	console.log(`我是${o.name}，我今年${o.age}了，我来自${o.adress}`);
		}
	var obj = {
	name: "Yangkro",
	age: 23,
	adress: "河南信阳"
		};
	sayHello(obj);//我是Yangkro，我今年23了，我来自河南信阳
    //一个函数作为另一个函数的参数
    function function1(parameter1) {
        console.log("结果为"+parameter1);
    }
    var function2 = function(parameter1, parameter2){
        return parameter1 + parameter2;
    }
    ```
* 函数的返回值
使用`return`来设置函数的返回值，其后面的值将作为函数的执行结果返回，使用return可以退出整个函数**函数中在return后面的语句都不会执行，return后面可以返回任何类型的值，如果return后面不跟任何值或者不写return都会返回undefined**
    ```
    function sum (a, b, c){
        var result = a + b + c;
        return result;
    }
    //函数对象作为返回值
    function fun1(){
        function fun2 {
            alert("我是fun2");
        }
        //函数中调用函数
        fun2();
        //将函数作为返回值
        return fun2();
    }
    var a = fun1();
    console.log(a);
    //对象作为返回值
        //函数对象作为返回值(生产好的冰激凌)
    function fun1(){
        function fun2 {
            alert("我是fun2");
        }
        //函数中调用函数
        fun2();
        //将对象作为返回值（制造冰激凌的机器）
        return fun2;
    }
    var a = fun1();
    console.log(a());
    ```
* 函数名的提升
JS引擎将函数名视为变量名，所以采用function命令声明函数时，函数名会像变量名一样，提升到代码头部。<font color="red">如果一个函数同时采用function和var声明，由于存在函数提升，最后会采用var声明的语句</font>
    ```
    f1();//不会报错
    function f1(){};
    
    f2();//报错
    var f2 = function(){};
    //等同于下面
    var f2;
    f2();//报错
    f2 = function(){};

	var f = function(){
		console.log(1);
	}
	function f() {
		console.log(2);
	}
	f();//1 JS中函数不会被重载，只会被后面的覆盖，但是同时用var和function声明的以var为准
    ```
* 立即执行函数（调用匿名函数）
函数定义完成后将立即执行，但是只能执行一次
    ```
    (function sum(a, b){
        console.log("a + b ="+a+b);
    })(123,456);
    //使用匿名函数，只能说使用一次，没有用变量记录地址，所以使用后就无法找到
    ```
* 函数作为对象的方法（属性值）
当函数作为一个对象的属性保存时，我们称这个函数时这个对象的方法，调用这个函数就是调用这个对象的方法
    ```
    //使用函数作为对象的属性值
    var obj = new Object();
    obj.name = "刘德华";
    obj.age = 18;
    obj.sayName = function(){
        console.log("喊出我的名字"+obj.name)
    };
    obj.sayName();
    ```
* 函数的属性
    * name属性
    返回函数的名字或者函数变量名。如果同时有二者，那么返回function后面的函数名。
        ```
        	var fun = function fu(){
				
			};
			var test = function(x){
				console.log(x.name);
			}
			test(fun);//fu
        ```
    * length属性
    函数的length属性返回函数预期传入的参数个数，<font color="red"即函数定义之中的参数个数</font>
        ```
        function f(a, d, f){};
        console.log(f.length);//3
        ```

* 作用域
    * 全局作用域
    直接编写在script标签中的JS代码，都是全局作用域，全局作用域中的变量，在全局中都可以访问，为全局变量
        + 全局作用域在页面打开时创建，在页面关闭时销毁
        + 在全局作用域中有一个全局对象window
        它代表一个浏览器，它又浏览器创建，可以直接使用，**在全局作用域中，创建的变量都会作为window对象的属性来保存，创建的函数都会作为window的方法保存**我们所谓的函数都是window的方法
        + 变量声明提前
        使用var 声明的变量会在所有代码执行之前被声明，但是不会赋值
        + 函数声明提前
        使用函数声明创建函数`function 函数 ()`，会在代码执行之前就会创建，所以可以在函数声明前调用函数，但是使用函数表达式创建的函数`var 函数名 = function()`,不会被提前声明，在赋值之前不可以调用
            ```
            var a = 123;
            var c;
            console.log(a);//123
            console.log(windows.a);//123
            console.log(b);//b is not defined
            console.log(c);//undefined,不会报错
            //函数
            fun1()//我是fun1
            fun2()//报错"fun2 is not a function"
            function fun1(){
                console.log("我是fun1()");
            }
            var fun2 = function(){
                console.log("我是fun2()");
            }
            ```
    * 函数作用域
    函数调用时创建函数作用域，函数执行完毕后，函数作用域销毁，每调用一次函数就会创建一个新的函数作用域，不同的函数的作用域的相互独立。<font color="red">函数本身也是一个值，有自己的作用域，其作用域在函数声明的时候就已经绑定了，与其运行时的作用域无关</font>
        + 在函数作用域中可以访问全局作用域中的变量（以后简称全局变量）
        + 在全局作用域中无法访问到函数作用域中的变量（以后简称局部变量）
        + 在函数作用域中操作一个变量满足**就近原则**
        先在自己函数作用域中寻找，如果没有就向上一级的作用域中寻找，一直找到全局作用域中，如果还没有找到，就会报错"xxx is not defined"，在函数作用域中访问相同名字的全局作用域语法：`window.变量名`
        + 在函数作用域中也存在var 和function 声明提前的特性
        + 在函数中不用var声明的变量都是全局变量
            ```
            var a = "我是全局变量";
            var b = "我是全局变量b";
            var c = 123
            function method() {
                console.log(a);//undefined,在局部中声明，但是没有赋值
                var a = "我是method中的局部变量";
                console.log(a);
                console.log(b);
                console.log(window.a);
                console.log(c);//123
                c = 456;//由于函数中没有var c 所以需要到外部去寻找c进行修改
                d = 789;//没有用var声明，所以是全局变量，在全局作用域中也可以访问 相当于window.d
            }
            console.log(c);//456 
            console.log(d);//789
            //函数自身作用域

            var a = 1;
            var x = function () {
            console.log(a);
            };

            function f() {
            var a = 2;
            x();//1 因为函数x是在f外面声明的，所以其绑定的作用域为定义时的作用域，而不是执行时的作用域
            }
            ```
* 函数的隐含参数，封装实参对象arguments
arguments是一个类数组对象，它也可以通过索引来操纵元素，其索引代表实参的位置。可以通过`arguments.length`获取长度。arguments中保存的是调用函数时传递的实参，**即使不定义形参也可以通过arguments来使用实参**。arguments的callee属性对应当前函数对象（严格模式下禁用，且严格模式下通过修改argument[x]的值改变实参 无效）
    ```
    function fun(a,b,c){
        console.log(arguments[0]);//传递的第一个实参
        console.log(arguments.calee == fun);//true
    }
    ```
* 函数的隐含参数，上下文对象this
解析器在调用函数每次都会向函数内部传递一个隐含参数`this`，this指向的是对象，这个对象我们称之为上下文对象，根据函数**调用方式**不同，this指向不同的对象
    * 以函数的形式调用时，this永远指向window
    * 以方法的形式调用时，this永远指向的是那个对象
        ```
        var name = "我是全局变量name";
        function fun() {
            console.log(this.name);
        }
        var obj = new Object();
        obj.name = "后羿";
        obj.sayName = fun;
        var obj2 = {
            name: "亚瑟",
            sayName: fun
        };
        fun();//我是全局变量name
        obj.sayName();//后羿
        obj2.sayName();//亚瑟
        ```
* 对象的构造函数
构建一个函数，专门用来创建某种对象，**构造函数习惯首字母大写**，构造函数创建时和普通函数没有区别，但是调用时需要用new关键字来调用。  
执行流程为：1.立刻创建一个新的对象；2.将新建的对象设置为函数中this，在构造函数中可以使用this来引用新建的对象；3.逐行执行函数中的代码；4.将新建对象作为返回值返回  
使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类，我们通过构造函数创建的对象，称为该类的实例
    ```
    function Person(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.sayName = function(){
            console.log(this.name);
        };
    }
    var person1 = new Person("后羿", 18, "男");//创建Person类的实例 person1
    var person2 = new Person("嫦娥", 18, "女");//创建Person类的实例 person2
    console.log(person1);//Person {name: "后羿", age: 18, gender: "男", sayName: ƒ}
    console.log(person2);//Person {name: "嫦娥", age: 18, gender: "女", sayName: ƒ}
    ```
    * 对象的构造函数的改进
    因为没new一个对象的实例，就会定义一个实例的function，这样会占有很大部分内存，所以改进的方法是将函数定义在对象的构造函数的外面。但是将函数写在全局作用域中会污染全局作用域的命名空间，而且定义在全局作用域中也不安全（别人可能用相同的函数名）解决方案见原型
        ```
        function Person(name, age, gender){
            this.name = name;
            this.age = age;
            this.sayName = fun;
        }
        function fun(){
            console.log(this.name);
        };
        var person1 = new Person("后羿", 18, "男");//创建Person类的实例 person1
        var person2 = new Person("嫦娥", 18, "女");//创建Person类的实例 person2
        console.log(person1);//Person {name: "后羿", age: 18, gender: "男", sayName: ƒ}
        console.log(person2);//Person {name: "嫦娥", age: 18, gender: "女", sayName: ƒ}
        ```
* eval命令
eval命令接受一个字符串作为参数，并将这个字符串当做语句执行。放在eval中的字符串必须有独自存在的意义，否则会报错。<font color="red">eval没有自己的作用域，可能会修改当前作用域中的变量造成安全问题，在严格模式下，不会创建新的变量，但是可以修改当前作用域的变量</font>
    ```
    eval('var a = 1');//声明变量a并赋值为1
    eval('return;');//报错
    var b = 1;
    eval('var b = 2');//会修改全局变量b的值为2
    ```
    *eval的别名调用
    当采用别名调用eval时，默认eval的内部执行环境为全局作用域
        ```
        var a = 1;
        function f() {
        var a = 2;
        var e = eval;
        e('console.log(a)');
        }

        f() // 1
        ```
* call()和apply()
这两个方法都是对象的方法，需要通过函数对象名来调用，当对这两个函数调用时都会执行函数，在调用call()和apply()可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行的this。
    * call()可以将实参在对象后依次传递
    * apply()方法需要将实参封装到一个数组中统一传递
* **this使用方法总结**
<font color="orange" size=4>1.以函数形式调用时，this永远是window  
    2. 以方法形式调用时，this永远是对象
    3. 以构造函数形式调用时，this是所创建的哪个对象
    4.使用call()和apply()调用时，this是指定的某个对象
</font>