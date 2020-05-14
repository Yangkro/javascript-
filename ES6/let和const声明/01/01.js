// {
//     var value = 10;
//     let count  = 20;
// }
// console.log(value);
// console.log(count);//count is not undefined
console.log(value);//var 存在变量提升，但是没有赋值，所以是undefined
var value;
//console.log(count1);//Cannot access 'count1' before initialization 表明在变量声明之前不可以使用
//如果在let声明之前就使用变量，这段区域被称为“临时死区（或者暂时性死区）”
//let count1;
let count;
console.log(count);//undefined
// if(true){
//     //这段区域被称为暂时性死区 TDZ
//     values = 10;
//     console.log(values);
//     let values;
// }
// console.log(typeof num);//如果没有用let声明或者用var声明，则输出undefined,
// let num;//用let声明后则会报错
var list = [];
for(var i = 0; i < 10; i++){
    list[i] = function () {
        console.log(i);
    }
}
list[5]();//10
list[6]();//10 将list中的每一个元素都指向同一个函数，而函数输出的是i, 此处的i为全局变量，值为10

var array = [];
for(let j = 0; j < 10; j++){
    array[j] = function () {
        console.log(j);//在当前这个作用域中j是当前值，外部作用域无法直接访问这个值，只能通过引用地址来找到，无法访问则就无法改变
    }
}
array[5]();
array[6]();