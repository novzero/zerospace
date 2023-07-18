
var now = new Date();
var year = now.getFullYear();

var month = now.getMonth();

var wol = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// alert(month + 1);
// alert(wol[month]);
var date = now.getDate();
var day = now.getDay();
var yoil = ["일", "월", "화", "수", "목", "금", "토"];

var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();

var ampm = "";
if(hour>=12){
  ampm = "PM";
  hour= hour-12;
}else{
  ampm = "AM";
}
if(hour==0){
  hour = 12;
}

function addZero(num){
  if(num<10){
    var result="";
    result = "0" + num;
  }
  else{
    result = num;
  }
  return result;
}


//2023-07-18 화요일 00시 00분 00초

month = addZero(month+1);
date = addZero(date);
day = yoil[day];
hour = addZero(hour);
min = addZero(min);
sec = addZero(sec);

var naljja = year + "-" + month + "-" + date + " " + day +"요일";
naljja += " " + ampm + " " + hour + ":" + min + ":" + sec;

// alert(naljja);



//timestamp를 이용한 날짜계산
//2022-02-03 이 날로부터 며칠 지났는지
//now의 timestamp - 2022-02-03 timestamp = 지나온 세월

document.getElementById("datebtn").onclick = function(){
  
  var date = document.getElementById("date").value;
  var anni = new Date(date);
  var anniTimestamp = anni.getTime();
  var nowTimestamp = now.getTime();
  
  var duration = nowTimestamp - anniTimestamp;
  
  duration = parseInt(duration/1000);
  //하루 = 24시간 = 1440분 = 86400초
  duration = duration/86400;
  duration = Math.floor(duration);
  
  document.getElementById("result").value = duration +"일 째입니다.";
}


$("#list1>li").mouseover(function(){
  $(this).css("color","red");
});

$("#list1>li").mouseout(function(){
  $(this).css("color","black");
});

$(document).ready(function(){
  $("#list1>li").click(function(){
    $(this).hide();
  });
  
  $("#nation").change(function(){
    alert($(this).val());
  });

  $("input").focus(function(){
    $(this).css("outline","2px solid red");
  });
  $("input").blur(function(){
    $(this).css("outline","none");
  });

  $("#input1").keyup(function(){
    var t = $(this).val();
    $("#final").text(t);
  });

  $("#submitBtn").click(function(){
    alert();
  });

  //input2에서 키가 눌렸을 때 방금 눌린키가 엔터키 라면
  //#submitBtn을 누른셈이나 다름없게 하겠다.
  //엔터키의 키 코드는 13번

  $("#input2").keyup(function(event){
    if(event.keyCode == 13){
      $("#submitBtn").trigger("click");
    }
  });


  //문서 내에서 마우스가 움직일 대마다 이런일들을 하겠다.
  //방금 움직인 그 마우스의 x, y 좌표를 찾아라
  //#fly인 녀석에게 x, y 좌표를 통해 위치를 지정해준다.

  $(document).mousemove(function(event){
    var x = event.clientX;
    var y = event.clientY;
    $("#fly").css({left:x+"px", top:y+"px"});
  });


  //.main에 마우스 올렸을 때 이런 일이 벌어질 것이다.
  //방금 그것의 자식 중 .sub라고 하는 자식을 보여주자.
  //.main에서 마우스 치웠을 때 이런 일이 벌어질 것이다,.
  //방금 그것의 자식중 .sub라고 하는 녀석을 숨겨주자.

  $(".main").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
  });
  $(".main").mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
  });

});