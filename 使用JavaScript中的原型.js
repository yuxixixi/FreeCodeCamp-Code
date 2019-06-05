function doSomething(){}
console.log(doSomething.prototype);
//function in javascript will always have a default prototype property
var doSomething = function(){}
console.log( doSomething.prototype);

//console.log
{
	constructor: f doSomething();
	__proto__:{
		constructor: f Object(),
		hasOwnProperty: f hasOwnProperty(),
		isPrototypeOf: f isPrototypeOf(),
		propertyIsEnumerable: f propertyIsEnumerable(),
		toLocaleString: f toLocaleString(),
		toString: f toString(),
		valueOf: f valueOf()
	}
}

function doSomething(){}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);

//new 返回这个函数的实例化对象
function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log(doSomeInstancing);

//console.log
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}

doSomeInstancing 的 __proto__ 就是 doSomething.property
访问doSomeInstancing的一个属性，浏览器首先查找doSomeInstancing是否存在这个属性。
如果不存在就在doSomeInstancing的__proto__的这个属性。如果还没有
浏览器就回去找doSomeInstancing的—__proto__的__proto__
默认情况下，所有函数原型属性的__proto__就是 window.Object.prototype
最后，原型链上面所有的__proto__都被找晚完了，都不存在这个属性，然后就得出结论这个属性是undefined

function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);

//doSomeInstancing.prop   some value
//doSomeInstancing.foo   bar
//doSomething.prop   undefined
//doSomething.foo   undefined
//doSomething.prototype.prop   undefined
//doSomething.prototype.foo   bar

//理解原型对象
function Person(first, last, age, gender, interests){
	//
}
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
person1.valueOf();

//prototype属性:继承成员被定义的地方
//只有以Object.prototype 开头的属性
create()
var person2 = Object.create(person1);
person1.constructor
















































