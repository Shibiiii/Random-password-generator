// Assignment Code
var generateBtn = document.querySelector("#generate");

let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let lettersCap = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('');
let numbers = '1234567890'.split('');
let specialChar = '!@#$%^&*_+~.-'.split('');

let includeLowerCase = false;
let includeCapital = false;
let includeNumbers = false;
let includeSpecialChar = false;

function generatePassword() {
  let potentialChar = [];
  let charAmount = window.prompt('How many characters? (between 8-128):');
  charAmount = parseInt(charAmount);

  if ((charAmount) || charAmount<8 || charAmount>128) {
    return '!Invalid character amount!'
  }

  includeCapital = confirm ('Do you want capital letters?');
  includeLowerCase = confirm ('Do you want lowercase letters?');
  includeSpecialChar = confirm ('Do you want special characters?');
  includeNumbers = confirm ('Do you want numbers?');

  if (!includeCapital && !includeLowerCase && !includeSpecialChar && !includeNumbers) {
    return '!Must select at least one option!';
  }

  if (includeCapital) {
    potentialChar = potentialChar.concat (lettersCap)
  }

  if (includeLowerCase) {
    potentialChar = potentialChar.concat (letters)
  }

  if (includeSpecialChar) {
    potentialChar = potentialChar.concat (specialChar)
  }

  if (includeNumbers) {
    potentialChar =potentialChar.concat (numbers)
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
