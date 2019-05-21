// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

var prevNav = null;
// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  var allNavs = document.getElementsByClassName("navbarControl");
  for (var i = 0 ; i < allNavs.length ; i++)
  {
    var bounding = allNavs[i].getBoundingClientRect();
    var x = "navbar-" + (i+1);
    var toBeHighlighted = document.getElementById(x);

    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    {
      if (prevNav)
        prevNav.classList.remove("highlighted");
      toBeHighlighted.classList.add("highlighted");
      prevNav = toBeHighlighted ;
    }
  }
}