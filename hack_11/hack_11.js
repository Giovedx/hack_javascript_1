/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
let log = console.log;

numberArray.push('h@ck')

let newArr = numberArray.map(String).map((i) => i.replace(1, 'one').replace(3,'three').replace(5 , 'five'));


let newArr2 = stringArray.map((i) =>
  i
    .replace(/foo/g, 'f00')
    .replace(/bar/g, 'Bar')
    .replace(/baz/g, 'b@z')
    .replace(/qux/g, 'quX')
    .replace(/echo/g, '3ch0')
    
);

result = newArr.concat(newArr2);

result.unshift('h@ck');

result.push('h@ck');


log(result);


//export result
module.exports = result;