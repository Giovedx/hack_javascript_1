/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
let log = console.log;
let i = 1;

while(i<=5)
{
    result[i-1] = i;
    i++;
}

log(result)


//export result
module.exports = result;