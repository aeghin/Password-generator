// global variables
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var charSet = '';
var lowerCase = lowerChar.join('');
var upperCase = upperChar.join('');
var numChar = numericChar.join('');
var specChar = specialChar.join('');
var newPassword = "";

// save variables into an array?

// password length
// and which character sets they want to use for their password
var useLower = confirm("Do you want lowercase letters? if yes, press OK");
var useUpper = confirm("Do you want to uppercase letters? if yes, press OK");
var useSpecChar = confirm("Do you want to special characters? if yes, press OK");
var useNum = confirm("Do you want numbers? if yes, press OK");




// return password string value
// conditional statements
function generatePassword() {
  var pwLength = prompt("How long do you want your password to be? Choose between 8 and 128");
  if (pwLength < 8 || pwLength > 128) {
    alert("Password doesn't meet criteria");
  } 
  if (useLower) {
    charSet += lowerCase;
  }
  if (useUpper) {
    charSet += upperCase;
  }
  if (useNum) {
    charSet += numChar;
  }
  if (useSpecChar) {
    charSet += specChar;
  }
  while (newPassword.length < pwLength) {
    newPassword += charSet[Math.floor(Math.random() * charSet.length)];
  }
  return newPassword;
}





// USE CONSOLE.LOGS TO CHECK YOUR PROGRESS!!!


// prompts
// assembling your character sets
// randomly gnereate your pw with chosen character sets and length
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
