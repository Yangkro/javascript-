#### JS数组
数组也是对象，和普通的对象功能相似，可以用来存储一些值，不同的是普通的对象时只用字符串用作属性名，而数组是通过数字来作为索引来操作索引元素，数组的存储性能比普通对象更好，在开发中我们常使用数组来存储<font color="red">任何数据类型的数据</font>
* 数组的创建
    ```
    var arr = new Array();
    //使用字面量方式创建数组
    var arr2 = [1,3,22];
    //使用构造函数创建数组也可以直接赋值，值之间用逗号隔开
    var arr3 = new Array(1,2,3,4);//长度为4
    var arr4 = [10];//长度为1，只有一个元素10
    var arr5 = new Array(10);//长度为10，内容全部为空
    ```
* 向数组中添加元素
语法：数组[索引] = 值
    ```
    arr[0] = 10;
    arr[1] = 100;
    arr[2] = 22;
    arr2 = [1,{name: "后羿"},{name: "妲己", age: 18},function fun(){console.log(hhhh);}, [1,2,3]];
    ```
* 读取数组中的元素
语法：数组[索引];如果读取不存在的索引，他不会报错而是返回undefined
    ```
    console.log(arr[0]);//10
    console.log(arr[3]);//undefined
    arr2 = [1, {name: "后羿"}, {name: "妲己", age: 18},function fun(){console.log("hhhh");}, [1,2,3]];
	console.log(arr2[1].name);//后羿
	console.log(arr2[2]);//{name: "妲己", age: 18}
	arr2[3]();//hhh
    console.log(arr2[4][1]);//2
    ```
* 获取数组的长度
如果数组是连续的，可以使用length获取数组的长度（元素的个数）；如果数组是非连续的，使用length会获取数组最大索引值+1的值；<font color="red">修改length可以改变数组的长度，如果修改的length大于原长度，则多余的部分会空出来，如果修改的length小于原长度，则多出的元素会被删除</font>尽量不要创建非连续的数组
    ```
    console.log(arr.length);//3
    arr[5] = 44;
    console.log(arr)//[10,100,22,,,44] 非连续数组，没有内容部分空出
    console.log(arr.length);//6 非连续数组，此时长度不代表元素的个数
    //修改array的长度
    arr.length = 7
    console.log(arr);//[10,100,22,,,44,,]
    arr.length = 2;
    console.log(arr)//[10,100] 删除了多余的部分
    //向数组后面添加新的元素
    arr[arr.length] = 200;
    arr[arr.length] = 300;
    console.log(arr);//[10,100,200,300] 向末尾中添加新元素
    ```
* 数组的常用方法
    * push()
    该方法可以向数组的末尾添加一个或者多个元素，并返回新数组的长度，该方法可以将需要添加的元素作为方法的参数传递
        ```
        var array = new Array("后羿", "亚瑟");
		console.log(array);
		var newLength1 =array.push("妲己", "项羽");
        console.log(array);//["后羿", "亚瑟", "妲己", "项羽"]
        console.log(newLength1);//4
        ```
    * pop()
    该方法可以删除数组的最后一个元素，并将被删除元素作为返回值返回
        ```
        array.pop();
        var popVal = array.pop();
        console.log(popVal);//"妲己"
        console.log(array)//["后羿","亚瑟"]
        ```
    * unshift()
    向数组的开头添加一个或者多个元素，并返回新数组的长度。向前面插入元素以后，其他的元素索引会依次向后调整
        ```
        var newLength2 = array.unshift("猪八戒","孙悟空");
        console.log(newLength2);//
        console.log(array);//["猪八戒", "孙悟空", "后羿", "亚瑟"]
        ```
    * shift()
    删除数组的第一个元素，并将被删除的元素作为返回值返回
        ```
        var shiftElement = array.shift();
        console.log(shiftElement);//"猪八戒"
        ```
    * slice()
    可以用来提取素数组中的某些元素，<font color="red">不会改变原数组，而是将截取到的元素转到新数组中返回。</font>参数有两个，截取开始位置的索引，包含开始索引，截取结束位置的索引，不包含结束索引。结束索引不写时，会截取从开始索引的所有元素，如果传递一个负值，会从后向前计算，首尾索引相同，不截取元素。
        ```
        var character = ["猪八戒", "孙悟空", "后羿", "亚瑟","韩信","李白"];
        var sliceArray1 = character.slice(1,3);
        console.log(silceArray1);//["孙悟空", "后羿"]
        var sliceArray2 = character.slice(1);
        console.log(sliceArray2);//["孙悟空", "后羿", "亚瑟","韩信","李白"]
        var sliceArray3 = character.slice(1,1);
        console.log(sliceArray3);//[]
        var sliceArray4 = character.slice(0,-3);
        console.log(sliceArray4);["猪八戒", "孙悟空", "后羿"]
        ```
    * splice()
    删除数组中的指定元素。<font color="red">使用splice()会影响到原数组，会将指定索引的元素从原数组中删除，并将删除的元素形成的数组作为返回值返回，第一个参数表示开始删除的位置，第二个参数表示删除的数量，第三个参数及以后参数可以传递一些新元素，这些元素将自动插入到开始位置的前面</font>
        ```
        var spliceArray1 = character.splice(1,2);
        console.log(spliceArray1);
        console.log(character);
        spliceArray2 = character.splice(1,0,"孙悟空","后羿");
        console.log(spliceArray2);//[]
        console.log(character);
        ```
    * concat()
    连接两个或者多个数组，并将新的数组返回，该方法不会对原数组产生影响。。
    * join()
    该方法可以将数组转换成一个字符串，该方法不会对原数组产生影响，而是将转换后的字符串作为结果返回。在join()中可以指定一个字符作为参数，这个字符会成为数组元素的连接符，如果不写参数，默认用`,`连接
    * reverse()
    该方法会将数组翻转，<font color="red">会改变原数组</font>
    * sort()
    对数组中的元素按照Unicode编码来排序，<font color="red">会对原有数组产生影响</font>所有对数字数组排序会出现错误，解决方法如下
        ```
        var nums = [1,3,2,7,6,11,9,20,5];
        mums.sort();
        console.log(nums);//[1, 11, 2, 20, 3, 5, 6, 7, 9]
        ```
        * 在sort()中添加一个回调函数，来指定排序规则，回调函数中有两个形参，浏览器会分别使用数组中的元素作为实参去调用回调函数，第一个参数一定在第二个参数后面，如果返回值大于0，则元素会交换位置，如果小于等于0，则位置不变，升序parameter1-parameter2；降序parame2-parameter1
        ```
        nums.sort(function(parameter1, parameter2){
            return parameter1 - parameter2;
        });
        console.log(nums);//[1, 2, 3, 5, 6, 7, 9, 11, 20]
        ```


* 数组的遍历
将数组中的所有元素取出来。除普通循环外，JS为我们提供了forEach()方法来遍历数组（这个方法只支持IE8以上的浏览器）forEach()需要一个函数作为参数，但是这个函数由我们创建，但是不由我们调用（也被称为回调函数）由浏览器调用，数组中有几个元素函数就执行几次，每次执行的时候，浏览器才会将遍历到的元素以实参的形式传递进来，可以定义形参来读取这些内容。
    * 浏览器在回调函数中传递三个参数：1.第一个参数，当前遍历的元素2. 第二个元素，当前正在遍历元素的索引3. 正在遍历的数组
    ```
    for(var i = 0; i < array.lenth; i++){
        console.log(array[i]);
    }
    //调用forEach
    array.forEach(function(parameter){
        console.log("Element = "+parameter);
    });
    //forEach回调函数的三个参数
    array.forEach(function(value, index, arr){
        console.log("元素为:"+value);
        console.log("索引为:"+index);
        console.log(array == arr);
    })
    ```