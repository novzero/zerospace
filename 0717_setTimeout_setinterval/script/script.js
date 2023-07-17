//페이지를 연 후 3초가 지났을 때 이런 일을 할 것이다.
//아이디가 box1인 녀석 안에 "hello"라는 문자열을 추가한다.

//setTimeout(할일, 지연시간)

/*
setTimeout(function(){
  document.getElementById("box1").innerHTML
  = document.getElementById("box1").innerHTML + "Hello";
}, );
*/

// 3000은 3초를 뜻함.

/*
for(i=0;i<100;1++){
  document.getElementById("box1").innerHTML
  = document.getElementById("box1").innerHTML + "Hello";
}
*/


/*
setTimeout(function(){
  location.href="http://naver.com";
}, 3000);
*/



//한자리 숫자인 경우 앞에 "0"을 추가해주는 함수

function addZero(num){
  //숫자(num)가 만약 한자리 숫자라면 왼쪽에 "0"을 더해주고 가공된 숫자 출력
  //한자리 숫자가 아니라면 num 그대로 출력한다.
  var result;
  if(num<10){
    result = "0" + num;
  }else{
    result = num;
  }
  return result;
}

function add2Zero(num){
  if(num < 10){
    result = "00" + num;
  }else if(num < 100){
    result = "0" + num;
  }else{
    result = num;
  }
  return result;
}

var clock = setInterval(function(){
  //현재 시간을 캡처한다.
  //당시 시, 분, 초를 알아낸다.
  //각각 시간이 한 자리 숫자일 경우 addZero 함수 사용.
  //이렇게 만들어진 시간을 시: 분: 초 의 형태로 만들어서 id가 box1인 곳의 내용으로 출력.

  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var msec = now.getMilliseconds();

  hour = addZero(hour);
  min =  addZero(min);
  sec = addZero(sec);
  msec = add2Zero(msec);

  var time = hour + ":" + min + ":" + sec + ":" + msec;
  document.getElementById("box1").innerHTML = time;
}, 30);

document.getElementById("clockStopBtn").onclilck = function(){
  clearInterval(clock);
};


//최소값, 최대값을 지정하고 그 사이에서 랜덤한 정수를 만드는 함수
// Math.random(최대값-최소값+1) + 최소값
// Math.floot(Math.random(최대값-최소값+1) + 최소값);

function rand(min, max){
  return Math.floor(Math.random()*(max-min+1) +min);
};
// var count = [0,0,0,0,0,0];
// for(i=0; i<100; i++){
//   var num = rand(1,6);
//   count[num-1] ++;
// }
// alert(count);

setInterval(function(){
  var r = rand(0, 255);
  var g = rand(0, 255);
  var b = rand(0, 255);
  
  document.getElementsByTagName("body")[0].style.backgroundColor = "rgb("+r+","+g+","+b+")";
}, 3000000);



var text = "안녕하세요.";
// alert(text.indexOf("하"));
// alert(text.substring(2,5));


//path에서 확장자 추출하기
var path = "dsdsfd/sdf/dsf/ac/df.dfds.342.sdf3.jpg";
path = path.split("/");
var ext = path[path.length-1].split(".")    //파일명
ext = ext[ext.length-1]     //확장자
alert(ext);

