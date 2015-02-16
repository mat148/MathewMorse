window.onload = init;
var namePos = 0;
var titlePos = 0;
        
function init()
{
    var name = document.getElementsByName('name');
    var title = document.getElementsByName('title');
    $(name).addClass("hello-anim");
            
    setTimeout(function(){
        $(title).addClass("second-line-anim");
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
 