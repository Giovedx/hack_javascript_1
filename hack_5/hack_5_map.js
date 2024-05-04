/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let log = console.log;
let newArray = [1,2,3,4,5,6,7];
let resolve;

resolve = newArray.map((number) =>
{
     return number;
})

result = resolve.filter((number) =>
{
    
    return number % 2 !== 0; 
})

result.reverse();

log(result);


//export result
module.exports = result;