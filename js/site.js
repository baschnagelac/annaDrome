

// function responsible for receiving and responding to the user's string

function getValues() {
    let inputString = document.getElementById('userString').value;

    let checkPal = checkForPalindrome(inputString);
    displayResults(checkPal);

}



// function responsible for determining whether a string is a palindrome

function checkForPalindrome(userString) {
    let l = userString.length;
    let palString = '';

    // let reversedString = reverseString(userString);

    // if (reversedString == userString) {
    //     return 'Yes!'
    // } else {
    //     return 'No'
    // }

    for(let i = 0; i < l/2;  i++) {
        if (userString[i] !== userString[l -1 - i]) {
            return 'NOT a palindrome';
        }
    }
    return 'Yes! It is a palindrome!';
}

function reverseString(string) {
    // ...
}

// function responsible for displaying a message to the user to show whether their string is a palindrome or not.

function displayResults(palString) {
    document.getElementById('results').textContent = palString;
    document.getElementById('alert').classList.remove('invisible');
    

}


 //how do I get innerHTML to display the value of string innerHTML
    //let palString = `Your phrase reversed is: ${palString}`



