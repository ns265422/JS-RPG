var numbers = [1, 3, 5]; // 數字（Number）陣列
var names = ["Arch", "Bernard", "Ellen"]; // 字串（String）陣列
console.log("Number array: " + numbers); //Number array: 1,3,5
console.log("String array: " + names); //String array: Arch,Bernard,Ellen

// 陣列的索引位置從 0 開始  
console.log("numbers[0]: " + numbers[0]); //numbers[0]: 1
console.log("names[1]: " + names[1]); //names[1]: Bernard

// push 方法會把新的內容加在陣列的最後方
numbers.push(2); // 在 numbers 陣列的末端加上 2
console.log("numbers 陣列新增了 2: " + numbers); //numbers 陣列新增了 2: 1,3,5,2
names.push("Claire"); // 在 names 陣列的末端加上 Claire
console.log('names 陣列新增了 "Claire": ' + names); //names 陣列新增了 "Claire": Arch,Bernard,Ellen,Claire

var admins = ["Sali", "Lilian"]; // 新增 admins 陣列  
var alphacamp = names.concat(admins); // 把 names 和 admins 合併，放入 alphacamp 陣列
console.log("合併了 names 和 admins 的 alphacamp: " + alphacamp); //合併了 names 和 admins 的 alphacamp: Arch,Bernard,Ellen,Claire,Sali,Lilian

numbers.splice(3);
console.log("移除了第四個內容開始（包含）的所有內容: " + numbers); //移除了第四個內容開始（包含）的所有內容: 1,3,5

numbers = numbers.concat([4, 5, 6, 7, 8, 9, 10]); // 為了展示 splice 的功能，新增一連串連續的數字
console.log("移除陣列第四個內容開始（包含）後的兩個內容");
console.log("移除陣列內容前 : " + numbers); //移除陣列內容前 : 1,3,5,4,5,6,7,8,9,10

numbers.splice(3, 2); // 移除的第四個內容開始的兩個內容，故會移除掉 4 和 5
console.log("移除第四個內容和第五個內容後 : " + numbers); //移除第四個內容和第五個內容後 : 1,3,5,6,7,8,9,10

numbers.splice(3, 0, 4, 5); // 把 4 和 5 再從位置 3 中加入回去
console.log("在第三個內容的位置重新加入 4 和 5: " + numbers); //在第三個內容的位置重新加入 4 和 5: 1,3,5,4,5,6,7,8,9,10

// Part 2. Map
var map = new Map(); // 宣告一個新的 Map 物件
map.set("name", "Arch"); // 使用 set 方法把 key 和 value 加入 Map

var name = map.get("name"); // 使用 get 方法，透過 key 把 value 拿出來
console.log("這是從 map 裡拿出來的 name： " + name); //這是從 map 裡拿出來的 name： Arch

map.delete("name"); // 使用 delete 方法把對應到這個 key 的 value 從 map 移除
console.log("這是 map 裡 key 和 value 的數量： " + map.size); //這是 map 裡 key 和 value 的數量： 0