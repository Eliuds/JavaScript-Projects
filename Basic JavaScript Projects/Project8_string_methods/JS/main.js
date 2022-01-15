function full_sentence() {// here im combing these 4 variables to make a complete sentence.
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Esy").innerHTML = whole_sentence;
}

function slice_Method() {// this pinpoints a certain word in a sentence and picks it.
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}
function string_Method() {
    var X=182;
    document.getElementById("String").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.30129873;
    document.getElementById("Precision").innerHTML = X. toPrecision(10);
}