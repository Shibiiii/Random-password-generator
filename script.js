// Assignment Code
var generateBtn = document.querySelector("#generate");

let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let lettersCap = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('');
let numbers = '1234567890'.split('');
let specialChar = '!@#$%^&*()_+~.-'.split('');

let includeLowerCase = false;
let includeCapital = false;
let includeNumbers = false;
let includeSpecialChar = false;

function generatePassword() {
  console.log('clicked');
  var userChoice = window.prompt("How many characters:"); {
    if (userChoice < 8); {
      return;
    } 
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
