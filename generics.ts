// Generics

const names: Array<string> = []; // Tells that the generic type of array is a array of strings

const promise: Promise<string> = new Promise((resolve, reject) => { 
    // promise that returns a string
    setTimeout(() => {
        resolve('This is done')
    }, 2000);
})

promise.then(data => {
    data.split(' ') // won't work if Promise is of type number f.x.
})

// own generics
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

console.log(merge({name: 'Arnór'}, {age: 34}));
const mergedObj = merge({name: 'Arnór'}, {age: 34});
console.log(mergedObj.age);

// Constraints
// used when you want to specify that a certain
// generics type is of certain type
// <T extends object> tells that the generic type T
// can be any type of object, not just any type
function mergeAgain<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedAgainObj = mergeAgain({name: 'Arnór'}, {age: 34});
console.log(mergedAgainObj.age);

// another generic function
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element'; 
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there'));
console.log(countAndDescribe(['sport', 'cooking']));
// console.log(countAndDescribe(25)); will not work cause number does not have length property

// keyof
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Arnór'}, 'name');

// Generci Utility Types

// Partial
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createGoalCourse(
    title: string, 
    description: string, 
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

// Readonly
// tells TS that this is a read only type and cannot be altered with
// f.x. can't push new item into array if the array is of type Readonly
const namesAgain: Readonly<string[]> = ['Arnór', 'Alfreð'];
// namesAgain.push('Gerrard'); // can't because of Readonly