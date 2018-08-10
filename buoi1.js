// functionName(5);

// //có thể gọi trước hay sau
// function functionName(age){
//     console.log("age: "+age);
// }

// const functionName = function(age){
//     console.log("age: "+age);
// }

// //Trong ES6
// const functionName = (age) => {
//     console.log(age);
// }

// //FUNCTION SCROPE

// //cho biến vào global (nodejs); window(browers):không khai báo var
// var a = 6;
// function print(){
//     //tồn tại trong function nó được khai báo
//     var b = 10;
//     console.log(a);//6
//     console.log(b);//10
// }

// console.log(a);//6
// console.log(b);//undefined


//khai báo var: function scope
function count(num) {
    //var: trong function chỉ chứa một giá trị i duy nhất
    //cuối cùng i =-1 sau vòng => in ra -1 nếu dùng console.log(i);
    for (var i = num; i >= 0; i--) {
        setTimeout(function () {
            console.log(num--);
        }, 1000 * (num - i));
    }
}

//let: block scope dạng {}
function count(num) {
    //mỗi vòng tạo ra một block chứa một i => có nhiều giá trị cho i
    for (let i = num; i >= 0; i--) {
        setTimeout(function () {
            console.log(num--);
        }, 1000 * (num - i));
    }
}

count(5);

//JavaScript: chạy đơn luồng
//callstack: chứa các function cần xử lý, function vào sau => ra trước
//settimeout: mượn từ window
//Web API: settimeout, DOM : 
//không được đưa và call stack ngay mà được đưa vào một callback queue chờ cho đến khi callstack rống

//B sẽ được in ra trước vì A nằm trong WebAPI
setTimeout(function () {
    console.log("A");
}, 0);
console.log("B");

//function as an object

function aRose(){
    console.log("Sweet!");
}
var anotherName = aRose;
typeof(anotherName);
anotherName();

//Call back
//khi mà settimeout xử lý xong thì xử lý hàm callback: logADone
function printA(logADone){
    setTimeout(function(){
        console.log("A");
        logADone();
    },1000);
}

function printB(){
    console.log("B");
}

printA(printB);