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

// 数组去重合并
function combine(){ 
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
    // return arr;
    return Array.from(new Set(arr));  //合并去重复的新数组 
} 
var m = [1, 2, 2], n = [2, 3, 3]; 
// console.log("combine", combine(m,n));  

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
console.log("按属性对object分类", groupedPeople);
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }


// 判断数组元素中是否存在某个值
// function checkAvailability(arr, val) {
//     return arr.some(function (arrVal) {
//         return val === arrVal;
//     });
// }
// var m = [1, 2, 2, 3, 5], n = [2, 3, 5]; 
// console.log("checkAvailability", checkAvailability(n, m));