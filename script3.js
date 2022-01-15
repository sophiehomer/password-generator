// Assignment code here
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var password=""
var random=[]
var randomLower=""
var randomUpper=""
var randomNumber=""
var randomSym=""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var length = parseInt(window.prompt("What is the length of your desired password?"))
    if (length < 8 || length > 128){
        alert("Your password must be at least 8 characters and no more than 128 characters.");
        generatePassword()
}


    // if (isLower===true && isUpper===true){}
   
else (length > 8 && length < 128)
// (window.prompt("What is the length of your desired password?"))

    var isLower = window.confirm("Would you like to use lower case letters?")
    var isUpper = window.confirm("Would you like to use upper case letters?")
    var isNumeric = window.confirm("Would you like to use numbers?") 
    var isSym = window.confirm("Would you like to use symbols?")


for (var i = 0; i < length; i++) {
    randomLower+=lowerCaseArray[Math.floor(Math.random()* lowerCaseArray.length)]
    randomUpper+=upperCaseArray[Math.floor(Math.random()* upperCaseArray.length)]
    randomNumber+=numberArray[Math.floor(Math.random()* numberArray.length)]
    randomSym+=symArray[Math.floor(Math.random()* symArray.length)]
}


// 4 selections
if (isLower && isUpper && isNumeric && isSym){
    random = randomLower + randomUpper + randomNumber + randomSym
}

// 3 selections
else if (isUpper && isLower && isNumeric){
        random = randomUpper + randomLower + randomUpper
    }

else if (isUpper && isNumeric && isSym){
        random = randomUpper + randomNumber + randomSym
    }

else if (isUpper && isLower && isSym){
        random = randomUpper + randomLower + randomSym
    }

else if (isSym && isNumeric && isLower){
    random = randomSym + randomNumber
}

// 2 selections
else if (isUpper && isLower){
    random = randomUpper + randomLower
}

else if (isUpper && isNumeric){
    random = randomUpper + randomNumber
}

else if (isUpper && isSym){
    random = randomUpper + randomSym
}

else if (isLower && isNumeric){
random = randomLower + randomNumber
}

else if (isLower && isSym){
    random = randomLower + randomNumber
}

else if (isNumeric && isSym){
    random = randomNumber + randomSym
}

// 1 selection
else if (isUpper){
random = randomUpper
}

else if (isLower){
random = randomLower
}

else if (isNumeric){
    random = randomNumber
}

else if (isSym){
    random = randomSym
}

for (var i = 0; i < length; i++){
password+=random[Math.floor(Math.random()* random.length)]
}
// console.log(password)
            
return password
}

// Write password to the #password input

function writePassword() {
var password = "";
password = generatePassword();

var passwordText = document.querySelector("#password");
                passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);