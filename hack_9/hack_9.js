/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;
let log = console.log;

let filt = arr.filter((arr) => {
    return arr.includes('b');
})

result = filt.length;

log(result)
//export result
module.exports = result;