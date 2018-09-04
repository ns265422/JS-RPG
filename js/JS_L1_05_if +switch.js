var number = 2; // ！注意！請自行切換數字觀察結果
// 本範例只有提供等於和數字的比較判斷式，請自行修改變數與判斷內容作為練習
// 在 if / else if / else 流程控制小括號裡條件成立下，大括號的程式才會被執行

// 使用 if 判斷是否執行程式碼  
if (number == 5) {
    console.log("X is 5"); // number == 5 結果為 true 時才會執行
}
// if 和 else 的二分法判斷式：A 或非 A
if (number == 5) {
    console.log("number is 5"); // number == 5 結果為 true 時才會執行
} else {
    console.log("number is not 5"); // number == 5 結果為 false 時才會執行
}
// if／else if 的判斷兩種情況：A 或 B
if (number == 5) {
    console.log("number is 5"); // number == 5 結果為 true 時才會執行
} else if (number == 4) {
    console.log("number is 4"); // number == 4 結果為 true 時才會執行
}
// if／else if／else 的三分法判斷式：A 或 B 或「非A非B」
if (number == 5) {
    console.log("number is 5"); // number == 5 結果為 true 時才會執行
} else if (number == 4) {
    console.log("number is 4"); // number == 4 結果為 true 時才會執行
} else {
    console.log("number is not 4 nor 5"); // 結果皆為 false 時才會執行
}
// 多個 else if 參雜其中的邏輯判斷式
if (number == 5) {
    console.log("number is 5");
} else if (number == 4) {
    console.log("number is 4");
} else if (number == 3) {
    console.log("number is 3");
} else if (number == 2) {
    console.log("number is 2");
} else if (number == 1) {
    console.log("number is 1");
} else {
    console.log("number is not 1 to 5");
}
// Part 2. 使用 switch case 進行流程控制
console.log("以下是 switch case 的程式碼：");
// 將上面的程式碼轉換成 switch 的寫法，這個方法只適用於「一個變數」
switch (number) { // switch 裡帶入變數
    case 5: // 如果 case 後面的數字等同於 number 內的數字，裡面的程式碼才會被執行
        console.log("number is 5 ");
        break; // break 會退出 switch，如果沒有退出，會往下進行 case 4 的判斷
    case 4:
        console.log("number is 4 ");
        break;
    case 3:
        console.log("number is 3 ");
        break;
    case 2:
        console.log("number is 2 ");
        break;
    case 1:
        console.log("number is 1 ");
        break;
    default: // default 是預設，如果沒有任何一個 case 成立就會執行，其效果和 else 一樣，用來判斷不屬於以上所有可能性的數字
        console.log("number is not 1 to 5");
}
// Part 3. 使用「？」進行流程控制
var x = 3;
// ？ 左邊是判斷式，右邊是執行結果；接著「：」左邊是 true 要執行的結果，右邊是 false 要執行的結果
x > 2 ? console.log("Yes") : console.log("No");