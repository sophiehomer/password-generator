// Assignment code here
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var password=""
var random=[]
var randomLower=""
var randomUpper=""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var length = parseInt(window.prompt("What is the length of your desired password? Your password must be atleast 8 characters and no more than 128 characters."))
    var isLower = window.confirm("Would you like to use lower case letters?")
    var isUpper = window.confirm("Would you like to use upper case letters?")
    // var isNumeric = window.confirm("Would you like to use numbers?") 
    // var isSym = window.confirm(""Would you like to use symbols?")
console.log(isLower)
console.log(length)

for (var i = 0; i < length; i++) {
    randomLower+=lowerCaseArray[Math.floor(Math.random()* lowerCaseArray.length)]
    randomUpper+=upperCaseArray[Math.floor(Math.random()* upperCaseArray.length)]

    
}

if (length > 8 && length <128){
    if (isLower===true && isUpper===true){
        
        console.log(randomLower)
        console.log(randomUpper)

    }

} else { 
    generatePassword()
}
random=randomLower+randomUpper
console.log(random)

for (var i = 0; i < length; i++){
    password+=random[Math.floor(Math.random()* random.length)]
}
console.log(password)

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