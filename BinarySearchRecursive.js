function bs(arr,s,e,t){
    if(s>e)
        return -1;
    let m = Math.floor((s+e)/2);
    if(t==arr[m])
        return m;
    else if(t < arr[m])
        return bs(arr,s,m-1,t); //left
    else    
        return bs(arr,m+1,e,t); //right
}

let arr = [1,3,5,6,8,9,12];
let n = arr.length;
let t = 7;
console.log(bs(arr,0,n-1,t));