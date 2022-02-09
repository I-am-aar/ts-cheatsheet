// Intersection Types

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Arnór',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universial = Combinable & Numeric;

// Type Guards
// example: typeof
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    // type guard check if privileges is a property of emp
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Alfreð', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving a car...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo... ' + amount);
    }
}

//Union type
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // checks if vehicle is a instance of 
    // Truck constructor function to access loadCargo function
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
// one common property in every object that 
// make up a union type, this case type property.
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse; // Union type

function moveAnimal(animal: Animal) {
    let speed;
    // Check wich property is available
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// Type Casting
// helps you tell typescript that some value is of a specific type
// were typescript is not able to detect it on its own.
// Good example is we get access of something in the DOM

// const userInputElement = <HTMLInputElement>document.getElementById('user-input'); -- this works
const userInputElement = document.getElementById('user-input') as HTMLInputElement; // -- this also

userInputElement.value = 'Hi there'; // will get error if I dont tell the const userInputElement that it is a HTMLInputElement

// Sidenote!
// If you know that a element will never yeld Null then you can use ! after decloration
// to tell typescript that this decloration will never yeld null.
// Example:
// const userInputElement = document.getElementById('user-input')!
// will tell typescriot that userInputElement will never yeld null

// Index properties
interface ErrorContainer {
    // Used when you don't know in advance how many properties 
    // you'll have and don't know the value of those properties
    [prop: string]: string; 
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
}


// Function overloads
// how to treat the return type given different parameter types
function addAgain(a: number, b: number): number;
function addAgain(a: string, b: string): string;
function addAgain(a: Combinable, b: Combinable) { // Combineble union type in code line 21
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

const resultAgain = addAgain('Arnór', ' Aðalsteinn');
resultAgain.split(' ')


// Optional chaining
// when you dont know of certainty if an in a object a certain property is defined
// Example:
const fetchedUserData = {
    id: 'u1',
    name: 'Arnór',
    job: { title: 'CEO', description: 'My own company' }
}

console.log(fetchedUserData?.job?.title);
// ? mark tells to continue if this exist.

// Nullish Coalescing - loosely related to optional chaining
// when you don't know if data is going to be null, undefined or actual data
const userInput = null;
const storedData = userInput ?? 'DEFAULT'; // ?? = nullish coalescing
// fallback to DEFAULT if userInput is null or undefined
console.log(storedData);
