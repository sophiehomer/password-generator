// Assignment code here
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
    // Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    var length = parseInt(window.prompt("What is the length of your password?"))
    console.log(length)
        // write an if statement to check if length is less than 8 OR is greater than 128.
        // if not, call on generate password fuction
    var upperCase = window.confirm("Do you want to use uppercase characters?")
    var lowerCase = window.confirm("Do you want to use lowercase characters?")
    var numerical = window.confirm("Do you want to use numerical characters?")
    var special = window.confirm("Do you want to use special characters?")
        //write an if statement to check if the previous variables are all falsey if they are then call on generate password function again
}


// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);