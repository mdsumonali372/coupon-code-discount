document.getElementById("apply-btn").addEventListener("click", function () {
  const getInputField = document.getElementById("input-field");
  const getInputValue = parseFloat(getInputField.value);
  getInputField.value = "";
  //   get text value
  const getTextValueById = document.getElementById("total-price");
  //   const getTextValue = parseFloat(getTextValueById.innerText);
  // discount value
  const discountValue = document.getElementById("dicount-field").value;
  document.getElementById("dicount-field").value = "";
  if (discountValue == "DISC30") {
    const total = getInputValue - getInputValue * 0.3;
    console.log(total);
    getTextValueById.innerText = total;
  } else {
    getTextValueById.innerText = getInputValue;
  }
});
