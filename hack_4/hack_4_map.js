/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let log = console.log;
let newArray = [1,2,3,4,5,6,7]
let resolve;

resolve = newArray.map((i) => {
    return i  
})

result = resolve.filter((number) =>
{
    return number % 2 !== 0;
})

log(result)
//export result
module.exports = result;