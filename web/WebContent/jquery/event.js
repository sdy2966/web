 // $(document).ready(function() {
        //     $.ajax({
        //         url: '../MOCK_DATA.json',
        //         success:function (data) {
        //             let ulTag = $('<ul />');
        //             console.log(data);
        //             for(let i=0; i<data.length; i++) {
        //                 let liTag =  $('<li />').html(data[i].id);
        //                 ulTag.append(liTag);
        //             }
        //             $('body').append(ulTag);
        //         }
        //     })
        // })
// -----------------------------------------------------------------

$(document).ready(function() {
    $.ajax({
        url: '../MOCK_DATA.json',
        success:function (data) {
            let table = [];
            table.push('<table border="1">');
            console.log(data);
            for(let i=0; i<data.length; i++) {
                table.push('<tr>');
                    for(field in data[i]) {
                        table.push('<td>'+ data[i][field]+'</td>');
                    }
                    table.push('</tr>');
            }
            table.push('</table>');
            let tag = table.join('');
            $('body').himl(tag);
        }
    })
})


// -----------------------------------------------------------------
// $(document).ready(function() {
//     $.ajax({
//         url: '../MOCK_DATA.json',
//         success:function (data) {
//             console.log(data)
//             let tbl = $('<table border="1" />');
//             for(json of data) {
//                 let trTag = $('<tr />');
//                 for(id in json) {
//                     let tdTag = $('<td />').html(json[id]);
//                     trTag.append(tdTag);         
//                 }
//                 tbl.append(trTag);
//             }
//             $('body').append(tbl);
//         }

//     })
// })
// -----------------------------------------------------------------
// $(function () {
//     let table = [];
//     table.push('<ul>');
//     table.push('<li>Apple</li>');
//     table.push('<li>Bananan</li>');
//     table.push('<li>Cherry</li>');
//     table.push('</ul');
//     let tag = table.join(' ');
//     console.log(tag);
//     $('body').html(tag);
// })
// -----------------------------------------------------------------

$.ajax({
    url: '../MOCK_DATA.json',
    type: 'get',
    data: 'name=hong&age=20',//페이지
    dataType: 'json',
    success: function (data) {
     let arry = data;
     let ulTag = $('<ul />')
     $(arry).each(function (idx, obj) {
         console.log(idx, obj);
         ulTag.append($('<li />').html('<a href="#">' + obj.first_name + '</a>'));
         ulTag.append(
             $('<li />').append(
                 $('<a />').html(obj.first_name)
                           .attr('href','get.jsp?name='+ obj.first_name)
                 )
         );
     });
     $('body').append(ulTag);
    },
    error:function(reject) {
        console.error(reject.status, reject.statusText);
    }
});