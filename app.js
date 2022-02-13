//staring cart
function updateProductNumber(product, price, isIncreasing) {
  const caseInput = document.getElementById(product + "-number");
  let productNumber = caseInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  caseInput.value = productNumber;
  //   total product value
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = productNumber * price;
}
// phone increasing and decreasing
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

// case increaseing and decreasing
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
