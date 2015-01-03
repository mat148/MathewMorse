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