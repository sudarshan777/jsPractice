function checkPalindrome(word){
    const size = word.length;
    for(let i = 0; i < size/2;i++){
        console.log(i);
        if (word[i]!==word[size-1-i]){
            return false;

        }
    }
    return true;

}

console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('racedcar'))