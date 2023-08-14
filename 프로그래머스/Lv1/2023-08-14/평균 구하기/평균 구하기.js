//# reduce
function solution(arr) {
    return arr.reduce((sum, current) => sum + current) / arr.length;
}

//# for문
function solution(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
}
    return sum / arr.length;
}

//# eval함수 
function solution(arr) {
    return eval(arr.join('+')) / arr.length;
}