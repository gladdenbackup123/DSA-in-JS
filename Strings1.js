//Reverse a string

let s = "Hello";
let n = s.length;
let rev =""; //Initialize an empty string

for(let i=n-1 ; i>=0 ; i--){
    rev += s.charAt(i);  
}

console.log(rev);