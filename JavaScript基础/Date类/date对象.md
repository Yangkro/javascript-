#### Data对象
在JS中使用Date对象表示一个时间
* 创建一个Date对象
    * 直接使用构造函数创建一个Date对象，则会封装为当前代码执行的时间
        ```
        var d = new Date();
        console.log(d);//当前代码执行的时间
        ```
    * 创建一个指定时间的对象，需要在构造函数内传递一个表示时间的字符串作为参数，格式为：月份/日/年 时:分:秒
        ```
        var d2 = new Date("03/23/2020 10:12:44");
        cosole.log(d2);//04 3 2020 10:12:44
        ```
* getDate() 获取当前对象封装时间是几日
    ```
    console.log(d2.getDate());//3
    ```
* getDay() 获取当前对象封装时间是周几，0表示周日，1表示周一
    ```
    console.log(d2.getDay());//5 表示周五
    ```
* getMonth() 获取当前对象封装时间是的月份，会返回0~11的值，11表示12月
    ```
    console.log(getMonth());//3 表示4月
    ```
* getFullYear() 获取当前对象封装时间的全写年份
    ```
    console.log(d2.getFullYear());//2020
    ```
* getYear() 获取当前对象封装时间的简写年份
    ```
    console.log(d2.getYear());//120
    ```
* getTime() 获取当前对象日期的时间戳（时间戳：从格林威治标准时间的1970年1月1日，0时0分0秒，到当前日期所花费的毫秒数，1s=1000ms）
    ```
	console.log(d2.getTime());
    ```
* Date.now()可以测试代码运行时的时间戳
    ```
    var d3 = Date.now()
	console.log("运行后时间戳"+ d3);
    ```
