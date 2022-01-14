function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {// if its before 12
        Reply = "It is morning time"
    }
    else if (Time >= 12 == Time < 18) {// if it is after 12 but before 6
        Reply = "it is afternoon.";
    }
    else {
        Reply = "It is evening time.";//what it says if its after 6 pm
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}