/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let log = console.log;

let newArr = arr.slice(1, 4);

newArr = newArr.map(i => i.replace(/a/g, '@').replace(/qux/g, 'QUX'));

result = newArr;

log(result)

//export result
module.exports = result;