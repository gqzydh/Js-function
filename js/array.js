// 二维数组按行排序
function sortArr(arr) {
    var goNext = true;
    var entries = arr.entries();
    while (goNext) {
        var result = entries.next();
        if (result.done !== true) {
            result.value[1].sort((a, b) => a - b);
            goNext = true;
        } else {
            goNext = false;
        }
    }
    return arr;
}
var arr = [[1, 34], [456, 2, 3, 44, 234], [4567, 1, 4, 5, 6], [34, 78, 23, 1]];
// console.log("sortArr", sortArr(arr));

// 两个数组间互相校验
function inArray(arr, item) {
   for(var i = 0; i < arr.length; i++) {
          if(arr[i] == item) {
                 return true;
          }
   }
   return false;
};
var links = ["3274", "3256", "3248", "3236"];
var arr = ["notice", "3257", "3256", "jkl", "3236"];
// for(i = 0; i < arr.length; i++) {
//        if(inArray(links, arr[i])) {
//            console.log("inArray", "存在", arr[i]); //进行相关操作
//        } else {
//            console.log("inArray", "不存在" + arr[i]); //进行相关操作
//        }
// }

// 扁平化嵌套数组
var arr3 = [1, 2, [2, 3, 4, [4, 5, 6]]];
// flat() 方法会移除数组中的空项:
// console.log("flat", arr3.flat(Infinity));  //使用 Infinity 作为深度，展开任意深度的嵌套数组

// 数组去重 new Set()
var array = [1, 1, 2, 3, 5, 5, 1]
const uniqueArray = [...new Set(array)];  //基本类型的数组去重
const uniqueArray_01 = Array.from(new Set(array));
const uniqueArray_02 = array.filter((arr, index) => array.indexOf(arr) === index);

// 数组去重合并
function combine(){ 
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
    // return arr;
    return Array.from(new Set(arr));  //合并去重复的新数组 
} 
var m = [1, 2, 2], n = [2, 3, 3]; 
// console.log("combine", combine(m,n));  

// 拍平多维数组
var arr = [1, [2, '大漠'], 3, ['blog', '1', 2, 3]]
const flatArray = [].concat(...arr)  //使用...运算符，将多维数组拍平
// console.log(flatArray)
function flattenArray(arr) {  //使用二维以上的数组
    const flattened = [].concat(...arr);
    return flattened.some(item => Array.isArray(item)) ? flattenArray(flattened) : flattened;
}
var array = [1, [2, '大漠'], 3, [['blog', '1'], 2, 3]];
const flatArr = flattenArray(array);
// console.log("使用二维以上的数组", flatArr);

// 检测所有数组元素的大小
function isBigEnough(element, index, array) {
    return element >= 10;
}
var array1 = [12, 5, 8, 130, 44];
var array2 =[12, 54, 18, 130, 44];
// console.log(array1.every(isBigEnough)); // false
// console.log(array2.every(isBigEnough)); // true

// 筛选排除所有较小的值
var filtered = array1.filter(isBigEnough);
// console.log("filter", filtered);

// 在数组中搜索
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(query) {
    return fruits.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}
// console.log("filterItems", filterItems("ap"));

// 用对象的属性查找数组里的对象
var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];
function findCherries(fruit) {
    return fruit.name === 'cherries';
}
// console.log("find", inventory.find(findCherries));

// 找出指定元素出现的所有位置
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
// console.log(indices);

// 查找到一个元素在数组中所有的索引（下标）
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);

while (idx != -1) {
    indices.push(idx);
    idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}
// console.log(indices); // [4, 2, 0];

// 判断一个元素是否在数组里，不在则更新数组
function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
       // console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
       // console.log(veggie + ' already exists in the veggies collection.');
    }
}
var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];
// 新的蔬菜系列是:土豆，番茄，辣椒，绿木瓜，菠菜
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
updateVegetablesCollection(veggies, 'spinach');

//合并两个数组
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
Array.prototype.push.apply(vegetables, moreVegs); // 将第二个数组融合进第一个数组
// console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']

// 数组里所有值的和
var array01 = [0, 1, 2, 3, 4];
var sum = array01.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
// console.log("数组里所有值的和", sum);

// 将二维数组转化为一维
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function (a, b) {
        return a.concat(b);
    },
    []
);
// flattened is [0, 1, 2, 3, 4, 5]

// 计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// console.log("元素出现的次数", countedNames); // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// 按属性对object分类
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
var groupedPeople = groupBy(people, 'age');
// console.log("按属性对object分类", groupedPeople);
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }

// 使用扩展运算符和initialValue绑定包含在对象数组中的数组
var friends = [{   //对象数组
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];
var allbooks = friends.reduce(function (prev, curr) {
    return [...prev, ...curr.books];
}, ['Alphabet']);  //添加 Alphabet;
//console.log("allbooks", allbooks);

// 测试数组元素的值
function isBiggerThan10(element, index, array) {
    return element > 10;  //检测在数组中是否有元素大于 10。
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
// 箭头函数
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true

// 判断数组元素中是否存在某个值
var fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal;
    });
}
// 箭头函数
function checkAvailability(arr, val) {
    return arr.some(arrVal => val === arrVal);
}
// console.log("checkAvailability", checkAvailability(fruits, 'banana')); // true

// 将任意值转换为布尔类型
var TRUTHY_VALUES = [true, 'true', 1, 323];
function getBoolean(value) {
    'use strict';
    if (typeof value === 'string') {
        value = value.toLowerCase().trim();
    }
    return TRUTHY_VALUES.some(function (t) {
        return t === value;
    });
}
getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true
getBoolean(323);  // true

// 排列
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    return b - a;
});
// 箭头函数
// numbers.sort((a, b) => a - b);
// console.log(numbers);

//对象可以按价 value 排序
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
];

// 按价 value 排序
var itemsSort = items.sort(function (a, b) {
    return (a.value - b.value)
});
// console.log("按价 value 排序", itemsSort);
// 按价 name 排序
var nameSort = items.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});
// console.log("按价 name 排序", nameSort);

// 用 apply 将数组添加到另一个数组
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
// console.info(array); // ["a", "b", 0, 1, 2];

// 一个数组中的最大/最小值
function minOfArray(arr) {
    var min = Infinity;
    var QUANTUM = 32768;

    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
        var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
        min = Math.min(submin, min);
    }

    return min;
}
var min = minOfArray([5, 6, 2, 3, 7]);
// console.log("min", min);

// 从数组中获取最大值和最小值
var numbers = [15, 80, -9, 90, -99];
const maxInNumbers = Math.max.apply(Math, numbers);
const minInNumbers = Math.min.apply(Math, numbers);
// 箭头函数
Math.max(...numbers);
Math.min(...numbers);

//确保数组的长度
var array = Array(5).fill('');   //确保每行的数据长度相等

//数组映射
var array = [
    {
        name: '大漠',
        email: 'w3cplus@hotmail.com'
    },
    {
        name: 'Airen',
        email: 'airen@gmail.com'
    }
]
const name = Array.from(array, ({name}) => name);
// console.log("数组映射", name);

// 数组截断
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4   //特别简洁的解决方案
array = array.slice(0, 4);  //slice()方法运行更快,性能更好
// console.log("数组截断", array) 

// 过滤掉数组中的falsy值
var array = [0, 1, '0', '1', '大漠', 'w3cplus.com', undefined, true, false, null, 'undefined',
    'null', NaN, 'NaN', '1' + 0];
var falsyArray = array.map(item => { return item }).filter(Boolean);
// console.log("过滤掉数组中的falsy值", falsyArray);

// 获取数组的最后一项
var array = [1, 2, 3, 4, 5, 6, 7];
const lastArrayVal = array.slice(-1);
const lastArrayVal_01 = array.slice(array.length - 1);

// 过滤并排序字符串列表
var keywords = ['do', 'if', 'in', 'for', 'new', 'try', 'var', 'case', 'else', 'enum', 'null',
    'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw',
    'while', 'delete', 'export', 'import', 'return', 'switch', 'typeof', 'default', 'extends',
    'finally', 'continue', 'debugger', 'function', 'do', 'if', 'in', 'for', 'int', 'new', 'try',
    'var', 'byte', 'case', 'char', 'else', 'enum', 'goto', 'long', 'null', 'this', 'true', 'void',
    'with', 'break', 'catch', 'class', 'const', 'false', 'final', 'float', 'short', 'super', 'throw',
    'while', 'delete', 'double', 'export', 'import', 'native', 'public', 'return', 'static', 'switch',
    'throws', 'typeof', 'boolean', 'default', 'extends', 'finally', 'package', 'private', 'abstract',
    'continue', 'debugger', 'function', 'volatile', 'interface', 'protected', 'transient', 'implements',
    'instanceof', 'synchronized', 'do', 'if', 'in', 'for', 'let', 'new', 'try', 'var', 'case', 'else',
    'enum', 'eval', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false',
    'super', 'throw', 'while', 'yield', 'delete', 'export', 'import', 'public', 'return', 'static',
    'switch', 'typeof', 'default', 'extends', 'finally', 'package', 'private', 'continue', 'debugger',
    'function', 'arguments', 'interface', 'protected', 'implements', 'instanceof', 'do', 'if', 'in',
    'for', 'let', 'new', 'try', 'var', 'case', 'else', 'enum', 'eval', 'null', 'this', 'true', 'void',
    'with', 'await', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'yield',
    'delete', 'export', 'import', 'public', 'return', 'static', 'switch', 'typeof', 'default', 'extends',
    'finally', 'package', 'private', 'continue', 'debugger', 'function', 'arguments', 'interface',
    'protected', 'implements', 'instanceof'];
const filteredAndSortedKeywords = keywords
    .filter((keyword, index) => keywords.lastIndexOf(keyword) === index)
    .sort((a, b) => a < b ? -1 : 1);

// 清空数组
var array = [1, 2, 3, 4];
function emptyArray() {
    array = [];
    array.length = 0;  //效率更高的方法来清空数组
}
emptyArray();

