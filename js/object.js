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
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
const isString = isType('String')
const res = isString(('1'))

console.log(res); //true;