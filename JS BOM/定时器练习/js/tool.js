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
