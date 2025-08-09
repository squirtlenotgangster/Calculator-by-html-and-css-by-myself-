function calculate() {
  const type = document.getElementById("type").value;
  const P = parseFloat(document.getElementById("principal").value);
  const R = parseFloat(document.getElementById("rate").value);
  const T = parseFloat(document.getElementById("time").value);
  const resultBox = document.getElementById("result-box");

  if (isNaN(P) || isNaN(R) || isNaN(T)) {
    resultBox.textContent = "Please fill in all fields correctly.";
    return;
  }

  if (type === "Simple") {
    const SI = (P * R * T) / 100;
    const total = P + SI;
    resultBox.textContent = `Simple Interest: ₹${SI.toFixed(2)} | Total: ₹${total.toFixed(2)}`;
  } else {
    const n = parseInt(document.getElementById("frequency").value);
    const r = R / 100;
    const amount = P * Math.pow(1 + r / n, n * T);
    const CI = amount - P;
    resultBox.textContent = `Compound Interest: ₹${CI.toFixed(2)} | Total: ₹${amount.toFixed(2)}`;
  }
}

// Show/hide frequency based on type
document.getElementById("type").addEventListener("change", function () {
  const compoundFields = document.getElementById("compound-fields");
  if (this.value === "Compound") {
    compoundFields.style.display = "block";
  } else {
    compoundFields.style.display = "none";
  }
});

