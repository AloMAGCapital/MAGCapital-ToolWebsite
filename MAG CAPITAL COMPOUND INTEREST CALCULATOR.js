// Formula: A = P(1 + r/n)^nt + PMT((1 + r/n)^nt - 1)/(r/n)
const btn = document.getElementById("calculate-button");
btn.addEventListener("click", calculate);
const ctx = document.getElementById('myChart');
let currChart;

function calculate() {
// Formula: A = P(1 + r/n)^nt + PMT((1 + r/n)^nt - 1)/(r/n)
let P = Number(document.getElementById("starting-balance").value);
let R = Number(document.getElementById("interest-rate").value)/100;
let N = Number(document.getElementById("compound").value);
let T = Number(document.getElementById("years").value);
let PMT = Number(document.getElementById("contribution").value);

let temp = Math.pow((1 + R/N), N*T);
let result1 = P*temp;
let result2 = PMT*(temp -1)/(R/N)
let result = (result1 + result2).toFixed(2);
document.getElementById("result").innerText = result;

if (currChart != null) {
currChart.destroy();    
}
currChart = new Chart(ctx, {
type: 'bar',
data: {
labels: ["Without Interest", "Interest"],
datasets: [{
label: "Savings",
data: [P + PMT*N*T, result],
borderWidth: 1
    }]
  },
options: {
scales: {
y: {
beginAtZero: true
      }
    }
  }
});
}
IUI