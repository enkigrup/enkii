$(window).load(function(){
  $('#workerroadmap').height(window.innerHeight);
})

$(window).on("resize", function(){
  $('#workerroadmap').height(window.innerHeight);
})

function menuOnScroll(mySection, myMenu, myClass) {
    $(window).scroll(function(){
      const elScroll = $(window).scrollTop() + 87;
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
    let getAttr;
    $(navItem).click(function(e){
      e.preventDefault();
      getAttr = $(this).attr('href');
      const toSection = $(getAttr).offset().top - 77;
      $("html, body").animate({scrollTop:toSection}, 300)
    });
  }
  scrollToAnyPoint('.menu-link');