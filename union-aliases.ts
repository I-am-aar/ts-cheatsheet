// Unions, literals and custom types
// union example: input1: string | number
// literal example: resultConversion: 'as-number' | 'as-text'

// Custom types
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 36, 'as-number');
console.log(combinedAges);

const combinedNames = combine('Arnór', 'Aðalsteinn', 'as-text');
console.log(combinedNames);

const combinedStringAges = combine('30', '36', 'as-number');
console.log(combinedStringAges);



