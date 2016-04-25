$(function(){

//main variables
  var $page = $(".page");
  var $wrapper = $(".wrapper");
  var $overlay = $(".overlay");
  var $details = $(".details");

  //open modal when card is clicked
  $page.on("click",".directory__row", function(){

  //popup card details
    var $detailC1 = $(this).attr("detailColumn1");
    var $detailC2 = $(this).attr("detailColumn2");
    var $detailC3 = $(this).attr("detailColumn3");
    var $detailC4 = $(this).attr("detailColumn4");
    var $detailC5 = $(this).attr("detailColumn5");

    $details.find(".detail__column1").attr("src",$detailC1);
    $details.find(".detail__column2").text($detailC2);
    $details.find(".detail__column3").text($detailC3);
    $details.find(".detail__column4").text($detailC4);
    $details.find(".detail__column5").text($detailC5);
    
    $overlay.fadeIn();
  });

  //close modal when close button is clicked

  $wrapper.on("click", ".button__close", function(){
    $overlay.fadeOut();
    $details.find(".detail__column1").attr("",$detailC1);
    $details.find(".detail__column2").text("");
    $details.find(".detail__column3").text("");
    $details.find(".detail__column4").text("");
    $details.find(".detail__column5").text("");
  });

});