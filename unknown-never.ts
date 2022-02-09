// Unknown type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Arnór';

// userName = userInput; will not work, needs extra type check
if (typeof userInput === 'string') {
    userName = userInput;
}

// Never type

// This function NEVER returns anything 
// and is intended to never return anything.
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An Error Occured', 500);