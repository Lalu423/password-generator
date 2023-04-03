var characterLength = 8;
var choiceArray = [];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '/', '=', '+', '-',];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberOfLetters = parseInt(prompt("How many characters would you like your password?"));
  var password = [];
  console.log(typeof numberOfLetters)
  for (var i = 0; i < numberOfLetters; i++) {
    console.log(letters[Math.floor(Math.random() * letters.length)]);
    password.push(letters[Math.floor(Math.random() * letters.length)]);
  }


  console.log(password);
  return password.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


