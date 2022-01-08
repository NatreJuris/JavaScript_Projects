//after attempting to use the fontcolor cammand and researching, it would appear this is no longer used in js//
window.alert('hello, world');
var taste = 'tongue', smell='nose',hear='ear',feel='hand',see='eye';
document.write(see+feel); //and expression adding see and feel//
function myFunction() {
    var sentence ="test";
    sentence +="testing";
    document.getElementById("concatenate").innerHTML=sentence;
}
function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML="2+2="+ addition;
}
function subtraction() {
    var Subtraction= 5-2;
    document.getElementById("Math1").innerHTML="5-2="+ Subtraction;
}
function multiplication() {
    var simple_Math= 6*8;
    document.getElementById("Math2").innerHTML="6*8="+ simple_Math;
}
function division() {
    var simple_Math= 48/6;
    document.getElementById("Math3").innerHTML="48/6="+ simple_Math;
}
function modulus_Operator() {
    var simple_Math= 25 % 6;
    document.getElementById("Math4").innerHTML= "When you divide 25 by 6 you have a remainder of: "+ simple_Math;
}
function negation_Operator() {
    var x = 10;
    document.getElementById("Math5").innerHTML= -x;
}
window.alert(Math.random() *100);
function Math_sqrt() {
    var Math_sqrt= 64;
    document.getElementById("sqrt").innerHTML= Math.sqrt(64);
}
var x=5;
x++;
document.write(x);
var z=5.25;
z--;
document.write(z);
function my_Dictionary() {
    var Animal= {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}