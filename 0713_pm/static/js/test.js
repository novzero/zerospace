
// var redCup=10;
// var blueCup=20;
// var whiteCup=0;

// document.write("변경 전 빨간컵 : " + redCup + " 파란컵 : " + blueCup + "<br>");

// whiteCup = redCup;
// redCup = blueCup;
// blueCup = whiteCup;

// document.write("변경 후 빨간컵 : " + redCup + " 파란컵 : " + blueCup);



// var jin=0;
// var red=1;
// var blue=2;
// var yellow=3;
// var green=4;

// jin = red;
// document.write("변경 전 : " + jin + "<br>");

// jin=green;
// document.write("변경 후 : " + jin);



// var speed = Number(prompt("자동차 속도를 입력하세요."));

// if(speed>70){
//   document.write("과속입니다.");
// }
// else{
//   document.write("정상속도입니다.");
// }



// var score = Number(prompt("점수를 입력하세요"))

// if(score>=90 && score<=100){
//   document.write("A 등급입니다.")
// }
// else if(score>=80){
//   document.write("B 등급입니다.")
// }
// else if(score>=70){
//   document.write("C 등급입니다.")
// }
// else{
//   document.write("F 등급입니다.")
// }



// var loc = prompt("위치를 입력하세요.");
// var tip = 0;

// if(loc == "서구"){
//   tip==1000;
// }
// else if(loc == "동구"){
//   tip == 2000;
// }

// document.write(loc + "에서의 배달료는 " + tip + "원입니다.");



// var num =Math.floor(Math.random()*14)+7;
// // Math.fllor(Math.random() * (큰숫자-작은숫자+1) + 작은숫자
// document.write(num);



//동전 앞뒷면 맞추기

// var coin = Math.floor(Math.random()*2)+1;

// var user = prompt("1. 앞면 2. 뒷면");

// if(isNaN(user)){    //isNaN함수는 숫자로 변환이 가능한 경우 거짓, 불가능한 경우 참 이다.
//   alert("숫자만 입력하세요");
//   user = prompt("1. 앞면 2. 뒷면");
// }

// user= Number(user);   //문자열을 숫자로 변환
// if(coin == user){
//   document.write((user==1 ? "앞면 " : "뒷면 ") + "정답입니다.")
// }
// else{
//   document.write((user==1 ? "뒷면 " : "앞면 ") + "오답입니다")
// }



//주사위 게임
//주사위는 던져졌다. 주사위의 숫자가 무엇인지 맞추시오.
//내가 입력한 숫자가 주사위의 숫자와 같다면 정답, 같지 않다면 손목 이라고 출력

// var dice = Math.floor(Math.random()*6)+1;

// var user = prompt("주사위의 숫자를 맞춰보세요.");

// if(isNaN(user)){
//   alert("숫자만 입력해주세요");
//   user = prompt("주사위의 숫자를 맞춰보세요.");
// }

// user = Number(user);
// if(dice == user){
//   document.write("정답<br> 주사위의 숫자는 " + dice + "입니다.");
// }
// else{
//   document.write("손목<br> 주사위의 숫자는 " + dice + "입니다.");
// }



/*
과제
주차장 요금 계산
주차장 기본요금 1000원 (30분)
10분 초과 시 100원 추가

2시간 이상 주차시 기본요금 1500원
4시간 이상 주차시 기본요금 2500원
8시간 이상 주차시 무조건 5000원

주차한 시간이 총 몇 분인지 입력하여 요금 출력하기
*/

var user = Number(prompt("주차시간을 입력하세요(분)"));
var fee = 0;      //기본요금
var fee2 = 0;     //추가요금
var time = 0;     //단위시간(분)
var total = 0;    //총요금

if(isNaN(user)){
  alert("숫자만 입력해주세요");
  var user = Number(prompt("주차시간을 입력하세요(분)"));
}

function cal(time, fee){
  fee2 = (user - time)/10 *100;
  total = fee + fee2;
}

if(user <= 30){
  total = 1000;
}
else if(user>30 && user < 120){
  cal(30, 1000);  
}
else if(user>=120 && user<160){
  cal(120, 1500);
}
else if(user>=240 && user<480){
  cal(240, 2500);
}
else{
  total = 5000;
}

document.write("주차요금은 " +total+ "원");
