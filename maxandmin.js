let arr = [3,4,1,5,2];
let n = arr.length;
let max = arr[0];
let min = arr[0];

for(let i=1 ; i<n ; i++){
    if(arr[i] > max){
        max = arr[i];
    }

    if(arr[i] < min){
        min = arr[i];
    }
}

console.log(max);
console.log(min);
