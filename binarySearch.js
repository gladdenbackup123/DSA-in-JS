function binarySearch(nums,target){
    let n = nums.length;
    let s = 0;
    let e = n-1; //last index //6

    while(s<=e){ 
        let m = Math.floor((s+e)/2);
        if(nums[m]==target){ //equal
            return m;
        }  
        else if(target > nums[m]){  //right
            s = m+1;
        }
        else{   //left
            e = m-1;
        }
    }
    return -1;
}
let nums = [1,2,3,4,5,6];   
let target = 9;
let ans = binarySearch(nums,target);
console.log(ans);
