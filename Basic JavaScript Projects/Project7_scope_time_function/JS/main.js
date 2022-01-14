var X = 14; // x is a global variable with the value of 14
function Add_numbers_1() {
    document.write(40 + X + "<br>");// adding 40 and x(14)
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");// adding x and 100
}
Add_numbers_1();// displaying the functions
Add_numbers_2();

function Add_numbers_3() {
    var y =23;// giving the local variable y the value 23
    document.write(32 + y + "<br>");
}
function Add_numbers_4() { // this does not work cause the y from earlier was local not global so this y doesnt have a value.
    console.log(y +2);''
}
Add_numbers_3();
Add_numbers_4();

function get_date(){
    if(new Date().getHours()<20) {  // if it is before 8 p.m it will display this
        document.getElementById("Hi").innerHTML = "Hi how you doing";
    }
}

function mystatement(){
    if(5<10){
        document.getElementById("Tr").innerHTML = "Howdy" // if 5 is less then 10 it will display ths
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;// im not sure what value is
    if(Age >= 18) {
        Vote = "You are old enought to vote!";// makes it so if they are 18 or above they are able to vote
    }
    else {
        Vote = "You are not old enough to vote!";// if less thhen 18 years of age they cannot vote
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}