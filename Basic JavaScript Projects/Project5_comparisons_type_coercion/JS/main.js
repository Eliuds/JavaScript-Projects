document.write(typeof 32);

document.write("10" + 23);
function myFunction() {
    document.getElementById("test").innerHTML= isNaN('007');
}

document.write(3E405);// positive infinity 
document.write(-4e1233);// negative infinity

document.write(10>2);// shows true 10 is greater then 2
document.write(2>10);// shows false 2 is smaller then 10

console.log(3 + 5);// showws the sum 8 in console

console.log(3>5); // displays false in console 3 is not bigger then 5

document.write(23 == 23);// display true same value

document.write(23 == 1);// display false different values not equal

x = 12;
y = 12;
document.write( x === y);// display true

x = 28;
y = " 28";
document.write(x === y);// displays false different data types even tho both are 28

x = 12;
y = "we";
document.write(x === y);// display false different data types

x = 12;
y = 13;
document.write(x === y);// this should display false even tho they are the same type of data they do nat have the same value

document.write(5>2 && 10>2);// display true
document.write(2>5 && 5>2);// this should display false

function not() {
    document.getElementById("Not").innerHTML = !(2>3);// displays true when you click on it cause 2 is not greater then 3
}

document.write(2>1|| 13>2);// should display true cause one is true