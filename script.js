function tracker() {
    var sideOne = parseInt(document.getElementById("side1").value);
    var sideTwo = parseInt(document.getElementById("side2").value);
    var sideThree = parseInt(document.getElementById("side3").value);
    if((sideOne + sideTwo)>sideThree && (sideone + sideThree)>sideTwo && (sideTwo + sideThree)>sideOne){
        if(sideOne === sideTwo && sideTwo === sideThree){
            ans.textContent = "Equilateral Triangle"
        }
        else if()
    }
}