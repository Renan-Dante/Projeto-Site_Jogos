$(document).ready(function(){
     $('#slider').bxSlider({
            auto: true, 
            controls: false,
            pager: false,
        });
        
        $("#but-menu").click(function(){
            $("#menu").slideToggle();
        });
 });