/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let log = console.log;
let i = 7;

while(i >=0)
{
    result.push(i);
    i--;
}

result = result.filter(function(number){
    return number % 2 !== 0;
})

log(result);
//export result
module.exports = result;