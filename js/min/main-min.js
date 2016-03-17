/*exported formValidationSetup, refreshErrorMessages */
/*jshint unused:false*/

var height;
var width;
var namePos;
var titlePos;

var workWidth = $('.work-container').width();

var clicked = 'false';

window.onload = init;
        
function init()
{
    height = $(window).height();
    width = $(window).width();

    workWidth = $('.work-container').width();
    
    var name = document.getElementsByName('name');
    var title = document.getElementsByName('title');
    $(name).addClass("hello-anim");
            
    setTimeout(function(){
        $(title).addClass("second-line-anim");
    }, 150);
    
    $('.hero').css({
        "height":""+height+"px",
    });
    
    $('.work-container').css({
        'height': (workWidth)+'px',
    });
}

$('.slide-out li').on('click',function(){
    if(clicked == 'true'){
        $('.nav-btn .line1').css({
            'top': '0px',
            'transform': 'rotate(0deg) translateY(-50%)',
        });
        $('.nav-btn .line2').css({
            'opacity': '1',
        });
        $('.nav-btn .line3').css({
            'top': '100%',
            'transform': 'rotate(0deg) translateY(-50%)',
        });
        $('.slide-out').css({
            'opacity':'0',
            'pointer-events':'none',
        });
        $('.slide-out li').css({
            'top':'50px',
            'opacity':'0',
        });
        $('html').css({
            'overflow-y':'visible',
        });
        clicked = 'false';
    }
});

$('.nav-btn').on('click',function(){
    if(clicked == 'false'){
        $('.nav-btn .line1').css({
            'top': '50%',
            'transform': 'rotate(45deg)',
        });
        $('.nav-btn .line2').css({
            'opacity': '0',
        });
        $('.nav-btn .line3').css({
            'top': '50%',
            'transform': 'rotate(-45deg)',
        });
        $('.slide-out').css({
            'opacity':'1',
            'pointer-events':'all',
        });
        $('.slide-out li').css({
            'top':'0px',
            'opacity': '1',
        });
        $('html').css({
            'overflow-y':'hidden',
        });
        clicked = 'true';
    }
    else{
        $('.nav-btn .line1').css({
            'top': '0px',
            'transform': 'rotate(0deg) translateY(-50%)',
        });
        $('.nav-btn .line2').css({
            'opacity': '1',
        });
        $('.nav-btn .line3').css({
            'top': '100%',
            'transform': 'rotate(0deg) translateY(-50%)',
        });
        $('.slide-out').css({
            'opacity':'0',
            'pointer-events':'none',
        });
        $('.slide-out li').css({
            'top':'50px',
            'opacity':'0',
        });
        $('html').css({
            'overflow-y':'visible',
        });
        clicked = 'false';
    }
});

$(window).resize(function(){
    var workWidth = $('.work-container').width();
    
    $('.work-container').css({
        'height': (workWidth)+'px',
    });
    
    $('.hero').css({
        "height":""+height+"px",
    });
});

$('.open').on('click', function(){
    alert('yo');
    close();
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= (height-70)) {
    $('nav').css({'background':'#2b333e', 'opacity':'0.98'});
  }
    
  if ($(window).scrollTop() <= (height-70)) {
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


