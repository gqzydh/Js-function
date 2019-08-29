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

// 判断数组元素中是否存在某个值
function checkAvailability(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal;
    });
}
var m = [1, 2, 2, 3, 5], n = [2, 3, 5]; 
console.log("checkAvailability", checkAvailability(n, m));