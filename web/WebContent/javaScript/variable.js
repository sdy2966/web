//variable

// let num2 = 30;// basic.js 파일의 변수랑 중복되서 에러남.

let numbers = [1,2,3,4,5];
document.write('<h1>Number</h1>');
document.write('<ul>');
let sum = 0;
 for(let i=0; i<numbers.length; i++) {

    document.write('<li>'+numbers[i]+'</li>');
    sum = numbers[i] + sum;
 }
 document.write('<li>합: '+sum+'</li>')
 document.write('</ul>');