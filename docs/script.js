// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // var numericExpression = /^[0-9]+$/;
  var passLength = parseInt(prompt("How long would you like your password to be?\nPlease enter a value between 8 and 128", "8"));
  var confirmLowercase = confirm("Do you want to use lowercase characters?")
  var confirmUppercase = confirm("Do you want to use uppercase characters?");
  var confirmNumeric = confirm("Do you want to use numbers?");
  var confirmSpecial = confirm("Do you want to use special characters?");

  var confirmArray = [confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecial];
  var checkFalse = confirmArray.every(confirmValidation);

  function confirmValidation (value) {
    return value === false;
  }

  if (checkFalse) {
    alert("Please select at least one character type.")
  };

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
