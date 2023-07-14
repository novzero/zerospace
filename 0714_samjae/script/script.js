
var ganji = ["신","유","술","해","자","축","인","묘","진","사","오","미"]

function zodiac(year){
  return ganji[year %12];
}

document.getElementById("btn").onclick = function(){
  var samjae = false;
  var birth = document.getElementById("birth").value;
  var target = document.getElementById("target").value;
  if(birth.length * target.length == 0){
    alert("생년과 대상연도를 입력해주세요.");
  }else{
    var birthDdi = zodiac(birth);
    var targetDdi = zodiac(target);

    if(birthDdi == "신" || birthDdi == "자" || birthDdi === "진"){
      if(targetDdi=="인" || targetDdi=="묘" || targetDdi=="진"){
        samjae = true;
      }else{
        samjae = false;
      }
    }

    if(birthDdi == "인" || birthDdi == "오" || birthDdi === "술"){
      if(targetDdi=="신" || targetDdi=="유" || targetDdi=="술"){
        samjae = true;
      }else{
        samjae = false;
      }
    }

    if(birthDdi == "사" || birthDdi == "유" || birthDdi === "축"){
      if(targetDdi=="해" || targetDdi=="자" || targetDdi=="축"){
        samjae = true;
      }else{
        samjae = false;
      }
    }

    if(birthDdi == "해" || birthDdi == "묘" || birthDdi === "술"){
      if(targetDdi=="해" || targetDdi=="자" || targetDdi=="미"){
        samjae = true;
      }else{
        samjae = false;
      }
    }

    if(samjae){
      alert(birthDdi +"띠인 당신은 " + target + "년에 삼재입니다.");
    }else{
      alert(birthDdi +"띠인 당신은 " + target + "년에 삼재입니다.");
    }
  }
}