$(function(){

//main variables
  var $page = $(".page");
  var $wrapper = $(".wrapper");
  var $overlay = $(".overlay");
  var $card = $(".card");

  //open modal when card is clicked
  $page.on("click",".directory__row", function(){

  //popup card details
    var $detailC1 = $(this).attr("detailColumn1");
    var $detailC2 = $(this).attr("detailColumn2");
    var $detailC3 = $(this).attr("detailColumn3");
    var $detailC4 = $(this).attr("detailColumn4");
    var $detailC5 = $(this).attr("detailColumn5");
    var $detailC6 = $(this).attr("detailColumn6");

    $card.find(".detail__column1").attr("src",$detailC1);
    $card.find(".detail__column2").text($detailC2);
    $card.find(".detail__column3").text($detailC3);
    $card.find(".detail__column4").text($detailC4);
    $card.find(".detail__column5").text($detailC5);
    $card.find(".detail__column6").text($detailC6);
    
    $overlay.fadeIn();
  });

  //close modal when close button is clicked

  $wrapper.on("click", ".button__close", function(){
    $overlay.fadeOut();
    $card.find(".detail__column1").attr("",$detailC1);
    $card.find(".detail__column2").text("");
    $card.find(".detail__column3").text("");
    $card.find(".detail__column4").text("");
    $card.find(".detail__column5").text("");
    $card.find(".detail__column6").text("");
  });

});