// Assignment Code
var generateBtn = document.querySelector("#generate");

// define character variables
var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//define character pool and final password variables
var characterPool = []
var finalPassword = []
var wrongAns = 'Please, try again. :)' 

// perform the process of generating a password
function generatePassword() {
  //prompt user for password length and confirm character types
    var passwordLength = window.prompt("How many characters between 8-128 would you like to use?"); 
    if(passwordLength < 8 || passwordLength > 128) {
      alert('Password must be between 8 and 128 characters.');
      return wrongAns
    }
    var passwordUpper = window.confirm('Would you like capital letters in your password?');
    var passwordLower = window.confirm("Would you like lower case letters in your password?");
    var passwordSpecialChar = window.confirm("Would you like special characters in your password?");
    var passwordNum = window.confirm("Would you like numbers in your password?");
  //create conditionals (if statement) that make a character type available if user selects OK (creates potential character pool)
    if (passwordUpper === true) {
      characterPool = characterPool.concat(upperCase);
    }
    if (passwordLower === true) {
      characterPool = characterPool.concat(lowerCase);
    } 
    if (passwordSpecialChar === true) {
      characterPool = characterPool.concat(specialCharacters);
    }
    if (passwordNum === true) {
      characterPool = characterPool.concat(numericCharacters);
    }
    if (passwordUpper === false && passwordLower === false && passwordSpecialChar === false && passwordNum === false) {
      alert('You must select at least one of the previously presented prompts.');
      return wrongAns;
    }
    console.log(characterPool)

//create for loop that runs the amount of times as the answer of the user password length and then pull a random character from our potential charracter array and insert into a final password array
for(var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * characterPool.length);
  var indexValue = characterPool[randomIndex];
  finalPassword.push(indexValue);
  console.log(finalPassword);
}

  return finalPassword.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
