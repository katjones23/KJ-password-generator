// Reference material: https://webdevtrick.com/javascript-random-password-generator/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// character sets and regex for later validation
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()_+~:;?><,.-=";
var lcReg = /[a-z]/;
var ucReg = /[A-Z]/;
var numReg = /[0-9]/;
var specReg = /[!@#$%^&*()_+~:;?><,.-=]/;

function generatePassword() {
  // get length
  var passLength = parseInt(prompt("How long would you like your password to be?\nPlease enter a value between 8 and 128", "8"));

  if (passLength < 8 || passLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return;
  }
  console.log(passLength);

  // get character sets
  var confirmLowercase = confirm("Do you want to use lowercase characters?")
  console.log("lowercase " + confirmLowercase);
  var confirmUppercase = confirm("Do you want to use uppercase characters?");
  console.log("uppercase  " + confirmUppercase);
  var confirmNumeric = confirm("Do you want to use numbers?");
  console.log("numbers  " + confirmNumeric);
  var confirmSpecial = confirm("Do you want to use special characters?");
  console.log("special  " + confirmSpecial);

  // confirm that at least one charset is selected, alert if not
  var confirmArray = [confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecial];
  var checkFalse = confirmArray.every(confirmValidation);

  function confirmValidation(value) {
    return value === false;
  };

  if (checkFalse) {
    alert("Please select at least one character type.")
    password = "";
    return;
  };

  // identify charsets to be used, add to passCharSet
  var passCharSet = "";
  if (confirmLowercase) {
    passCharSet += lowercase;
  }
  if (confirmUppercase) {
    passCharSet += uppercase;
  }
  if (confirmNumeric) {
    passCharSet += numbers;
  }
  if (confirmSpecial) {
    passCharSet += special;
  }

  // for validation of characters later
  var isValid = false;

  // start adding characters for the requested length by randomly selecting a character
  function passloop() {
    password = "";
    for (var i = 0; i < passLength; i++) {
      password += passCharSet.charAt(
        Math.floor(Math.random() * passCharSet.length)
      );
    }

    //validation to ensure at least one character of each selected type exist
    var oneLC = 0;
    var oneUC = 0;
    var oneNum = 0;
    var oneSpec = 0;

    if ((confirmLowercase && password.search(lcReg) !== -1) || !confirmLowercase) {
      oneLC++;
      console.log("lc " + oneLC);
    }
    if ((confirmUppercase && password.search(ucReg) !== -1) || !confirmUppercase) {
      oneUC++;
      console.log("uc " + oneUC);
    }
    if ((confirmNumeric && password.search(numReg) !== -1) || !confirmNumeric) {
      oneNum++;
      console.log("num " + oneNum);
    }
    if ((confirmSpecial && password.search(specReg) !== -1) || !confirmSpecial) {
      oneSpec++;
      console.log("spec " + oneSpec);
    }
    if (oneLC < 1 || oneUC < 1 || oneNum < 1 || oneSpec < 1) {
      isValid = false;
      console.log("isValid= " + isValid);
    } else {
      isValid = true;
      console.log("isValid= " + isValid);
    }
  }

  while (!isValid) {
    passloop();
    console.log(password);
  }

  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);