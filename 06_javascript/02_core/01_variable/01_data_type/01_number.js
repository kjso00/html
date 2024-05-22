/*
    자바의 경우 정수와 실수를 구분해 int,long,float,double 등과 같은 다양한 숫자 타입을 제공한다.
    하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.
*/

var integer = 10;
var double = 5.5;
var negative = -10;

console.log(10 === 10.0);

console.log(10/4);

/*
    Infinity : 양의 무한대
    -Infinity : 음의 무한대
    NaN : 산술 연산 불가
*/
console.log(10/0);
console.log(10/-10);
console.log(1*'문자열');