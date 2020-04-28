function Module(){
    var message = "hello, I am learning javascript"
    function doSomething(){
        console.log("doSomething "+ message.toUpperCase())
    }
    function doOtherthing(){
        console.log("doOtherthing "+ message.toLowerCase())
    }
    //将这两个函数封装为对象返回,向外暴露两个方法
    return {
        doOtherthing: doOtherthing,
        doSomething: doSomething
    }
}