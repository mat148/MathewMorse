var height = $(window).height();
    
//console.log(height);
    
$('.hero').css({
    "height":""+height+"px",
});

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

    /*$(".work").hover(function(){
        $(".work").css("background-color", "yellow");
        },function(){
        $(".work").css("background-color", "pink");
    });*/
    
    /*$( ".work" ).hover(
  function() {
    $( this ).children(".project-container").css("top", "279px");
  }, function() {
    $( this ).children(".project-container").css("top", "313px");
  }
);*/
 

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
