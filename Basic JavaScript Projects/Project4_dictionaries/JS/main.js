function DictionaryMy() {// this is my dictionary
    var Games = {
        Type:"FPS",
        Platform:"all",
        Developer:"ubisoft",
        Status:"Ongoing"
    };
    delete Games.Status;
    document.getElementById("dictionary").innerHTML = Games.Status;// deleting this key value pair
}