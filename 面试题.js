
//js对象的深度克隆
function clone(obj){

}
// js操作cookie
// 创建cookie
function setCookie(name,value,expires,path,domain,secure){
	var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value)
}
//namespace模式：简单对象封装
//作用：减少了全局变量，解决命名冲突
//问题：数据不安全
let myModule = {
	data: 'www.baidu.com',
	foo(){
		console.log('foo() ${this.data}')
	}
}
myModule.data = 'other data' //能直接修改模块内部数据
myModule.foo() // foo() other data

//IIFE 匿名函数自调用（闭包）

//http协议详解
//URI与URL
URI：统一资源标识符 uniform resource identifier
绝对URI
相对URI
1.访问资源的命名机制
2.存放资源的主机名
3.资源自身的名称，由路径表示

http://www.cnn.com

URL：统一资源定位符，uniform resource location
是URI的子集；除了标识资源的位置还提供一种定位该资源的主要访问机制
文件服务器地址和目录
URL一般由协议、存有该资源的主机IP地址、具体地址。如目录和文件名等


//Request消息的结构
请求行 请求方法 请求资源地址（URI、无域名） http版本
请求头
请求主体