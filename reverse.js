let arr = [1,2,3,4,5];
let n = arr.length;
let s = 0;
let e = n-1;

while(s<e){
    //swap ( arr[s] , arr[e] )
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;

    s++;
    e--;
}

console.log(arr);