$(window).load(function(){
  $('#home').height(window.innerHeight);
})

$(window).on("resize", function(){
  $('#home').height(window.innerHeight);
})

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 82
      }, 300);
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop() + 82;
  $('.menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.static-url').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}

var content = $('.content').hide();
$('.list-item-title').on('click', function () {
    var the_others = $('.active').not(this);
    the_others.removeClass('active');
    the_others.next('.content').slideUp();
    $(this).next('.content').slideToggle();
    $(this).toggleClass('active');
    return false;
});
$('.list-item-title').on('click', function () {
    $(this).closest('.content').slideToggle();
});