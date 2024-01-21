function bubbleSort(nums){
    let n = nums.length;
    for(let i=1 ; i<n ; i++){ //no of passes = n-1
        for(let j=1 ; j<=n-i ; j++){ //comparison
            if(nums[j] < nums[j-1]){
                //swap
                let temp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = temp;
            }
        }
    }
    return nums;
}
let nums = [3,0,1,4,2,5];
let sorted = bubbleSort(nums);
console.log(sorted);