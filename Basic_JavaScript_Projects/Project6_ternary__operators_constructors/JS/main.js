function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}
function Nested_Function() {
    document.getElementById("Nested").innerHTML=Count();
    function Count() {
        var Starting_point=88;
        function Plus_one() {Starting_point+=1};
        Plus_one();
        return Starting_point;
    }
}
class Polygon {
    constructor() {
      this.name = 'hmmm';
    }
  }
  
  const poly1 = new Polygon();
  
  document.write(poly1.name);