/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let log = console.log;


for(let i = 7 ; i >= 1; i--)
{
    result.push(i);
}

result = result.filter(function(number)
{
     return number % 2 !== 0;
})



log(result);
//export result
module.exports = result;