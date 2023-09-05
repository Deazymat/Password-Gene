// function for the password to be based off of the users input
function generatePassword() {
    // array of lowercase
    var lower = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    //   array of uppercase
    var upper = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    // array of numbers
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    //array of special characters
    var specials = [
        "!",
        "@",
        "#",
        "$",
        "^",
        "&",
        "*",
        "(",
        ")",
        "-",
        "_",
        "+",
        "=",
        "/",
        "?",
        ":",
        ";",
        ".",
        ">",
        ",",
        "<",
        "`",
        "~",
        "[",
        "]",
        "{",
        "}",
        "|",
    ];

    // the length determined by the user.
    function generatePasswordLength() {
        var personSelect = parseInt(prompt("You must enter between 8 and 128:"));

        if (isNaN(personSelect) || personSelect < 8 || personSelect > 128) {
            alert("Invalid input. Enter a number between 8 - 128");
            return generatePasswordLength();
        }
        return personSelect;
    }
    // to make sure one of the choices is selected
    function getSelect(userChoice) {
        var userPrompt = "would you like " + userChoice + " characters ( y / n )?";
        var personSelect = prompt(userPrompt).toLowerCase();

        return personSelect === "yes" || personSelect === "y";
    }

    var selectedArray = [];
    var passwordLength = generatePasswordLength();
  

    var lowerChoice = getSelect("lower");
    var upperChoice = getSelect("upper");
    var numberChoice = getSelect("number");
    var specialsChoice = getSelect("specials");

    if (!(lowerChoice || upperChoice || numberChoice || specialsChoice)) {
        alert("You must select one of the following");
        return generatePassword();
    }
    if (lowerChoice)  selectedArray = selectedArray.concat(lower);
    
    if (upperChoice) 
        selectedArray = selectedArray.concat(upper);
    
    if (numberChoice) 
        selectedArray = selectedArray.concat(numbers);
    
    if (specialsChoice) 
        selectedArray = selectedArray.concat(specials);
    
    var passwordString = "";
    for (var i = 0; i < passwordLength; i++) {
        passwordString +=
            selectedArray[Math.floor(Math.random() * selectedArray.length)];
    }
    return passwordString;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
