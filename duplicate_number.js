/*How do you find the duplicate number on a given integer array?
*/

let numberArray =[];
for (let i = 1; i <= 100;i++){
    numberArray.push(i);
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
shuffle(numberArray);
numberArray.pop();
numberArray.push(numberArray[0]);
console.log("Duplicate Number - "+numberArray[0]);

function duplicateNumber(numberArr){
    const myMap = new Map();
    for (let i = 0; i < numberArr.length ; i++ ){
        if(!myMap.has(numberArr[i])){
            myMap.set(numberArr[i],i);
        }
        else {
            return numberArr[i];
        }
    }
}

console.log(duplicateNumber(numberArray));


