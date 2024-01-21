let str = "madam";
let n = str.length;
let s = 0;
let e = n-1;

while(s<e){
    if(str[s] != str[e]){
        console.log("False");
        return;
    }
    s++;
    e--;
}
console.log("True");













// let s = "madam";
// let n = s.length;
// let rev =""; //Initialize an empty string

// for(let i=n-1 ; i>=0 ; i--){
//     rev += s.charAt(i);  
// }

// if( s === rev)
//     console.log("Yes");
// else
//     console.log("No");
