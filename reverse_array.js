/*How do you reverse an array in place in Java? */

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
console.log(numberArray);

function reverseArray(arr){
    let start = 0;
    let end   = arr.length-1;

    while (start < end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        end--;
        start++;
    }
}

reverseArray(numberArray);
console.log(numberArray);


