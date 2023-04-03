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
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var finalPassword = generatePassword();

    passwordText.value = finalPassword;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want your password? (8-128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a numeric value from 8 - 128. Please try again")
    return false;
  }

  if (confirm("Would you like to include lowercase characters?")) {
    choiceArray = choiceArray.concat(lowerCase);
  }

  if (confirm("Would you like to include uppercase characters?")) {
    choiceArray = choiceArray.concat(upperCase);
  }

  if (confirm("Would you like to include special characters?")) {
    choiceArray = choiceArray.concat(specialChar);
  }
  if (confirm("Would you like to include numbers?")) {
    choiceArray = choiceArray.concat(numberChar);
  }
  return true;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


