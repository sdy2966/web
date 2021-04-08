//펑션 정의문
function square(num) {// 펑션 정의 구문을 변수에 담고 그 값을 실행하겠다.
    if(num == null) {
        return 0;
    } else if (num == isNaN(num)) {
        return 0;
    }
    return num*num;
}
let result = square(3);

let fnc = function () {
    return num * num;
}
console.log(fnc(3));// 결과값을 바로 콘솔로그에 출력하겠다.
//표현식/
let fnc = function (num) {
    if(num == null) {
        return 0;
    } else if (num == isNaN()) {
        return 0;
    }
    return num * num;
}
console.log(fnc(3));


let count = 0;
function myFnc() {
    let cnt = 0;
    count++;
    cnt++;
    document.write(count+'<br>')
}//호출 될 때 마다 값이 초기화
myFnc();

let theFnc = function () {
    let cnt = 0;
    count++;
    cnt++;
    document.write(count+'<br>')
}//호출 될 떄 마다 값이 1씩 누적
theFnc();theFnc();theFnc();theFnc();theFnc();//실행하여 호출

let colors = ['yellow', 'salmon', 'royalblue']
        let i = 0;
        function changeColor() {
            let bdy = document.getElementsByTagName('div');
            // bdy = document.getElementById('bdy');// id값을 한건만 가져오겠다
            console.log(bdy);
            bdy[0].style.backgroundColor = colors[i%3];
            i++;

        }
        function map(func, ary) {
            let result = [];
            for (let i = 0; i < ary.length; i++) {
                result[i] = func(ary[i]);
            }
            return result;
        }
        let fun = function (x) {
            return x * x;//뭐라카노..뭐라카노....ㅠ
        }

        let arr = [0,1,2,4];
        let result = map(fun,arr);
        console.log(result);
        //펑션 매개문과 배열을 값으로 받을 수 이싿/

        

        function callFunc(a,b,c) {//매값을 덧샘해ㅛ서 리턴 해주는 펑션
            let sum = 0;
            for(let i=0; i<arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        }
        callFunc(callFunc(2,3,4,5,6,7));

        function callArySum(arr) {
            let sum = 0;
            for(let i=0; i<arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
        let aryy = [1,2,3,4,5]
        callFunc(callArySum(aryy));

        //재귀함수:자기자신을 계속 호출
        let factorial = function fac(num) {
            return num < 2? 1 : num* fac(num-1)
        }
        let result = factorial(3);
        console.log(result);

        function outside(x) {
            function inside(y) {
                return x + y;
            }
            return inside;
        }
        let fn_inside = outside(2);
        let res = fn_inside(3);
        console.log(res);

        res = outside(2)(3);
