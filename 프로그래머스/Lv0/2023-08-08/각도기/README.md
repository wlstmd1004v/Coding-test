# [level 0] 각도기 - 120829

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120829) 

### 성능 요약

(0.03ms, 33.5MB)


### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

Empty

### 문제 설명

각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
<hr>

<h4>제한사항</h4>

<ul>
<li>0 &lt; <code>angle</code> ≤ 180</li>
<li><code>angle</code>은 정수입니다</li>
</ul>

<hr>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>angle</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>70</td>
<td>1</td>
</tr>
<tr>
<td>91</td>
<td>3</td>
</tr>
<tr>
<td>180</td>
<td>4</td>
</tr>
</tbody>
      </table>
<hr>

<h4>입출력 예 설명</h4>

<p>입출력 예 #1</p>

<ul>
<li><code>angle</code>이 70이므로 예각입니다. 따라서 1을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>angle</code>이 91이므로 둔각입니다. 따라서 3을 return합니다.</li>
</ul>

<ul>
<li><code>angle</code>이 180이므로 평각입니다. 따라서 4을 return합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges