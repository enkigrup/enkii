function menuOnScroll(mySection, myMenu, myClass) {
    $(window).scroll(function(){
      var elScroll = $(window).scrollTop();
      $(mySection).each(function(i){
        if ($(this).offset().top <= elScroll) {
          $(myMenu).removeClass(myClass);
          $(myMenu).eq(i).addClass(myClass);
        }
      });
    });
  }
  menuOnScroll('.content-area','.menu-link', 'active');
  function scrollToAnyPoint (navItem) {
    var getAttr;
    $(navItem).click(function(e){
      e.preventDefault();
      getAttr = $(this).attr('href');
      var toSection = $(getAttr).offset().top + 10;
      $("html, body").animate({scrollTop:toSection}, 1000)
    });
  }
  scrollToAnyPoint('.menu-link');