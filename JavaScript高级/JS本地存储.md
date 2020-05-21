### 本地存储
* 本地存储的特性
    * 数据存储在用户浏览器中
    * 设置、读取方便、甚至刷新页面不丢失数据
    * 容量大，sessionStorage越5M、localStorage月20M
    * 只能存储字符串，可以将对象JSON。string()编码后存储
#### window.sessionStorage
* 特点
    * 生命周期为关闭浏览器窗口
    * 在同一个窗口（页面）下数据可以共享
    * 以键值对的形式存储
* 方法
    * 存储数据 `sessionStorage.setItem(key,value)`
    * 获取数据 `sessionStroage.getItem(key)`
    * 删除数据 `sessionStroage.removeItem(key)`
    * 清空所有数据 `sessionStorage.clear()`
#### window.localStorage
* 特点
    - 生命周期永久有效，除非手动删除，<font color="red">关闭页面也会存在</font>
    - 可以多个窗口（页面）共享（同一浏览器共享）
    - 还是以键值对的形式存储
* 方法
    * 存储数据 `localStorage.setItem(key,value)`
    * 获取数据 `localStorage.getItem(key)`
    * 删除数据 `localStorage.removeItem(key)`
    * 清空所有数据 `localStorage.clear()`
