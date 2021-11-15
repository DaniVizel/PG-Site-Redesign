// For Bookshelf Menu
// $(this).children("img:first")
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible

$(".page-marker").click(function(){
    $(".nav-bar").toggleClass("active");
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
// add function to dynamically adjust line length

//long reading
// var width = $(window).width();
// console.log(width);
// if (width < 1200){
//   console.log ("small");
// }
