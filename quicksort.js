/*How is an integer array sorted in place using the quicksort algorithm? */

function partition(arr, start, end){

    const pivot = arr[end];
    let partitionIndex = start;
    for (let i = start; i < end ; i++ ){
        if (arr[i] <= pivot){
            [arr[i],arr[partitionIndex]]=[arr[partitionIndex],arr[i]]
            partitionIndex++;
        }
    }
    [arr[end],arr[partitionIndex]]=[arr[partitionIndex],arr[end]];
    return partitionIndex;

}

function quicksort(arr,start,end){
    if (start < end){
        const pIndex = partition(arr,start,end);
        quicksort(arr,start,pIndex-1);
        quicksort(arr,pIndex+1,end);
    }
}

const numbers = [9,4,6,2,6,7,3,7,9,4,2,6,6,4,2,5,1,8];

quicksort(numbers,0,numbers.length-1);

console.log(numbers);
