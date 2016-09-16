jQuery(document).ready(function($){
$('#example-navbar-collapse a:first').tab('show');
})

$(document).ready(function(){
	
$('#figure1').click(function(){
	$('div.fg1').addClass('active');
	$('div.fg2').removeClass('active');
	$('div.fg3').removeClass('active');
	$('div.fg4').removeClass('active');
	$('div.fg5').removeClass('active');
	$('div.fg6').removeClass('active');
	
	
});

$('#figure2').click(function(){
	$('div.fg2').addClass('active');
	$('div.fg1').removeClass('active');
	$('div.fg3').removeClass('active');
	$('div.fg4').removeClass('active');
	$('div.fg5').removeClass('active');
	$('div.fg6').removeClass('active');
});

$('#figure3').click(function(){
	$('div.fg3').addClass('active');
	$('div.fg2').removeClass('active');
	$('div.fg1').removeClass('active');
	$('div.fg4').removeClass('active');
	$('div.fg5').removeClass('active');
	$('div.fg6').removeClass('active');
});

$('#figure4').click(function(){
	
	$('div.fg4').addClass('active');
	$('div.fg2').removeClass('active');
	$('div.fg3').removeClass('active');
	$('div.fg1').removeClass('active');
	$('div.fg5').removeClass('active');
	$('div.fg6').removeClass('active');
});

$('#figure5').click(function(){
	
	$('div.fg5').addClass('active');
	$('div.fg2').removeClass('active');
	$('div.fg3').removeClass('active');
	$('div.fg4').removeClass('active');
	$('div.fg1').removeClass('active');
	$('div.fg6').removeClass('active');
});

$('#figure6').click(function(){
	
	$('div.fg6').addClass('active');
	$('div.fg2').removeClass('active');
	$('div.fg3').removeClass('active');
	$('div.fg4').removeClass('active');
	$('div.fg5').removeClass('active');
	$('div.fg1').removeClass('active');
});



});

/* function changecss(){
	x=document.getElementById("navbutton");
	  $("ul.nav li a").removeClass("daohang");
	  $("ul.nav").addClass("daohang1");
}
 */
$(window).resize(function(){
	x=$(window).width();
	if (x>767){
	$("ul#navul li a").addClass("daohang");
    $("ul#navul").removeClass("daohang1");
	}
	else {
		$("ul#navul li a").removeClass("daohang");
	  $("ul#navul").addClass("daohang1");
	}
	$('#example-navbar-collapse a:first').tab('show');	
	
})