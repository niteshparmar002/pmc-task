$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
      $(".navbar").css("background", "#333");
      $(".nav-link").css("color", "white");
    }
    else {
      $(".navbar").css("background", "white");
      $(".nav-link").css("color", "black");
    }
  })
})
