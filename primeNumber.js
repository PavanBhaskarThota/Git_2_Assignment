// Check the given number is prime or not 

let a=43;
let count=0;


for(let i=0; i<=a.length; i++){

   if(a%i===0)
   count++;
}

if(count===2)
console.log("Prime Number");
else
console.log("Not Prime");