// 合并对象，使用...运算符合并对象或数组中的对象
var obj1 = {
    name: '大漠',
    url: 'w3cplus.com'
}
var obj2 = {
    name: 'airen',
    age: 30
}
const mergingObj = {...obj1, ...obj2}
// console.log("合并对象", mergingObj)

// 合并数组中的对象
var array = [
    {
        name: '大漠',
        email: 'w3cplus@gmail.com'
    },
    {
        name: 'Airen',
        email: 'airen@gmail.com'
    }
]
const result = array.reduce((accumulator, item) => {
    return {
        ...accumulator,
        [item.name]: item.email
    }
}, {})
// console.log("合并对象", result);

// 有条件的添加对象属性
const getUser = (emailIncluded) => {
    return {
        name: '大漠飞鹰',
        blogL: 'w3cplus',
        ...emailIncluded && { email: "w3cplus@hotmail.com"}
    }
}
var user = getUser(false);  //true / false 来判断
// console.log("有条件的添加对象属性", user); 

// 解构原始数据
var obj = {
    name: '大漠',
    blog: 'w3cplus',
    email: 'w3cplus@hotmail.com',
    user: "AB_CD",
    joined: '2019-06-19',
    followers: 45
}
var user = {}, userA = {}, userDetails = {};
({ name: user.name, email: user.email, user: userA.user, ...userDetails } = obj)
// console.log("解构原始数据user", user);
// console.log("解构原始数据userA", userA);
// console.log("解构原始数据userDetails", userDetails);

// 动态更改对象的key
const dynamicKey = 'email'
var obj = {
    name: '大漠',
    blog: 'w3cplus',
    [dynamicKey]: 'w3cplus@hotmail.com'
}
// console.log("动态添加对象的key", obj);

// 判断对象的数据类型
function isType(type) {
    return function (target) {
        return `[object ${type}]` === Object.prototype.toString.call(target)
    }
}
var array_01 = [1, 2, 3]
isType('Array')(array_01);
// console.log("==", isType('Array')(array_01));
// 或者
var isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
var isString = isType('String')
var res = isString(('1'))
// console.log(res); //true;

// 检查某对象是否有某属性
var obj = {
    name: '大漠'
};
if (obj.name) {
   // console.log(true) // > Result: true 基础
}
obj.hasOwnProperty('name');     // > true 继承自原型链
'name' in obj;             // > true

// 数据类型转换
// JavaScript中数据类型有Number、String、Boolean、Object、Array和Function等
// JavaScript中除了0、''、null、undefined、NaN和false之外的值都是真实的,在真和假之间使用!运算符进行切换，它也会将类型转换为Boolean

// 转换为字符串
// 可以使用运算符+后紧跟一组空的引号''快速地将数字或布尔值转为字符串：
var val = 1 + ''
var val2 = false + ''
// console.log(val)  // Result: "1"
// console.log(typeof val)  // Result: "string"
// console.log(val2) // Result: "false"
// console.log(typeof val2) // Result: "string"

// 转换为数值
var int = '27';
int = +int;
// console.log("转换为数值", int);
// console.log(typeof int) // Result: 'number'
// 同样的方法可以将布尔值转换为数值：
// console.log(+true)  // Return: 1
// console.log(+false)  // Return: 0

// 在某些上下文中，+会被解释为连接操作符，而不是加法运算符。当这种情况发生时，希望返回一个整数，而不是浮点数，那么可以使用两个波浪号~~。双波浪号~~被称为按位不运算符，它和-n - 1等价。例如， ~15 = -16。这是因为- (-n - 1) - 1 = n + 1 - 1 = n。换句话说，~ - 16 = 15。
var int = ~~'15.245'
// console.log(int) // Result: 15 并取整
// console.log(typeof int) // Result: 'number'
// 也可以用于布尔值： ~true = -2，~false = -1。

// 浮点数转换为整数
// 平常都会使用Math.floor() 、Math.ceil()或Math.round()将浮点数转换为整数
// 在JavaScript中还有一种更快的方法，即使用|（位或运算符）将浮点数截断为整数。
// console.log(23.9234 | 0);  // Result: 23
// console.log(-23.934523 | 0);  // Result: -23
// | 的行为取决于处理的是正数还是负数，一旦强制为整数，值就保持不变。

// |还可以用于从整数的末尾删除任意数量的数字
var str = "1553";
Number(str.substring(0, str.length - 1));  // Result: 155   转换类型的做法

// console.log(1553 / 10 | 0)  // Result: 155
// console.log(1553 / 100 | 0)  // Result: 15
// console.log(1553 / 1000 | 0)  //  Result: 1

// 用!!操作符转换布尔值
// 有时候需要对一个变量查检其是否存在或者检查值是否有一个有效的值
// 只要变量的值为:0、null、" "、undefined或者NaN都将返回的是false，反之返回的是true

// 还可以使用!!操作符将truthy或falsy值转换为布尔值：
!!""        // > false
!!0         // > false
!!null      // > false
!!undefined  // > false
!!NaN       // > false

!!"hello"   // > true
!!1         // > true
!!{}        // > true
!![]        // > true