

// var tag="";
// for(i=0; i<31; i++){
//   tag = tag + "<option>" + (i+1) +"</option>";
// }
// document.getElementById("date").innerHTML = tag;


//오감도-이상
var fiveSense="";
var chinese=["一","二","三","四","五","六","七","八","九","十","十一","十二"]
for(i=0; i=13; i++){
  if(i==0 || i==10){
    fiveSense = fiveSense + "第"+chinese[i]+"의兒孩가무섭다고그리오";
  }
  else{
    fiveSense = fiveSense + "第"+chinese[i]+"의兒孩도무섭다고그리오";
  }
}
document.getElementById("para1").innerHTML = fiveSense;