function bubbleSort(arr,n){
    if(n==1)
        return;
    for(let i=0 ; i<n-1 ; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    bubbleSort(arr,n-1);
}

let arr = [5,2,1,3,4,6];
let n = arr.length;
bubbleSort(arr,n);
console.log(arr);