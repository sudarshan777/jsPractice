let missingNumber = function(nums) {
    
    let sumNums = 100*101/2;
    for(let el of nums){
        sumNums -= el ;
    }
    return sumNums;
    
};

let numsArray =[];
for (let i = 1; i <= 100;i++){
    numsArray.push(i);
}
function shuffle(arr) {
    let i,j;
    i = arr.length-1;
    while (i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        [arr[i] , arr[j]]= [arr[j],arr[i]];
        i--;
    }   
};
shuffle(numsArray);
console.log(numsArray.pop());
console.log(missingNumber(numsArray));


