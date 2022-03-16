# 03 JavaScript: Password Generator

## Project Description

Starter code includes completed index.html & script.css files along with starter code for a script.js file. The script.js file includes only the following lines of code below;

          // Assignment Code
          var generateBtn = document.querySelector("#generate");

          // Write password to the #password input
          function writePassword() {
          var password = generatePassword();
          var passwordText = document.querySelector("#password");

          passwordText.value = password;

          }

          // Add event listener to generate button
          generateBtn.addEventListener("click", writePassword);

## Main Objective

The main objective is the modify the starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

## How to Use the Project

✅ Click the button to generate a password
✅ Prompts for the length of the password between 8-128
✅ If not a number between 8-128, another prompt is displayed stating Try Again.
✅ If number between 8-128 is chosen, more prompts are displayed to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.
✅ When each prompt is answered, a password will be generated that matches the selected criteria.

## Live URL
https://cynthiagodoy.github.io/Password-Generator/

```
- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.