var height = $(window).height();
var width = $(window).width();

var workWidth = $('.work-container').width();

var clicked = 'false';
    
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
    
    $('.work-container').css({
        'height': (workWidth)+'px',
    });
}

function close()
{
    $('.slide-out').css({'top':'0px', 'right': - width+'px'});
    $('.slide-out ul #aboutButton').css({'left':'100%'});
    $('.slide-out ul #workButton').css({'left':'120%'});
    $('.slide-out ul #resumeButton').css({'left':'140%'});
    $('.slide-out ul #contactButton').css({'left':'160%'});
    $('.line1').css({'top':'0px', 'transform':'translateY(-50%) rotate(0deg)',});
    $('.line2').css({'opacity':'1',});
    $('.line3').css({'top':'100%', 'transform':'translateY(-50%) rotate(0deg)',});
    clicked = 'false';
}

$('.nav-btn').on('click',function(){
    if(clicked == 'false'){
        $('.slide-out').css({'top':'0px','right':'0px'});
        $('.slide-out ul li').css({'left':'50%'});
        $('.line1').css({'top':'50%', 'transform':'translateY(-50%) rotate(45deg)',});
        $('.line2').css({'opacity':'0',});
        $('.line3').css({'top':'50%', 'transform':'translateY(-50%) rotate(-45deg)',});
        clicked = 'true';
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

$(window).scroll(function() {
  if ($(window).scrollTop() >= (height-500)) {
    $('nav').css({'background':'#2b333e',});
  }
    if ($(window).scrollTop() <= height) {
    $('nav').css({'background':'transparent',});
  }
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
