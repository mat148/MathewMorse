$(document).ready(function(){
    $.get("data/blog.xml", function(d){
            //alert('yo');
            //$('body').append('<div class="blah">blah</div>')
        $(d).find('blog').each(function(){
            var $blog = $(this);
            var title = $blog.attr("title");
            var date = $blog.attr("date");
            var imgurl = $blog.attr("imgurl");                         var content = $blog.find("content").text();
            var contentsmall = content.substr(0,300);
            var pageurl = $blog.attr("pageurl");
            
            var html = 
            '<div class="article"><a class="img-holder" href="'+pageurl+'"><img src="'+imgurl+'"/></a><p class="date">'+date+'</p><div class="copy"><h1>'+title+'</h1><p>'+contentsmall+'...</p><a href="'+pageurl+'"><p class="more">Read more...</p></a></div></div>';
            
            $('.article-holder .contain').append($(html));
        });
    });      
});