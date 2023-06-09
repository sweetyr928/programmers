function solution(clothes) {
    let map = new Map();
    for(let i=0;i<clothes.length;i++){
        map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) + 1);
    }
     let answer = 1;
    // 옷의 종류가 a, b, c..
    // (x+a)(x+b)(x+c) = x3 + (a+b+c)x2 + (ab+bc+ca)x + (abc)
    // 정답은 각 계수의 합 -1 과 같음(아무것도 안입은 경우 제외 : x3)
    // 즉, (x에 1 대입한 값 - 1) 이 정답이 됨
     for(let value of map.values()){
        answer *= (1 + value);
    }
    
    return answer - 1;
}