/**
 * Declare the needed constants and get them by IDs from the html page
 */
const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const form = document.getElementById('passwordGeneratorForm');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const includeUppercaseElement = document.getElementById('includeUppercase');
const passwordDisplay = document.getElementById('passwordDisplay')

/**
 * Declare the Char_codes from the ASCII table
 */
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96));



/**
 * Set up the event listeners to sync the the slider and the number input 
 */

characterAmountRange.addEventListener('input', syncCharacter);
characterAmountNumber.addEventListener('input', syncCharacter);



/**
 * Set up event listener + function for the submit button
 * prevent default
 */

 form.addEventListener('submit', e =>{
     e.preventDefault();
     const characterAmount = characterAmountNumber.value;
     const includeNumbers = includeNumbersElement.checked;
     const includeSymbols = includeSymbolsElement.checked;
     const includeUppercase = includeUppercaseElement.checked;
     const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
     passwordDisplay.innerText = password;
 })

    
/**
 * The logic to generate the password.  
 */
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){

  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES); 
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

const passwordCharacters = [];
for (let i = 0; i<characterAmount; i++){
    const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
}
return passwordCharacters.join('');
}




/**
 * Loop through the character codes from lower to higher 
 */

function arrayFromLowToHigh ( low, high){
    const array = [];
    for ( let i = low; i<=high; i++){
        array.push(i);
    }
    return array;
}



/**
 * Sync the slider and the number input 
 */

function syncCharacter(e){
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}
