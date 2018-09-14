function tracker() {
    var sideOne = parseInt(document.getElementById("side1").value);
    var sideTwo = parseInt(document.getElementById("side2").value);
    var sideThree = parseInt(document.getElementById("side3").value);
    var ans=document.getElementById("answer");
    var image = document.getElementsByTagName("img");
    if((sideOne + sideTwo)>sideThree && (sideOne + sideThree)>sideTwo && (sideTwo + sideThree)>sideOne){
        if(sideOne === sideTwo && sideTwo === sideThree){
            ans.textContent = "Equilateral Triangle" 
            
        }
        else if(sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree){
            ans.textContent = "Isosceles"
        }
        else if(sideOne !== sideTwo && sideTwo !== sideThree && sideThree !== sideOne) {
            ans.textContent= "Scalene" 
            

        }
    
    }else 
        ans.textContent = "not a triangle";
}