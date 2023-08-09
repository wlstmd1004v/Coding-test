function solution(myString) {
    return myString
    .split('')
    .map(char => {
        if (char >= 'a' && char <= 'k') {
            return 'l';
        }
        return char;
    })
    .join('');

}

//^ function solution(myString) {
//^    return myString.replace(/[a-k]/g, 'l');
//^}  