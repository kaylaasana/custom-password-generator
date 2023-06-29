// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {




  return 'Hello'
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//need button to pop up a window.prompt asking user to select number between 8-128
//need to store answer
//need to then ask if user wants capital letters
//store answer
//need to then ask if use wants lower case letters
//store answer
//does user want numbers
//store answer
//does user want special characters
//store answer
//generate password based on answers