$(function(){

  var bt_list="";   //버튼 태그를 만들어서 담아줄 변수
  for(var i=1; i<=8; i++){
   var r = Math.floor(Math.random()* 256);
   var g = Math.floor(Math.random()* 256);
   var b = Math.floor(Math.random()* 256);

    bt_list += "<button onclick='select(this)' style='background:rgb("+r+","+g+","+b+")'></button>";

  }  

  $("#color").html(bt_list);
});


function select(obj){
  var color = $(obj).css("background");
 
  opener.$("table>tbody>tr>td").css("background",color);
}