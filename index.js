// Import stylesheets
import './style.css';
import './destructuring.js';
// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const person = {
  name: 'thiyagu',
  age: 34,
  gender: 'male',
  address: {
    city: 'chennai',
    place: 'tamilnadu',
  },
};

// object destructuring using es6

const {
  name: fullname = 'Vinoth Kumar',
  age: myage,
  gender,
  address: { city },
} = person;

function employee({ age, name }) {
  // console.log(`my name is ${person.name} and my age is ${person.age}`);
}
employee(person);
// console.log('personname', fullname);
// console.log('personage', myage);
// console.log('personaddress-city', city);

// destructuring in array

const fruitsarr = ['appple', 'mango', 'pineapple', 'bananna'];

const [fruit1, fruit2, fruit3, fruit4] = fruitsarr;

// console.log('fruitarr', fruit1, fruit2, fruit3);

// destructuring of array and objects

const grocerylist = [
  {
    item: 'apple',
    price: 100,
    category: 'fruits',
  },
  {
    item: 'dall',
    price: 70,
    category: 'provision',
  },
  {
    item: 'bread',
    price: 40,
    category: 'misc',
  },
  {
    item: 'milk',
    price: 55,
    category: 'misc',
  },
];

const [{ item }, ...rest] = grocerylist;

// console.log('accessobjectitem', item, rest);
// console.log('rest', rest);

// example 2 destructuring array objects:

const company = {
  name: 'Microsoft',
  location: ['Germany', 'India', 'Singapore'],
};

const {
  location: [loc, ...disp],
} = company;

console.log('companytxt', loc, disp);
