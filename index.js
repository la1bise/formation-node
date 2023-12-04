// Module provenant de npm
const chalk = require('chalk');
const slugify = require ('slugify')
const { calc } = require ('./modules/calc')
const { loto, gagnant } = require('./modules/lottery');


console.log(calc(2,5));
console.log(slugify('Bienvenue à Paris'));


console.log(loto({min: 20, max: 50, count: 5}));

const players = ["Kali", "Kim", "Jules", "Timo"]
console.log(chalk.green(`Le gagnantLe gagnant(e) est : ${gagnant(players)}`));