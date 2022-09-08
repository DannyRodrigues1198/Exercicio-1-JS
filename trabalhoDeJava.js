const prompt = require('prompt-sync')();

const nome = prompt ('Type your name: ');
const lastName = prompt ('Type your last name: ');
const peso = prompt ('Type your weight: ');
const altura = prompt ('Type your height: ')
const dataDeInterna = prompt ('Type the date of your hospitalization: ');
const diabetes = prompt ('Do you have diabetes: ');

console.log (`Your name is: ${nome}`)
console.log (`Last name is: ${lastName}`)
console.log (`Your weight:  ${peso}`)
console.log (`Your height:  ${altura} `)
console.log (`Your date of your hospitalization: ${dataDeInterna} `)
console.log (`bYou is diabetic: ${diabetes}`)