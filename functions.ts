// Function types

// Return types
// The return from this function should be of type number
function adds(n1: number, n2: number): number {
    return n1+ n2;
}

// Type void when not returning anything
function printResults(num: number): void {
    console.log('Result:' + num);
}

printResults(adds(5, 12));

// Specifying that combineValues should be of type function
// were the function should take in two parameters of type number
// and the return value should also be of type number
let combineValues: (a: number, b: number) => number;
combineValues = adds;
console.log(combineValues(8, 8));

// Callback types
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

addAndHandle(10, 20, (result) => {
    console.log(result);
})
