// Part 1. while
console.log("以下是 while 迴圈的程式碼：");
var times = 1; // times 預設是 1
while (times < 5) { // 當 times 小於 5 時執行，小於 5 即 4
    console.log(times); // 1,2,3,4
    times++; // 每次遞增 1
}

console.log("以下是 do while 迴圈的程式碼：");
do { // 至少會執行一次
    console.log(times); // 4
    times++; // 每次遞增 1
} while (times < 5) // 當 times 小於 5 時執行，小於 5 即 4

console.log("使用 while 迴圈列印出所有 nums 的內容: ");
var nums = [1, 3, 5, 7, 9];
var i = 0;
while (i < nums.length) {
    console.log(nums[i]); // 印出所有內容
    i++;
}

// Part 2. for
console.log("以下是 for 迴圈的程式碼：");
for (var i = 0; i < 5; i++) { // i 初始為 0，當 i 小於 5 時執行，每次 i 遞增 1
    console.log(i); //0,1,2,3,4
}

console.log("使用 for 迴圈列印出所有 nums 的內容: ");
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]); // 印出所有內容
    i++;
}

// Part 3. forEach
console.log("使用 forEach 迴圈列印出所有 nums 的內容: ");
// forEach 會把每個變數帶入一個 function 處理，其中 value 和 index 必須是在固定的資料位置
nums.forEach(function(value, index) {
    console.log("這是第 " + index + " 個內容： " + value);
});

console.log("使用 forEach 迴圈列印出所有 map 的內容: ");
// 宣告一個新的 Map 物件 
var map = new Map();
// 依序把 key 和 value 的資料放入 Map 物件裡
map.set("name", "Arch");
map.set("age", 29);
map.set("job", "Engineer");
// 預先寫好 function
function print(value, key) {
    console.log("Key " + key + " 的 value 是: " + value);
}
// 使用 forEach 對所有 Map 裡的資料進行一次處理， foreach 裡必須帶入一個 function，function 傳入的第一個資料會是 value，而第二個資料會是 key
map.forEach(print);

console.log("使用 for in 列印出所有 Array 的 index: ");
var nums = [1, 3, 5, 7, 9]
for (var index in nums) {
    console.log(index); // 0, 1, 2, 3, 4
}
console.log("使用 for in 列印出所有 Array 的內容: ");
for (var index in nums) {
    console.log(nums[index]); // 1, 3, 5, 7, 9
}

console.log("使用 for of 列印出所有 Array 的內容: ");
for (var num of nums) {
    console.log(num); // 1, 3, 5, 7, 9
}

console.log("使用 for of 列印出所有 map 的內容: ");
for (let [key, value] of map) {
    console.log(key + " : " + value);
}