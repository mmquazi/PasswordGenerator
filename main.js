/**
 * Declare the needed constants and get them by IDs from the html page
 */

 const characterAmountRange = document.getElementById('characterAmountRange');
 const characterAmountNumber = document.getElementById('characterAmountNumber');


 characterAmountRange.addEventListener('input', syncCharacter);
 characterAmountNumber.addEventListener('input', syncCharacter);
/**
 * Declare the Char_codes from the ASCII table
 */




/**
 * Set up the event listeners to sync the the slider and the number input 
 */





/**
 * Set up event listener + function for the submit button
 * prevent default
 */

    
/**
 * The logic to generate the password.  
 */





/**
 * Loop through the character codes from lower to higher 
 */





/**
 * Sync the slider and the number input 
 */

function syncCharacter(e){
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}
