var findMaxAverage = function(nums, k) {
 
    let prevSum = (nums.slice(0,k).reduce((total, amount) => total + amount));
    let sum = prevSum;
    for(let i= k ; i < nums.length ; i++){
        prevSum += nums[i] - nums[i-k];
        if (prevSum >= sum){
            sum = prevSum;
        }    
    }
    
    return  sum/k;  
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4));