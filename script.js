var generateBtn = document.getElementsByClassName("btn");

// Write password to the #password input
function createBand() {
  var Band = generatePassword();
  var BandName = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
