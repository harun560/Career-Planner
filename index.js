
  
function display()
{
 
  
document.getElementById("first").innerHTML = document.getElementById("fullname").value;
document.getElementById("second").innerHTML = document.getElementById("age").value;
document.getElementById("third").innerHTML = document.getElementById("industry").value;

}
  
function netSalary() {
    
    let grossSal = document.getElementById("Gross").value;
    let netSal;
    // Calculate BMR
    if (grossSal >=100000) {
		netSal = grossSal - (grossSal* 0.30)
        netSal=  "$"+netSal;

		
    } else if (grossSal <100000 &&  grossSal>70000) {
        netSal = grossSal - (grossSal* 0.22);
    }

    else if (grossSal <70000 &&  grossSal>40000) {
        netSal = grossSal - (grossSal* 0.22);
        netSal=  "$"+netSal;
    }
    else {
        netSal = grossSal - (grossSal* 0.15);
    }
    
    document.getElementById("fourth").textContent = netSal;
    return false;
}



