#### JS正则表达式
正则表达式用于定义一些字符串的规则，计算机可以根据正则表达式来检查是否符合规则，将字符串中合乎规则的内容提取出来
* 创建正则表达式对象
语法：<font color="purple">var 变量 = new RegExp("正则表达式", "匹配模式");</font>
    ```
    var reg1 = new RegExp("a");//这个正则表达式用来检查字符串中是否有"a"
    var str = "a";
    console.log(reg1, typeof reg1);//"/a/" object
    ```
* 字面量创建正则表达式
语法：<font color="purple">var 变量 = /正则表达式/匹配模式</font>（使用字面量创建更简单，使用构造函数创建更灵活）  
    * 使用`|`表示或
    * 使用`[ab]`表示`a|b`,使用`[a-z]`表示任意的小写字母，`[A-Z]`表示任意的大写字母，`[A-z]`表示任意的字母，`[0-9]`表示任意数字
    * 检查字符串中是否含abc adc aec中的一个或者多个`/a[bde]c/`
    * `[^xxx]`表示除了xxx之外的
    ```
    var reg1 = /a/i;//忽略大小写的查找a
    var reg3 = /a|b/;//只要字符串中有a或者b都为true
    console.log(reg3.test("acd"));//true
    console.log(reg3.test("bcd"));true
    console.log(reg3.test("abcedet"));//true
    console.log(reg3.test("frgg"));//false
	var reg4 = /[ab]/;
    console.log(reg4.test("acd"));//true
    console.log(reg4.test("bcd"));true
    console.log(reg4.test("abcedet"));//true
    console.log(reg4.test("frgg"));//false
    var reg5 = /[a-z]/;//表示a-z的字母，即小写字母
	console.log(reg5.test("12345"));//flase
	console.log(reg5.test("a12456"));//true
    var reg6 = /[^A-z]/;//表示除字母外的所有字符
	console.log(reg6.test("12345"));//true
	console.log(reg6.test("./,,)*&*^%"));//true
	console.log(reg6.test("ac123"));//true
	console.log(reg6.test("avffdfv"));//false
    ```
* 正则表达式的方法test() 使用这个方法可以检查一个字符串中是否符合表达式规则，如果有则为true，否则返回false
    ```
    console.log(reg1.test(str));//true
    console.log(reg1.test("qddaa"));//true
    console.log(reg1.test("qwer"));//false
    console.log(reg1.test("Abc"));//false
    ```
* 正则表达式的匹配模式
可以同时写多个而且顺序无所谓
    * i 忽略大小写
        ```
        var reg2 = new RegExp("a", "i");
        console.log(reg2.test(str));//true
        console.log(reg2.test("qddaa"));//true
        console.log(reg2.test("qwer"));//false
        console.log(reg2.test("Abc"));//true
        ```
    * g 全局匹配模式
    设置对字符串进行全局查找
* 正则表达式量词
语法：<font color="purple">/a{number}/表示a出现number次，/a{number1, number2}表示在两个范围之间；/a{number,}表示number个数以上；/a+/表示至少一个a；/a*/表示有没有a都行；/a?/表示0个或者一个；/^a/表示以a开头；/a$/表示以a结尾，后面不能有其他字符</font>，其他的详见开发者文档**量词只对其前面一个字符串有作用**
    ```
    console.log("===量词======");
	var reg7 = /a{3}/;//表示3连a
    console.log(reg7.test("aab"));//false
	console.log(reg7.test("aaab"));//true
	reg7 = /ab{2}/;
	console.log(reg7.test("abab"));//false
	console.log(reg7.test("abb"));//true
	reg7 = /(ab){2}/;
	console.log(reg7.test("abab"));//true
	reg7 = /ab{3}c/;
	console.log(reg7.test("abbbcc"));//true
	console.log(reg7.test("aabbbbc"));//false
    reg7 = /ab{1,3}c/;//表示1-3个b都能满足
	console.log(reg7.test("abbbbcc"));//false
	console.log(reg7.test("abbbcc"));//true
	console.log(reg7.test("abbcc"));//true
	console.log(reg7.test("abcc"));//true
	console.log(reg7.test("acc"));//false
    ```
        * 电话号码的正则表达式
            1. 以1开头 `^1`
            2. 第二个数字是3-8的任意数字 `[3-8]`
            3. 三位以后任意数字9个 `[0-9]{9}$`
            `var reg = /^1[3-9][0-9]{9}$/`
            ```
            var reg8 = /^1[3-9][0-9]{9}$/
            console.log(reg8.test("12235893641"));//false
            console.log(reg8.test("13087563214"));//true
            ```
* 正则表达式的转义字符
由于一些符号在正则表达式中有特殊运算含义，当要表示这些字符时用\\进行转义，例如`\.、\+、、\\、\*`等
    * \w 表示任意字母、数字、_
    * \W 表示除字母、数字以及下划线
    * \d 表示数字
    * \D 表示除数字以外
    * \b 表示单词边界
    * \B 表示除了单词边界
    * \s 表示空格
    * \S 表示除了空格
        * 匹配字符串开头和结尾的空格`/^\s*|\s*$/g`
        ```
        var strSpace = "     hello world   "
        console.log(strSpace.replace(/^\s*|\s*$/g, ""));
        ```
        * 电子邮件的正则表达式
        ```
        /*
		电子邮件
		hello	.nihao  @	abc		.com.cn
		开头任意个数的数字字母下划线	.任意字母数字下划线
		@	任意字母数字		.任意字母（2-5位）.任意字母（2-5位）
		^\w{3,}	(\.\w+)*@	[A-z0-9]+	([A-z]{2,5}){1,2}$
		*/
        var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
        var email1 = "123.abc@qq.com";
        console.log(emailReg.test(email));
        ```
        ```
        //.表示任意字符，在正则表达式中常用"\."表示"."任意字符
        
        var reg9 = /./;
        console.log(reg9.test(""));//false
        console.log(reg9.test(" "));//true 所有字符都是true
        reg9 = /\./;
        console.log(reg9.test("a"));//false
        console.log(reg9.test("ab.v"));//true
        ```

* 可使用正则表达式作为参数的字符串方法
    * split() 可以将一个字符串拆分成一个数组，当方法中传递一个正则表达式作为参数时，该方法会根据正则表达式来拆分字符串。**该方法不需要指定全局匹配就可以拆分**
        ```
        var str = "1a2b3c4d5e6f7g";
        var arr1 = str.split(4);
        console.log(arr1,arr1.length);//["1a2b3c","d5e6f7g"] 2
        var arr2 = str.split(/[A-z]/);//根据字母拆分
        console.log(arr2, arr.length);//["1", "2", "3", "4", "5", "6", "7", ""] 8
        ```
    * search() 可以检索字符串中是否含有指定的内容，如果含有则会返回指定内容第一次出现的索引，如果没有则返回-1。可以使用正则表达式作为其参数，然后根据正则表达式来检索字符。**search只会查找第一个，设置全局也不可以**
        ```
        var str2 = "hello world I am coming!";
        console.log(str2.search("world"));//6 从0开始数
        console.log(str2.search("word"));//-1
        //搜素字符中是否含有abc或者acc或者adc
        var str3 = "hello abc acc adc";
        console.log(str3.search(/a[b-c]c/));//6
		console.log("123456".search(/a[b-c]c/));-1
        ```
    * match() 可以使用正则表达式将一个字符中符合条件的内容提取出来。默认情况下只会找到第一个符合要求的内容，找到后就停止检索，**我们可以设置正则表达式为全局匹配模式，检索全部内容**会将查询到的结果封装在一个数组中，并返回
        ```
        var str = "1a2b3c4d5e6f7g";
        console.log(str.match("a"));//["a"]
		console.log(str.match(/[a-z]/gi));//["a", "b", "c", "d", "e", "f", "g"]
        ```
    * replace()将字符串中指定的内容替换为新的内容，第一个参数时被替换的内容，第二个参数时新的内容，并返回一个新的字符串
        ```
        var str = "1a2b3c4d5e6f7g";
        console.log(str.replace(/[ac]/g, "*"));//1*2b3*4d5e6f7g
        //删除数字
        console.log(str.replace(/[0-9]/g, ""));//abcdefg
        ```

