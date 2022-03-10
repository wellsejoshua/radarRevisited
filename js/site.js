//Controller function
function getValues(){
    document.getElementById("alert").classList.add("invisible");
    document.getElementById("para").classList.add("invisible");
    let strInput = document.getElementById("palindromeString").value; 
    let testString = removeSpecialChrAndSpaces(strInput);
    let revString = reverseString(strInput);
    let isPalindrome = compareStrings(strInput,revString);
    displayString(revString, strInput, isPalindrome);
    
}


//logic function
function reverseString(strInput){

    let revString = [];
    for (let index = strInput.length - 1; index >= 0; index--) {
        revString += strInput[index];
    }

    return revString;
}



//display/view function
function displayString(revString, strInput, isPalindrome){

    
    document.getElementById("h2Heading").innerHTML = "Results";
    if (isPalindrome == "true") {
        document.getElementById("para").innerHTML = `Success! ${strInput} is a palindrome. The reversed string is ${revString}.` ;
    }
    else{
        document.getElementById("para").innerHTML = `${strInput} is Not a palindrome. The reversed string is ${revString}.` ;
    }
    
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("para").classList.remove("invisible");
    

}

//function to remove special characters
function removeSpecialChrAndSpaces(inputString){
    let x = typeof(inputString);
    let testString = "";
    let specialChrArray = [" "]
    
    return testString;

}

function compareStrings(originalString, reversedString){
    let isPalindrome = "false";
    if (originalString == reversedString) {
        isPalindrome = "true";
    } 
    return isPalindrome;
}
