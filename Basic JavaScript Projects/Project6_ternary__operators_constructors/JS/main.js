function VoteFunction() {
    var Age, Can_vote; // declaring 2 variables
    Age = document.getElementById("age").value;// Giving the var Age the id age im not sure what the .value is for.
    Can_vote = (Age >= 18 ) ? "You are too young": "You are old enough";//This code should display that if the age is 18 or above you are able to vote if not you are not able to
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; // im not sure what this is either
}

function count_function() {
    document.getElementById("Nested_Function").innerHTML = Count ();
    function Count() {// creating the function count
        var starting_point = 1;// where the function count will start off
        function Plus_one() {starting_point += 1;}// adding one to wherever count starts
        Plus_one();
        return starting_point;// getting the result
    }
}