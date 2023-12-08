// Module provenant de npm
const chalk = require('chalk');
const slugify = require ('slugify')
const { calc } = require ('./modules/calc.js')
const { loto, gagnant } = require('./modules/lottery.js');
const { som } = require ('./modules/sum.js')

// exemple 
console.log(calc(2,5));
console.log(slugify('Bienvenue à Paris'));

// exercice 1 LOTTERY
console.log(loto({min: 20, max: 50, count: 5}));

const players = ["Kali", "Kim", "Jules", "Timo"]
console.log(chalk.green(`Le gagnantLe gagnant(e) est : ${gagnant(players)}`));

// exercie 2 SOM divisible
const result = som(10)
console.log(result);