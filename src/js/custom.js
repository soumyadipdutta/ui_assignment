/****************/
/*CUSTOM JS FILE*/
/****************/




$(document).ready(function(){
    $('.c-feed').hide().first().show();
    $('.c-main__right-toppanel ul li').removeClass('active').first().addClass('active');
    $('.c-main__right-toppanel ul li a').click(function(){
        var displayTab = $(this).attr('data-id');
        $('.c-feed').hide();
        $('#'+displayTab).fadeIn('slow');
        $('.c-main__right-toppanel ul li').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.c-datefilter__contentarea').slick();
});



$(window).load(function(){
   
});

$(window).scroll(function(){
	
});

$(window).resize(function() {
    
});