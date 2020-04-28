(function myModule(window){
    var message = "hello,i think javascript is very insteresting!"
    function printMessage1(){
        console.log("printMessage1 "+ message.toUpperCase())
    }
    function printMessage2(){
        console.log("printMessage2 "+message.toLowerCase())
    }
    window.myModule = {
        printMessage1: printMessage1,
        printMessage2: printMessage2
    }
})(window)
// 传入参数window是为了方便代码压缩，如果不传入window也可以运行