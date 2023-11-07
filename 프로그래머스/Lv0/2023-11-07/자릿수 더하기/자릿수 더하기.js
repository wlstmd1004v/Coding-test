function solution(n){
    var answer = 0;
    let a = String(n).split('')
    let sum = 0;
    for (let i=0; i<a.length; i++){
        sum += Number(a[i])
    }
    return answer = sum;
}