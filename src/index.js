import Validator from './js/Validator';
import cleanPhone from './js/cleanPhone';

const validator = new Validator();
console.log(validator.validateUsername('user_name'));

console.log(cleanPhone('8 (927) 000-00-00'));
console.log(cleanPhone('+7 960 000 00 00'));
console.log(cleanPhone('+86 000 000 0000'));