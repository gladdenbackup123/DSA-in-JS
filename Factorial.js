function fact(n){
    if(n==1)
        return 1; // 1

    return n*fact(n-1); //5 , 4 , 3 , 2
}

let n = 5;
console.log(fact(1));


