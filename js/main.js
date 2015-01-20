window.onload = init;
        
function init()
{
    var name = document.getElementsByName('name');
    var title = document.getElementsByName('title');
    name[0].style.opacity = 1;
    name[0].style.top = '150px';
            
    setTimeout(function(){
        title[0].style.opacity = 1;
        title[0].style.top = '120px';
    }, 300);
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