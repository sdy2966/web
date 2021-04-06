
var num1; // undefined
num1 = 10; // number
num1 = 'hello'; // string
num1 = false; // boolean
num1 = null;  //object
num1 = {
    name: 'Hong',
    age: 20
}
num1 = []; //object
num1[0] = 10;
num1[1] = 20;
num1[2] = 'Hello';

num1 = function() { // function
    window.alert('Hello'); //창띄우기 
}
console.log(num1());
// console.log(typeof num1);

let num2;
num1 = 10;

{
let num2; // let은 중복선언ㅇ이 안됨. 그러나 블록 안에 넣었기 때문에 가능
num2 = 20;
console.log('{ num2: }' + num2);
}
num2 = 15;
console.log('num2: ' + num2);

const num3 = 77;
num3 = 78;

