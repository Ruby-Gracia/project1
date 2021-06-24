const slider1 = document.getElementById("amount");
const slider2 = document.getElementById("interest");
const slider3 = document.getElementById("year");
const output1 = document.getElementById("demo1");
const output2 = document.getElementById("demo2");
const output3 = document.getElementById("demo3");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
  
}
slider3.oninput = function() {
  output3.innerHTML = this.value;
  
}
const result=document.getElementById("result");
result.style.display="none";

document.getElementById("buttonCalculate").addEventListener("click", computeResults);

function computeResults(e) {  
  result.style.display="block";
  const Amount = slider1.value;
  const Interest = slider2.value;
  const Years = slider3.value;

  const principal = (Amount);
  const CalculateInterest = (Interest) / 100 / 12;
  const calculatedPayments = (Years) * 12;

  //Compute monthly Payment
  //EMI=(p*r*(1+r)^n)/(1+r)^n-1
  const x = Math.pow(1 + CalculateInterest, calculatedPayments);//(1+r)^n
  const monthly = (principal * x * CalculateInterest) / (x - 1);//emi
  const monthlyPayment = monthly.toFixed(2);//emi

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);//emi*n-p

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);//emi*n

  //Show results

  document.getElementById("monthlyPayment").innerHTML = "Rs. " + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "Rs. " + totalInterest;

  document.getElementById("totalPayment").innerHTML = "Rs. " + totalPayment;
    e.preventDefault();
}

//Clear
document.getElementById("buttonClear").addEventListener("click", clearResults);

function clearResults(){
 
  const slider1 = document.getElementById("amount");
  const slider2 = document.getElementById("interest");
  const slider3 = document.getElementById("year");  
  const output1 = document.getElementById("demo1");
  const output2 = document.getElementById("demo2");
  const output3 = document.getElementById("demo3");

  output1.innerHTML = slider1.value;
  output2.innerHTML = slider2.value;
  output3.innerHTML = slider3.value;

  slider1.oninput = function() {
  output1.innerHTML = this.value;
  }
  slider2.oninput = function() {
  output2.innerHTML = this.value;
  }
  slider3.oninput = function() {
  output3.innerHTML = this.value;  
  } 
}
