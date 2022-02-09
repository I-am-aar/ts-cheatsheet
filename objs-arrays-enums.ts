// Object types

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // setting tuple
} = {
    name: 'Arnór',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // Tuple
}

let favoriteActivities: string[];
favoriteActivities = ['Sports']; // will fail if other type is added.

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); 
    // Can set to uppercase cause TS knows that hobbies is an array of strings
}

// Enums
enum Role { ADMIN, READ_ONLY, AUTHOR }
// gives these names a numeric value
// ADMIN = 0, READ_ONLY = 1, AUTHOR = 2

const anotherPerson = {
    name: 'Arnór',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN // Enum number 0
}