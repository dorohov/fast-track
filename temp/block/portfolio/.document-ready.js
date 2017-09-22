var url = window.location.href;
$('.portfolio-navbar__nav a[href="'+url+'"]').parent().addClass('is--active');  
$('.portfolio-tabs__navbar li').eq(0).addClass('active');  
$('.portfolio-tabs__pane-container .portfolio-tabs__pane').eq(0).addClass('active');