function fibonacciNumber(num){
    let fN2 = 0; // F(n-2)
    let fN1 = 1; // F(n-1)
    let temp;
    while (num--){
         temp = fN1;
         fN1 += fN2;
         fN2 = temp;
    }
    return fN2;
}

console.log(fibonacciNumber(3));