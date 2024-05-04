/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
let log = console.log;

for(let i=1;i<=5;i++)
{
    result[i-1] = i;
    
    
}

log(result)

//export result
module.exports = result;