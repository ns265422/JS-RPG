 // Part 1. 定義與使用函式
 // 以下是最精簡的 function
 var f = function() { // 記得存放在一個變數里，否則無法使用
     console.log("使用變數存放 function");
 };
 f(); // Function Called，記得要加小括號，不然會印出程式碼
 (function() { // 在 function 前後加上小括號，再在最後分號前後加上開關的小括號，可開啟一次性使用的 function
     console.log("一次性使用的 function");
 })();
 f = function(x) { // 傳入參數版本的 function，之前在 f 變數里的 function 就被取代了
     console.log("Input: " + x);
 };
 f("Value"); // Input: Value
 // 函式最常使用的定義方式
 function multiply(x, y) { // function 後面加上全部小寫的 function name
     return x * y; // 在 JavaScript 裡要回傳值就一定要加上 return
 }
 console.log("5 乘 6: " + multiply(5, 6)); // 用 return 把 multiply 的結果回傳，然後輸出到 console
 // 多重函式：函式裡有函式，並且在函式裡使用內部的函式
 function addSquare(x, y) { // 一般 function name 是 lowerCamelCase 寫法
     function square(num) { // 內部函式：用來計算出數字的平方
         return num * num;
     }
     return square(x) + square(y); // 使用兩次內部函式 square 取得 x 和 y 平方，再加起來
 }
 console.log("10 的平方 + 6 的平方: ", addSquare(10, 6)); // 136；使用 addSquare 輸入 10 和 6
 // Part 2. 使用函式定義和創建物件
 function CreateHero(name, hp, ap) { // 使用 function 創造一個 Hero 物件，創造物件記得是 UpperCamelCase 的寫法
     this.name = name; // this. 表示是這個物件本身
     this.hp = hp; // this.hp 表示是這個物件的屬性 hp
     this.ap = ap; // this.ap = ap 表示把外面傳入的資料 ap 放入這個物件的屬性 ap 裡
     this.status = function() { // 屬性也可以放 function 當著物件的方法使用
         console.log("本英雄名 " + this.name + "，擁有 " + this.hp + "，戰鬥力 " + this.ap);
     };
 }
 var hero = new CreateHero("Bernard", 100, 50); // 創造一個新的物件，記得：創造物件時，前面要加一個 new
 console.log(hero.status()); // 使用 console.log 把 status 方法回傳的字串輸出，記得：使用 function 要加 ()  括號，否則使用 status 只會把程式碼當字串印出，而不是執行
 // Part 3. 使用 class 定義物件
 // ECMAScript 6 ／ 2015 才發行的寫法

 class Hero { // 第一個字母要大寫，UpperCamelCase
     constructor(name, hp, ap) { // constructor 是初始化物件的方法
         this.name = name;
         this.hp = hp;
         this.ap = ap;
     }
     status() { // class 寫法的 method 不需要寫關鍵字 funciton
         console.log("本英雄名 " + this.name + "，擁有 " + this.hp + "，戰鬥力 " + this.ap);
     }
 }
 var hero = new Hero("Arch", 100, 30); // 使用 class 創造物件時，記得：要在前面加一個 new，Hero 會對應到 constructor 去
 console.log(hero.status()); // 使用物件的方法時，間記得：要在後面加上括號 ()
 console.log(hero.name); // JavaScript 可直接存取屬性
 class Mage extends Hero { // 使用 extends 讓 Mage 繼承 Hero 的屬性與方法
     constructor(name, hp, ap, mp) { // 使用繼承的方法設定屬性 
         super(name, hp, ap); // 使用 super 讓 Mage 使用 Hero 的 constructor 去初始化物件
         this.mp = mp;
         super.status(); // 使用關鍵字 super 搭配 方法名稱來使用 Hero 的 status 方法
     }
 }
 var mage = new Mage("Bernard", 100, 30, 10); // 使用繼承的方法設定屬性