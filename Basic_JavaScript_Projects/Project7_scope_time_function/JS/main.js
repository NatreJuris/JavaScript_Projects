var x = 10;                 /*GLOBAL VARIABLE*/
function Add_numbers_1() {
    document.write(20+x+"<br>");
}
function Add_numbers_2() {
    document.write(x+100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_3() {
    var z= 10;                  /*LOCAL VARIABLE*/
    document.write(20+z+"<br>");
}
function Add_numbers_4() {
    document.write(z+100);
}
Add_numbers_3();
Add_numbers_4();            /*ERROR FOR CONSOLE*/
console.log(Add_numbers_4);
function bottom() {             /*IF STATEMENT*/
    if (new Date().getHours() <20) {
        document.getElementById("top").innerHTML="hey";
    }
}
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote="You are old enough to vote!";
    }
    else {
        Vote="You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML= Vote;
}
function Time_Function() {          /*TIME FUNCTION*/
    var Time=new Date().getHours();
    var Reply;
    if(Time<12==Time>0) {
        Reply= "It is morning time!";
    }
    else if (Time>=12==Time<18) {
        Reply= "It is afternoon.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}