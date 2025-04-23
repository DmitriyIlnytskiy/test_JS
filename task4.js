"use strict"

console.log("//// task4 ////");
function checkNumberType(num){
    if(num > 0)return "Positive";
    else if(num == 0) return "Zero"
    else return "Negative"
}

console.log(checkNumberType(5));    
console.log(checkNumberType(-10));  
console.log(checkNumberType(0));    
console.log(checkNumberType(123.45)); 
console.log(checkNumberType(-0.001));
console.log(checkNumberType("1245"));
console.log(checkNumberType(false));
console.log(checkNumberType(true));
console.log(checkNumberType("string"));//Nan
