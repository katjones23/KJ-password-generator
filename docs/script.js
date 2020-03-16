// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  prompt("How long would you like your password to be?\nPlease enter a value between 8 and 128", "8")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
