var number = 1; // 宣告變數記得要加 var，別忘了每一行程式碼最後都要加上分號「；」
console.log("用 number 印出的數字: " + number); // 會印出 number 的數字：1

var integer = 7; // 這是一個整數的數字
var floatingPoint = 4.3; // 這是一個浮點數的數字
console.log("Integer: " + integer); // 7
console.log("Floating Point: " + floatingPoint); // 4.3

var stringOne = "This is a string"; // 字串可以使用雙引號包圍
var stringTwo = 'This is a string'; // 字串可以使用單引號包圍
console.log("用雙引號的印出的字串: " + stringOne); // This is a string
console.log('用單引號的印出的字串: ' + stringTwo); // This is a string

var stringWithSingleQuotation = "This is 'THE' string"; // 如果想在字串內加入單引號，則字串使用雙引號包圍
var stringWithDoubleQuotation = 'This is "THE" string'; // 如果想在字內加入雙引號，則字串使用單引號包圍
console.log("字串裡用單引號: " + stringWithSingleQuotation); // This is 'THE' string
console.log("字串裡用雙引號: " + stringWithDoubleQuotation); // This is "THE" string

var stringWithSlash = "This is \"THE\" string"; // 如果想在字內加入同樣的引號，可以在引號前加上「斜線」
console.log("字串裡用引號: " + stringWithSlash); // This is 'THE' string

var boolean = true; // 布林只有兩個值：true （是）或 false（非）
boolean = false; // 重設原本的布林，記得 true 和 false 是關鍵字
console.log("boolean: " + boolean); // false

var string = "123";
var number = parseInt(string); // 把字串轉成數字
console.log(number); //123

var float = "123.123";
var string = float.toString(); // 把數字轉成字串
console.log(string); //123.123

var undefinedVariable; // 如果沒有設定，變數的值就是 undefined（未定義）
var nullVariable = null; // null（空值）不會自動產生，必須自行設定變數為 null
console.log("這是未定義的變數: " + undefinedVariable); // undefined
console.log("這個變數內容為空值: " + nullVariable); // null

// Part 2. Arithmetic Operators
var num = 42; // 這裡的「=」會把 42 放入名稱為 num 的變數里
console.log("設定 num 為： " + num); // 84

num = num * 2; // num 乘 2（ 42 乘 2 ），再放入 num
console.log("num = num * 2 , 結果: " + num); // 84

num = num / 2; // num 除 2（ 82 除 2 ），再放入 num
console.log("num = num / 2 , 結果: " + num); // 42

num = num - 1; // num 減 1（ 42 減 1 ），再放入 num
console.log("num = num - 1 , 結果: " + num); // 41

num = num + 1; // num 加 1（ 42 加 1 ），再放入 num
console.log("num = num + 1 , 結果: " + num); // 42

num = num % 3; // num 除 3 的餘數（ 43 除 3 沒有辦法整除的餘數 ），放入 num
console.log("num = num % 3 , 結果: " + num); // 1


num = 42; // 重新設定 num 數值為 42
console.log("重新設定 num 為： " + num); // 42

num += 1; // num = num + 1，另一種寫法，這種寫法也可以把 1 換成其他數字
console.log("num += 1 , 結果: " + num); // 43

num++; // num = num + 1，另一種寫法
console.log("num++ , 結果: " + num); // 44

num--; // num = num - 1 
console.log("num-- , 結果: " + num); // 43

var friend = "Bernard";
var greetings = "Hello! ";
console.log(greetings + friend); // String Concatenation，串接兩個字串

var codeName = "Soldier " + 76; // String Concatenation，串接字串和數字，結果是字串
console.log('"Soldier" + 76: ' + codeName); // Soldier 76

var boolean = true; // 設定變數為 true 的布林值
boolean = !boolean; // 用「!」把 true 變成 false
console.log("讓 true 變 false " + boolean); // false

// Part 3. Comparison Operators
var result; // 用 result 這個變數來處理接下來的判斷

result = 5 == 5; // 5 是否等於 5
console.log("5 == 2 , 結果: " + result); // true

result = 5 > 5; // 5 是否大於 5
console.log("5 > 5 , 結果: " + result); // false

result = 5 >= 5; // 5 是否大於等於 5
console.log("5 >= 5 , 結果: " + result); // true

result = 5 < 5; // 5 小於 5
console.log("5 < 5 , 結果: " + result); // false

result = 5 <= 5; // 5 是否小於等於 5
console.log("5 <= 5 , 結果: " + result); // true

// 注意：以下範例有在切換使用單引號和雙引號
result = 42 === 42; // 同時比較 42 和 42 的值和種類
console.log("42 === 42 , 結果: " + result); // true

result = 42 == "42"; // 只是比較 42 和 "42" 的值，注意：42 是數字，"42" 是字串
console.log('42 == "42" , 結果: ' + result); // true

result = 42 === "42"; // 同時比較 42 和 "42" 的值和種類
console.log('42 === "42" , 結果: ' + result); // false

// Part 4. Logical Operators
// 使用 NOT 符號進行反向判斷  
var answer = false;
if (!answer) { // answer 是 false 才會執行
    console.log("反向判斷，答案是： " + answer);
}
answer = !false; // 反轉布林，true 變 false、false 變 true
console.log(answer);

result = (5 == 5) && (2 > 2); // 5 是否等於 5，2 小於 2，兩個條件是否同時成立？
console.log("(5 == 5) && (2 > 2) , 結果: " + result); // false

result = (5 == 5) || (2 > 2); // 5 是否等於 5，2 小於 2，兩個條件是否其中一個成立？
console.log("(5 == 5) || (2 > 2) , 結果: " + result); // true