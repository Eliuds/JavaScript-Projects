function add() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2+2 =" + addition;// adding
}

function subtraction() {
    var Subtraction= 5-2;
    document.getElementById("math2").innerHTML ="5-2 =" + Subtraction; // subtracting
}

function multiplication() {
    var simple_Math = 6*8;
    document.getElementById("math3").innerHTML = "6 x 8 =" + simple_Math// multiplying
}

function division() {
    var simple_Math = 48/6;
    document.getElementById("math4").innerHTML = "48 / 6 =" + simple_Math; // dividing
}

function more_math() {
    var simple_Math =(1 + 2) * 29 / 5 -7;
    document.getElementById("math5").innerHTML = "(1 + 2 ) * 29 / 5 - 7 =" + simple_Math;// using multiple operations
}

function Modulus() {
    var simple_Math = 23 % 4;
    document.getElementById("math6").innerHTML = "23 % 4 remainder of: " + simple_Math; // getting what remains
}

function negation() {
    var x = 34;
    document.getElementById("math7").innerHTML = -x; // making 34, -34
}

var x = 34;
x--;
document.write(x); //incrementing x

var x =34;
x++;
document.write(x) // decrementing x

window.alert(Math.random() * 203); // giving an alert box wit a random number between 0 and 203

document.getElementById("poke").innerHTML = Math.round(5.235); // this shoul display the number 5 its rounding to the nearest whole number