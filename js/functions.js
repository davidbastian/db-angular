/*global console,$, Expo, TweenMax*/
$(document).ready(function () {

    //'use strict';
    
    var project = $('.project');

    project.click(function () {
 

    });
    
    
    $('.next').click(function(){
        
        if ($('.project.active').is(':last-child')) {
            
            $('.project').removeClass('active');
            $('.project').eq(0).addClass('active');
            
        } else {
            
            $('.project.active').removeClass('active').next().addClass('active');           
        }
        
    });


});