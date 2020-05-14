function move(obj, target, speed, dir, callback) {
	//添加定时器前为清除之前的定时器
	clearInterval(obj.timer);
	/*
	参数：	1.事件绑定对象
			2.移动的目标位置
			3.移动的速度
			4.需要移动的方向dir，或者是需要改变的样式
			5.加入回调函数，当前定时器完成后执行的函数
	*/
	//获取当前位置和目标位置的距离，判断移动方向
	var current = parseInt(getStyle(obj, dir));
	if (target < current) {
		speed = -speed;
	}

	//添加定时器
	obj.timer = setInterval(function() {
		var oldValue = parseInt(getStyle(obj, dir));
		var newValue = oldValue + speed;
		if ((target < newValue && speed > 0) || (target > newValue && speed < 0)) {
			newValue = target;
		}
		obj.style[dir] = newValue + "px";
		//到达终点后清除定时器
		if (newValue === target) {
			clearInterval(obj.timer);
			//执行完毕后执行回调函数，如果没有回调函数则不执行
			callback && callback();
		}
	}, 30);
};
//获取当前样式函数getStyle
function getStyle(obj, name) {
	if (window.getComputedStyle) {
		return getComputedStyle(obj, null)[name];
	} else {
		return obj.currentStyle[name];
	}
};


//定义一下函数为元素的样式类进行操作
//定义一些函数，用来添加、删除、判断是否引用，切换元素样式
function hasClass(obj, cn) {
	//判断目标元素中是否含有cn这种样式
	var reg = new RegExp("\\b" + cn + "\\b");
	return reg.test(obj.className);
};

function addClass(obj, cn) {
	//为一个元素添加新的样式类
	if (!hasClass(obj, cn)) {
		//如果没有则添加
		obj.className += " " + cn;
	}
};

function removeClass(obj, cn) {
	//为一个元素删除目标样式类
	var reg = new RegExp("\\b" + cn + "\\b");
	obj.className = obj.className.replace(reg, "");
};

function toggleClass(obj, cn) {
	//判断元素obj是否有cn样式类
	if (hasClass(obj, cn)) {
		//如果有则删除
		removeClass(obj, cn);
	} else {
		addClass(obj, cn);
	}
};
// 兼容各个浏览器的绑定函数
function bind(obj, eventStr, callback) {
	if (obj.addEventListener) {
		obj.addEventListener(eventStr, callback, false);
	} else {
		obj.attachEvent('on' + eventStr, function() {
			callback.call(obj) //变成obj调用，使this指向obj
		})
	}
}
//兼容IE8的解除绑定函数
function removeEventListener(obj, enentStr, callback) {
	//判断当前浏览器是否支持removeEventListener方法
	if (obj.removeEventListener) {
		obj.removeEventListener(enentStr, callback);
	} else if (obj.detachEvent) {
		obj.detachEvent("on" + eventStr, callback)
	} else {
		obj['on' + eventStr] = null
	}
}
/*
move函数的不足：
	1. 所有的动画都是链式执行，只有当前一个动画执行完毕后才能执行下一个动画
	2. 动画执行的速度单一，只能能匀速，无法实现渐变效果
	3. 函数的参数繁琐
为解决move函数的不足，定义一个动画函数animation
*/
function animation(obj2, json, callback2) {
	/*
		obj：需要添加动画的对象
		json: 封装需要改变obj样式的目标属性
		callback：动画执行完毕后的回调函数
		为了区分move函数中的变量，故采用2的方式
	*/
    var num = 0;//方便统计是否完全执行完json中的内容
	var total = Object.keys(json).length;//确定json属性值得个数，配合计数器num判断清除定时器的时间
	var speed2 = 0; //设置初速度为0
	//添加定时器之前清除定时器
	clearInterval(obj2.timer);
	obj2.timer = setInterval(function() {
		//遍历json中封装的各个属性
		for (var property in json) {
			var curentProperty = null;
			if (property == "opacity") {
				//如果获取的属性时透明度，需要将其扩大100倍方便进行整数计算
				curentProperty = Math.round(parseFloat(getStyle(obj2, property)) * 100)
			} else {
				curentProperty = parseInt(getStyle(obj2, property)); //因为获取其他有单位的需要转换为整数，然后进行计算
			}
			//进行速度的设置
			var speed2 = (json[property] - curentProperty) / 10;//实现由快到慢的缓动
			//进行速度的取整设置，如果不取整，则无法到达目标动画位置
			if (speed2 > 0) {
				speed2 = Math.ceil(speed2); //如果速度速度大于0 就向上取整
			} else {
				speed2 = Math.floor(speed2); //负数需要向下取整，不能出现倒车
			}
			if(json[property] === curentProperty){
				num ++;
				delete json[property];
			}else {
				if (property == "opacity") {
					obj2.style.filter = 'alpha(opacity=' + (curentProperty + speed2) + ')';
					obj2.style.opacity = (curentProperty + speed2) / 100;
				} else {
					obj2.style[property] = curentProperty + speed2 + "px";
				}
			}
		}
		if (num === total) {
			clearInterval(obj2.timer);
			callback2 && typeof callback2 === 'function' && callback2();
		}
	}, 30);
};
