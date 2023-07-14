
var ganji = ["신","유","술","해","자","축","인","묘","진","사","오","미"]

function zodiac(year){
  return ganji[year %12];
}


alert(zodiac(2000));