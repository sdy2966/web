
var userEmail= prompt("이메일 주소를 입력하세요.","");
var arrUrl = [".co.kr",".com", ".net", ".or.kr",".go.kr"];

var check1 = false;
var check2 = false;

if(userEmail.indexOf("@")> 0 ) {check1  = true;}

for(var i=0; i<arrUrl.length; i++) {
    if(userEmail.indexOf(arrUrl[i])>0){
        check2 =true;
    }
}
if (sheck1&& check2) {
    document.write(userEmail);
} else {
    alert("이메일 형식이 잘못되었습니다.");
}