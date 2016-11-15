


$(window).scroll(function(){
  var nav = document.getElementById('notStuck');
  if ( $(this).scrollTop() > 500) {
    nav.classList.add("navScrolled");
    console.log("should stick");
    console.log(nav);
  } else {
    nav.classList.remove("navScrolled");
  }
});
