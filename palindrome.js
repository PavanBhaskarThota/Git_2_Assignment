// Checks the given string is palindrome or not


let str="abba";

let bag="";

for(let i=0; i<str.length; i++){

    bag=bag+str[i];
}

if(bag===str)
console.log("Palindrome");
else
console.log("Not Palindrome");