/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let log = console.log;


for(let i of arr)
{   
    result.push(i);
}

function capitalize(arr) 
{
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

result = capitalize(result)

log(result)


//export result
module.exports = result;