export {}
let message = 'Welcome Back';
console.log(message);

let x = 10;
const y = 20;

let sum;
sum = x + y;
console.log(sum);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Tushar';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null= null;
let u:undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];

enum color {Red = 5, Green, Blue};
let c: color = color.Green;

console.log(c);

let randomValue: any =10;
randomValue= true;
randomValue= 'Tushar';

/** 

let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

let myVariable1: unknown = 10;

function hasName(obj: any): obj is {name: string}
{
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable1)){
    console.log(myVariable1.name);
}

(myVariable1 as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean; 
multiType= 20;
multiType= true;

let anyType: any;
anyType= 20;
anyType= true;

function add(num1: number, num2: number): number{
    return num1+ num2;
}

add(5 ,10);

/** ? for optional Parameters 

function add1(num1: number = 10, num2?: number): number{
    return num1+ num2;
}

*/

/** 
function fullName(person : {firstName: string, lastName : string}){
    console.log(`${person.firstName} ${person.lastName}`);
}

*/

/**Interface Method */

interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person : Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p= {
    firstName: 'Steve',
    lastName: 'Rogers'
};  

fullName(p);

class Employee{
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1= new Employee('Tushar');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager Delegating tasks`);
    }
}

let m1 = new Manager('Michael');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

