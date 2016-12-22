(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){





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

},{}]},{},[1])