function Call_Loop() {
    var Digit = "";
    var X = 1;
    while(X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;// here we are counting to 10 as long as X is less then 11 it will keep adding one to it
}

var Instruments = ["guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]
var Content ="";
var Y;
function for_Loop() {
    for(Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;// im not quite sure whats happening here.
}

function array_Function(){
    var words = [];
    words[0] = "greeting";
    words[1] = "Goodbye";
    words[2] = "command";
    words[3] = "Begging"
    document.getElementById("Array").innerHTML = "Here we are saying " + words[1] + ".";// i made an array with words but it didnt work and idk why.

}

function constant_function() {
    const Musical_Instrument = {type: "guitar", brand:"Fender", color:"blue"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$10000";
    document.getElementById("Constant").innerHTML= "The cost of the " + Musical_Instrument.color + " guitar was " + Musical_Instrument.price;// we made a const called musical instruments then added some properties.
}

var X =13;
document.write(X);// we gave x a function scope and has teh value 13
{
    let X = 33;
    document.write("<br>" + X)// x also has a block scope with the value of 33
}
document.write("<br>" + X);// here we would get 13 cause its outside the block block

let game = {
    Genre: "FPS",
    Platform: "PC, PS, Xbox",
    Name: "Overwatch",
    description : function() {
       return "The game " + this.Name + " is a " + this.Genre + " that is available for " + this.Platform + ".";
    }
}
document.getElementById("Game_Ob").innerHTML = game.description();
// here i tried to make an object with let and it didnt work for some reason as well. It says unexpected identifier in the source tab of dev tools but i dont know what that means.