//variable.js

var num1 = 10.5;
var num2 = 20;
console.log(typeof num1);

num1 = '10.05';
num2 = '20.45';
console.log(typeof num1);

var num3 = null;
num3 = {name: 'sung', age: 20}
console.log(typeof num3);
console.log(num3.name);
console.log(num3.age);

num3 = true;
console.log(typeof num3);
num3 = 0; //0값이거나 null값이 되면 자스에서는 비교구문에서 거짓이 나온다.
if(num3 > 20) {
    console.log('참');
} else {
    console.log('구라');
}

numbers = [];
numbers[0] = 10;
numbers[1] = 20;
// numbers[2] = 'hello'; //자스에서는 배열에 아무 타입이나 받아올 수 있다. 근데 별로 추천은 안함
numbers[2] = 30;

for(var i = 0; i<numbers.length; i++) {
    console.log(numbers[i]);
    result += numbers[i];
}
console.log('합계: ' + result)

document.write("<table border='1'>");
for(var i=1; i<10; i++) {
    //2 * 1 = 2
    document.write('<tr><td>2*' + i + '</td><td class="equals"> = </td><td>' + (2*i) + '</td>');
    // console.log('2*' + i + '='+ (2*i));
    // document.write('2*' + i + '='+ (2*i)+'<br>');    
    
}
document.write('</table>');

var n1 = window.prompt('첫번째 값: ');
var m2 = window.prompt('두번째: ')
console.log(n1+ '을 입력하였습니다');

console.log(parseFloat(n1) + parseInt(n2));

var result = parseFloat(num1)+ parseFolat(num2);
console.log(result);
