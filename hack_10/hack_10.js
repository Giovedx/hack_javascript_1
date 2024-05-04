/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */
let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];
let log = console.log;

let impares = arr.filter(i => i.length % 2 !== 0);

let pares = arr.filter((i) => i.length % 2 === 0);

let filt1 = impares.filter((i) => {
   return i.includes('bar')|| i.includes('qux')
})

let filt2 = pares.filter((i) => {
  return i.includes('octo') || i.includes('foobar');
});

result = filt1.concat(filt2)

log(result)

//export result
module.exports = result;