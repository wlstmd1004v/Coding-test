function solution(n, t) {
    return n * 2 ** t;
    }

function solution(n, t) {
    let answer = n;
    for(let i = 0; i < t; i++){
        answer *= 2
    }
    return answer;
}