function solution(n) {
    return Array.from({length: n - 1}, (_, i) => i + 1)
    .find(x => n % x === 1);
}