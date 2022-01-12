// Assignment code here
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var length = parseInt(window.prompt("What is the length of your desired password? Your password must be atleast 8 characters and no more than 128 characters."))
    console.log(length)

    // write an if statement to check if length is less than 8 OR is greater than 128.
    // if not, call on generate password fuction
    if (length < 8 || length > 128) {
        window.alert("Your password must have a length of at least 8 characters and no more than 128 characters.");
        return generatePassword();
    }
    var upperCase = window.confirm("Do you want to use uppercase characters?")
    if (confirm) {
        Array.prototype.push.apply(upperCase);
    }
    var lowerCase = window.confirm("Do you want to use lowercase characters?")
    if (confirm) {
        Array.prototype.push.apply(lowerCase);
    }
    var numerical = window.confirm("Do you want to use numerical characters?")
    if (confirm) {
        Array.prototype.push.apply(numerical);
    }
    var special = window.confirm("Do you want to use special characters? ")
    if (confirm) {
        Array.prototype.push.apply(upperCase);
    }
    if (!upperCase && !lowerCase && !numerical && !special) {
        window.alert("You must select atleast one type of character to generate a password. Please try again.");
        return generatePassword();
    }
}

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
for (let i = 0; i < random_item.length; i++);

var items = ["upperCaseArray", "lowerCaseArray", "numbersArray", "specialCharactersArray"];
console.log(random_item(items));

// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);