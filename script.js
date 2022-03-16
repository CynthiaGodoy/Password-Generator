var characterLength = 8;
var choiceArray = [];

// Arrays
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "="];

// Generates on the button id
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button and works with line 17
generateBtn.addEventListener("click", writePassword);

// // Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //returns true or false on 39
  var passwordText = document.querySelector("#password");

  if (correctPrompts) { //true
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else { //false
    passwordText.value = "";
  }
}

//Generate password based on prompts
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

//prompts below
function getPrompts() {
choiceArray = [];

characterLength = parseInt(prompt("How many characters would you like your password to be? Must be between 8-128 characters."));

if (characterLength < 8 !== characterLength > 128) {
    alert("Password must be a number 8 to 128 characters. Please try Again.");
    return;
  }

  if (confirm("Do you want Lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCases);
  }

  if (confirm("Do you want Uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(upperCases);
  }

  if (confirm("Do you want Special Characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacters);
  }

  if (confirm("Do you want numbers in your password?")) {
    choiceArray = choiceArray.concat(numbers);
  }
  return true;
}