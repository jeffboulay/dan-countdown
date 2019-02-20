import './main.css';
import $ from "jquery";
import './js/jqcountdown';
$(function () {
   var launchDate = new Date(); 
	launchDate = new Date(launchDate.getFullYear(), 3 - 1, 26); 
    //$('.countdown').countdown({until: launchDate, compact:true,  format: 'HMS'});
    
$(".countdown")
  .countdown("2019/03/026", function(event) {
    $(this).text(
      event.strftime('%D %H %M %S')
    );
  });

	//$('.countdown2').countdown({until: launchDate, compact:true, format: 'HMS',}); 
});