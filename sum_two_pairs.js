/*How do you find all pairs of an integer array whose sum is equal to a given number?*/

numbers = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9]

function sumTwoPairs(numbers,sum){
    let pairs = [];
    const myMap = new Map();
    for(let el of numbers){
        if (!myMap.has(sum-el)){
            myMap.set(el,sum-el);
        }
        else{
            pairs.push([sum-el,myMap.get(sum-el)]);
        }
    }
    return pairs;
   
}

answer = sumTwoPairs(numbers,7);
console.log(answer);