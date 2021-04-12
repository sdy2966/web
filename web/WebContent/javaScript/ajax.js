let xhtp = new XMLHttpRequest(); //서버랑 데이터랑 주고 ㅅ받는 역할
xhtp.onreadystatechange = function() {
    // console.log(xhtp.readyState, xhtp.status);
    if(xhtp.readyState == 4 && xhtp.status == 200) {
        console.log(xhtp.responseText);
        let data = JSON.parse(xhtp.responseText);
        console.log(data);

        // let bdy = document.getElementsByTagName('body');
        // let tbl = document.createElement('table');
        // tbl.setAttribute('border',1);
        // bdy[0].appendChild(tbl);

        // tr = document.createElement('tr');
        // th = document.createElement('th');
        // tr.appendChild(th);

        // for(title of titls) {
        //     text = document.createTextNode(title);
        // }

       for (obj of data) { //0,~.....14
           for(field in obj) { // id,first_name, last_name...
            console.log(field, obj[field])
           }
       }
    }
}
xhtp.open('get', 'MOCK_DATA.json');
xhtp.send();