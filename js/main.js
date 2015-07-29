var height = $(window).height();
var width = $(window).width();
var clicked = 0;
    
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
}

function close()
{
    $('.slide-out').css({'top':'0px', 'right': - width+'px'});
    $('.slide-out ul').css({'left':'30%'});
    $('.line1').css({'top':'0px', 'transform':'translateY(-50%) rotate(0deg)',});
    $('.line2').css({'opacity':'1',});
    $('.line3').css({'top':'100%', 'transform':'translateY(-50%) rotate(0deg)',});
    clicked = 0;
}

$('.nav-btn').on('click',function(){
    if(clicked == 0){
        $('.slide-out').css({'top':'0px','right':'0px'});
        $('.slide-out ul').css({'left':'10%'});
        $('.line1').css({'top':'50%', 'transform':'translateY(-50%) rotate(45deg)',});
        $('.line2').css({'opacity':'0',});
        $('.line3').css({'top':'50%', 'transform':'translateY(-50%) rotate(-45deg)',});
        clicked = +1;
    }
    else{
        close();
    }
});

$('.slide-out').on('click', function(){
    close();
} );

$('.open').on('click', function(){
    alert('yo');
    close();
});

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
