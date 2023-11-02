function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}


function solution(sides) {
    const [long, a, b] = sides.sort((a,b) => b-a);

    return long < a + b ? 1 : 2


}

function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    const sum = sides.reduce((a,b) => a + b, 0) - max;

    answer = max < sum? 1 : 2;

    return answer;
}