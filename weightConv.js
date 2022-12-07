document.getElementById("submit2").addEventListener("click", weightConverter);

function weightConverter(){
    var pounds = parseInt(document.getElementById("pounds").value );
    var kilograms = (pounds) * 0.453592;
    var n = kilograms.toFixed(0);
    document.getElementById("result2").innerHTML = "Your Weight in Kg is " + n;
    }