
    
$('.career_list > ul > li > a').click(function(e) {
    e.preventDefault();
    
    let id = e.currentTarget.id;
    let container = $('.career_description');
    let scrollTo = $('section#'+id+'');
    let divHeight = $('section#'+id+'');

    // Calculating new position of scrollbar
    let position = scrollTo.offset().top - container.offset().top  + container.scrollTop();

        $('.career_description').css({height:divHeight.height()});
        $('.career_list>ul>li>a').removeClass('selected');
        $('#'+id+'').addClass('selected');

        // Setting the value of scrollbar
        container.scrollTop(position);

        localStorage.setItem('career_id', id);
});

$(window).on('resize', function(e){

    let id = $('.career_list > ul > li > a.selected').attr('id');

        $("#"+id+"").click();
});

$(window).on('load', function(){

    let divHeight = $('section#'+localStorage.career_id+'');

        if (localStorage.career_id != null) { 
                $('.career_description').css({height:divHeight.height()});
                $('#'+localStorage.getItem('career_id')+'').addClass('selected');
        } else { 
                $('.career_list > ul > li > a#proweaver').addClass('selected');
                $('.career_list > ul > li > a#proweaver').css({height:divHeight.height()});
                localStorage.setItem('career_id','proweaver');
        }
        // theme changed onload page
        if( localStorage.getItem('theme_style') == 'dark'){
            $('body').removeClass('light').addClass('dark');
            $('#theme-change').find('span').removeClass('moon-icon').addClass('sun-icon');
        } else if( localStorage.getItem('theme_style') == 'light'){
            $('body').removeClass('dark').addClass('light');
            $('#theme-change').find('span').removeClass('sun-icon').addClass('moon-icon');
        }

});

$('#theme-change').click(function(e) { 
    e.preventDefault();

    if($('body').hasClass("light")) { 
        $('body').removeClass('light').addClass('dark');
        $('#theme-change').find('span').removeClass('moon-icon').addClass('sun-icon');
        localStorage.setItem('theme_style','dark');
    } else {
        $('body').removeClass('dark').addClass('light');
        $('#theme-change').find('span').removeClass('sun-icon').addClass('moon-icon');
        localStorage.setItem('theme_style','light');
    }

});