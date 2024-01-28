// x = 2;
// n = 3;
// //calculate x raised to power n (2^3)
// let ans = 1;
// for(let i=1 ; i<=n ; i++ ){
//     ans = ans*x;
// }
// console.log(ans);

function pow(x,n){
    if(n==0)
        return 1;
    return x*pow(x,n-1);
}

let x = 3;
let n = 4;
console.log(pow(x,n));