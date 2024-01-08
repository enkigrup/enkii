$(window).load(function () {
  $("#home").height(window.innerHeight);
});

$(window).on("resize", function () {
  $("#home").height(window.innerHeight);
});

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $("a").each(function () {
      $(this).removeClass("active");
      $(".mobile-menu").hide();
    });
    $(this).addClass("active");
    const target = this.hash;
    const $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 82,
        },
        300,
      );
  });
});

function onScroll(event) {
  const scrollPos = $(document).scrollTop() + 82;
  $(".menu a").each(function () {
    const currLink = $(this);
    const refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".static-url").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

var content = $(".content").hide();
$(".list-item-title").on("click", function () {
  var the_others = $(".active").not(this);
  the_others.removeClass("active");
  the_others.next(".content").slideUp();
  $(this).next(".content").slideToggle();
  $(this).toggleClass("active");
  return false;
});
$(".list-item-title").on("click", function () {
  $(this).closest(".content").slideToggle();
});

$(".mobile-menu-button").click(function () {
  $(".mobile-menu").toggle();
});
