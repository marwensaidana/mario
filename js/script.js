/*
@title-Caclculator
@author-marwen
@date-13/06/2016
marwen005@hotmail.com
*/

$(function(){


$(document).ready(function() { $(document).keydown(function(key)

 { switch(parseInt(key.which,10)) {
case 83: $('.mario').animate({left: "-=20px"}, 'fast'); 
break;
case 81: $('.mario').animate({top: "+=20px"}, 'fast'); 
break;
case 90: $('.mario').animate({top:"-=20px"},'fast'); 
break;
case 70: $('.mario').animate({left:"+=20px"},'fast'); 
break;
case 76: $('.mario').animate({left:"+=30px", top:"-=55px"}, 'slow'); 
         $('.mario').animate({top:"+=55px"},'fast');
 break; 
case 69: $('.mario').effect("bounce",{times:3, distance: 100}, 900); 
break;
default:
 break;
}
});
});


});