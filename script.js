var characterLength = 8;
var choiceArray = [];

// Special characters for the function created
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "="];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Write password to the #password input
function writePassword() {
  getPrompts(); //returns true or false
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generate password based on prompts
function generatePassword() {
  choiceArray = [];
}

function getPrompts() {
var characterLength = parseInt(prompt("How many characters would you like your password to be? Must be betweent 8-128 characters."));
characterLength= parseInt(passwordLength);

  if (isNAN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password must be 8 to 128 characters! Please try Again.");
    return false;
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























// function generatePassword() {
//   var password = "";
//   var passwordChar = "";

//   var passwordLength = prompt("How many characters would you like your password to be? Must be betweent 8-128 characters.");
//   passwordLength= parseInt(passwordLength);

//   if (passwordLength < 8) {
//     alert("Password must have more than 7 characters! Please try Again.");
//     return false;
//   }

//   if (passwordLength > 128) {
//     alert("Password must not be more than 128 characters! Please try Again.");
//     return false;
//   }

// var lowerCasesChoice = confirm("Do you want lowercases in your password?");

// if(lowerCasesChoice) {
// passwordChar += lowerCases;
// }

// var upperCasesChoice = confirm("Do you want uppercases in your password?");

// if(upperCasesChoice) {
//   passwordChar += upperCases;
// }

// var numbersChoice = confirm("Do you want numbers in your password?");

// if(numbersChoice) {
//   passwordChar += numbers;
// }

// var specialCharactersChoice = confirm("Do you want special characters in your password?");

// if(specialCharactersChoice) {
//   passwordChar += specialCharacters;
// }

// for (var i = 0; 1< passwordLength; i++) {
//   password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
// }










