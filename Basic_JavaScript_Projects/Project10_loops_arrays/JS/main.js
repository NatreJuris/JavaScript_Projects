function count_To_Ten() {
    var Digit="";
    var x=1;
    while (x<11) {          /*WHILE LOOP*/
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}
const str = 'Life, the universe and everything. Answer:';
console.log(`${str} ${str.length}`);
var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_Loop() {
    for (Y=0; Y< Instruments.length; Y++) {     /*FOR LOOP*/
    Content += Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}
function array_Function() {
    let thing=[];                   /*ARRAY*/
    thing[0]="sleeping";
    thing[1]="playing";                 /*LET*/
    thing[2]="eating";
    thing[3]="purring";
    document.getElementById("Array").innerHTML="The thing is "+ thing[3] +".";
}
function constant_function() {
    const earth={"planet":"inhabitable"};
    earth.planet="inhabitable";
    document.getElementById("Constant").innerHTML="the earth is "+earth+".";
}
let car = {
    make:"Dodge",
    model:"Viper",
    year:"2021",
    color:"red",
    description: function() {
        return "the car is a " + this.year + this.color + this.make + this.model;
    } 
};
document.getElementById("car_Object").innerHtML=car.description();
