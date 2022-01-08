function concat_method() {
    var part_1="I have made this";
    var part_2=" into a complete sentence.";
    var whole= part_1.concat(part_2);
    document.getElementById("fish").innerHTML=whole;
}
function slice_method() {
    var Sentence="All work and no play makes Johnny a dull boy.";
    var Section=Sentence.slice(27,33);
    document.getElementById("slice").innerHTML=Section;
}
function string_Method() {
    var x = 192;
    document.getElementById("Numbers_to_string").innerHTML=x.toString();
}
function precision_Method() {
    var z =1298.3012987376112;
    document.getElementById("Precision").innerHTML=z.toPrecision(10);
}