console.log("Project Gutenberg Redesign");

var open = false;
var sideBarText = "<h4>Sign In</h4> <h4>Your Favourites</h4> <h4>Bookshelves</h4> <h4>About</h4> <h4>FAQ</h4> <h4>Donate</h4>"
// how would i add classes to the additional elements above?

$("nav").click(expand);

function expand(){
    // if (open = true){
    //     $("nav").remove(sideBarText);

    //     open = false;
    // }
    // console.log("active");
    $(".sidebar").toggleClass("active");

    $("nav").append(sideBarText);
    open = true;
    

}

