function linearSearch(nums , target){
    let n = nums.length;
    for(let i=0 ; i<n ; i++){
        if(nums[i]==target){
            return i;
        }
    }

    return -1;
}

let nums = [5,3,1,7,8,2];
let target = 9;
let ans = linearSearch(nums,target);
console.log(ans);