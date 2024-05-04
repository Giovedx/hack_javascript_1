/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 


*/
let str = 'fooziman';
let result = [];
let log = console.log;

let i = 0;

str[i] = function* ()
{   
    while (i<str.length){
        yield str[i++];
    }
};

result = [...str]
log(result); 
//export result
module.exports = result;