




$(document).ready(function(){
  $(window).scroll(function(){
    var nav = document.getElementById('heroNav');
    if ( $(this).scrollTop() > 300) {
      nav.classList.add("heroNavScrolled");
      console.log("should stick");
      console.log(nav);
    } else {
      nav.classList.remove("heroNavScrolled");
    }
  });
  $("#full").click(function() {
      $('html, body').animate({
          scrollTop: $("#fullStack").offset().top
      }, 2000);
  });
  $("#story").click(function() {
      $('html, body').animate({
          scrollTop: $("#myStory").offset().top
      }, 2000);
  });
  $("#group").click(function() {
      $('html, body').animate({
          scrollTop: $("#groupProjects").offset().top
      }, 2000);
  });
  $(window).scroll(function() {
    var x = $(this).scrollTop();
    $('#change').css('background-position', '100% ' + parseInt(-x / 3) + 'px' + ', 0% ' + parseInt(-x / 4) + 'px, center top');
  });
  $(window).scroll(function() {
    var x = $(this).scrollTop();
    $('#change2').css('background-position', '100% ' + parseInt(-x / 1) + 'px' + ', 0% ' + parseInt(-x / 2) + 'px, center top');
  });
})
