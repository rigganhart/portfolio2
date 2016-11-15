


$(window).scroll(function(){
  var nav = document.getElementById('heroNav');
  if ( $(this).scrollTop() > 500) {
    nav.classList.add("heroNavScrolled");
    console.log("should stick");
    console.log(nav);
  } else {
    nav.classList.remove("heroNavScrolled");
  }
});
