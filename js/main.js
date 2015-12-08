var height = $(window).height();
var width = $(window).width();

var workWidth = $('.work-container').width();

var clicked = 'false';
    
//console.log(height);

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
    
    $('.hero').css({
        "height":""+height+"px",
    });
    
    $('.work-container').css({
        'height': (workWidth)+'px',
    });
}

function close()
{}

$('.nav-btn').on('click',function(){
    if(clicked == 'false'){
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
    
  /*if ($(window).scrollTop() >= (height/4)){
    $('.title-holder').css({'opacity':'0',});
  }
    
    if ($(window).scrollTop() <= (height/4)){
    $('.title-holder').css({'opacity':'1',});
  }*/
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
