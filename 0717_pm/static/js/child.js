$(function(){
  var name = $(opener.document).find("#name").val();
  $("#input_name").html(name);



  $("parent_send").click(function(){
    var detail = $("#detail").val();
    opener.$("#parent_detail").html(detail);
  });
});