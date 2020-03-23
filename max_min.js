/*How do you find the largest and smallest number in an unsorted integer array?*/
let numberArray =[];
for (let i = 1; i <= 1000;i++){
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
function max_min(numberArray){
    let minimum = Number.MAX_SAFE_INTEGER;
    let maximum = Number.MIN_SAFE_INTEGER;

    for (const el of numberArray){
        if (el >= maximum){
            maximum = el;
        }
        if (el <= minimum){
            minimum = el;
        }
    }

    console.log("Maximum is " + maximum);
    console.log("Minimum is " + minimum);
}
max_min(numberArray);

