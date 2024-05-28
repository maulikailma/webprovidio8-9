const validator = require ('validator');
const chalk = require('chalk');

console.log(chalk.green('Hello World'));
console.log(chalk.bold.bgBlue('Hello World'));

const nama = 'Ilma Maulika'
const pesan = chalk`hai, nama {bgRed.bold saya jokowi} {bgYellow presiden ke 10} indonesia. Nama saya : ${nama}`;
console.log(pesan);

// // console.log(validator.isEmail('ilmacom'));
// // console.log(validator.isMobilePhone('57974723', 'id-ID'));
// console.log(validator.isNumeric('abcd'));