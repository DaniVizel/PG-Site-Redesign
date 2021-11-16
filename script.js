// For Bookshelf Menu
// $(this).children("img:first")
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible

$(".page-marker").click(function(){
    $(".nav-bar").toggleClass("active");

    if($("#about-content").hasClass("active")){
        $("#about-content").removeClass("active");
    }
})
$(".search-button").click(function(){
  $(".search-field").toggleClass("active");
})
$(window).scroll(function(){
  if($(".nav-bar").hasClass("active")){
    $(".nav-bar").removeClass("active");
    $("#about-content").removeClass("active");

  }  
});
$("#about").click(function(){
  $("#about-content").toggleClass("active");
})

//Bookshelf

$(".letter").click(function(){
    $(this).toggleClass("active");

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
})
$(".category").click(function(){
    $(this).toggleClass("active");
    // $(".books-container").css("display", "grid");

})
$(".category.adventure").click(function(){
  $(".book-wrap").toggleClass("hidden");
  $(".book-wrap.adventure").toggleClass("hidden");
})
