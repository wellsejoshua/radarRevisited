//Controller function
//get values
function getValues(){
    // make sure alert is invisible
    document.getElementById("alert").classList.add("invisible");
    let palindromeString = document.getElementById("palindromeString").value; 
    
    //check for palindrome
    let returnObj = checkForPalindrome(palindromeString);

    //display message out to screen
    displayMessage(returnObj);
    
}


//check if palindrome
function checkForPalindrome(palindromeString){
    //convert to lowercasee
    palindromeString = palindromeString.toLowerCase();
    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    palindromeString = palindromeString.replace(regex,"");
    let revString =[];
    let returnObj = {};
    for (let index = palindromeString.length -1; index >= 0 ; index--) {
        revString+= palindromeString[index];
    }
    if(revString == palindromeString){
        returnObj.msg = "Well done! You entered a palindrome";
    }
    else{
        returnObj.msg = "Sorry! You did not enter a palindrome"
    }

    returnObj.reversed = revString;
    return returnObj;

    
}

//display message
function displayMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed} `;
    document.getElementById("alert").classList.remove("invisible");
}


