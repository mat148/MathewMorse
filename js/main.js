window.onload = init;
var namePos = 0;
var titlePos = 0;
        
function init()
{
    var name = document.getElementsByName('name');
    var title = document.getElementsByName('title');
    namePos = (parseInt($(name).css('top'), 10))+70;
    $(name).css("opacity","1");
    $(name).css("top",namePos+"px");
            
    setTimeout(function(){
        //titlePos = (parseInt($(title).css('top'), 10))+70;
        $(title).css("opacity","1");
        $(title).css('top', '+=50px');
    }, 150);
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
 