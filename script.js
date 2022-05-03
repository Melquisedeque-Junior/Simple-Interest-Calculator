

function compute() {
    var principal = document.getElementById("principal").value;
    checkData();
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("amount1").innerText = "If you deposit:" + principal;
    document.getElementById("amount2").innerText = "at an interest rate of:" + rate + "%";
    document.getElementById("amount3").innerText = "You will receive an amount of:" + interest;
    document.getElementById("amount4").innerHTML = "in the year:" + year;
}
 
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";

}

function checkData(){
    var principal = document.getElementById("principal").value;
    if (principal=="" || principal<0){
        alert("Enter a positive number!");
        principal.focus();
        return false;
    }
    else{
        return true;
    }
}

function myAlert(){
    alert("Function Fired!");
}