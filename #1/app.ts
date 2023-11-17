let username: string = 'William Luu';
let hasLoggedIn: boolean = true;

const partsOfName: string[] = username.split(' ');
const values: Array<number> = [1, 2, 3];
const nums: number[] = [1, 2, 3];

interface Person {
    firstName: string,
    lastName: string
}

const myPerson: Person = {
    firstName: 'William',
    lastName: 'Luu'
}
// console.log(myPerson.firstName)
// console.log(myPerson.lastName)

const ids: Record<number, string> = {
    10: 'a',
    20: 'b'
}
ids[30] = 'c';
//console.log(ids[30]);

if(ids[30] === 'd') {
    console.log(true);
}

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// [1, 2, 3].forEach(val => console.log(val));

const output: number[] = [4, 5, 6].map(val => val*10);
