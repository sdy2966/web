let names = []; //new Array();
        names[0] = 'KIM';
        names.push('김민주');//배열의 제일 마지막 요소에 대이터삽입
        names.push('박소연');
        names.unshift('김다희');//배열의 맨앞ㅇ의 인덱스에 새 데이터 삽입.


        delete names[0]; 
        names.pop();//제일 뒤에있는 요소부터 제거.
        names.shift();//제일 앞쪽 요소부터 제거

        for (let i=0; i<names.length; i++) {
            console.log(i, names[i]);
        }
        let ns = names.join('-');
        console.log(ns);

        ns = names.reverse();//reverse를 사용하여 또 다른 배열을 만들어줌.
        console.log(ns);
        console.log(names);//리버스는 원본 자체를 바꾸어줌
        names.reverse();
        console.log(names);//다시 리버스~
        names.push('민주민주');

        ns = names.slice(1,2);//1부터 2사이의 값을 잘라내겠다.(원본은 건들이지 않음)
        console.log(ns);
        console.log(names);