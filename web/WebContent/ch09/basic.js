
var fruit = "Cjerry";
fruit = ["Cherry", "Strawberry", "Melon"]
document.write("<h1>hello</h>");
document.write("<ul>");
document.wrrite('<li>Apple</li>');
document.wrrite('<li>Banana</li>');
document.wrrite('<li>' + fruit + '</li>');
for(var i=0; i<fruit.length; i++) {
    document.write("<li>" + fruit[i] + "</li>")
}
document.write("</ul>")

// console.log("1");

// var img1 = document.getElementById("img1")
// console.log(img1);


// console.log("2");

function turn_on() {
    var bulbon = 10;
    bulbon = "hello";
    bulbon = document.getElementById("img1");
    bulbon.setAttribute("class", "img")
    bulbon.setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif")
    console.log(bulbon);
}

function turn_off() {
    img = 'screen';
    console.log(img);
    var bulbon = document.getElementById("img1");
    bulbon.setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif")
    
}

turn_off();

console.log(img);