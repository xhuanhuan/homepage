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

    x=$(window).width();
	if (x>767){
	$("ul#navul li a").addClass("daohang");
	$('.daohang-li').css({width:'18%','margin-left':'0'});
    $("ul#navul").removeClass("daohang1");
	}
	else {
		$("ul#navul li a").removeClass("daohang");
	  $("ul#navul").addClass("daohang1");
	  $('.daohang-li').css({width:'40%','margin-left':'30%'});
	}

});


  $(window).resize(function(){
	x=$(window).width();
	if (x>767){
	$("ul#navul li a").addClass("daohang");
	$('.daohang-li').css({width:'18%','margin-left':'0'});
    $("ul#navul").removeClass("daohang1");
	}
	else {
		$("ul#navul li a").removeClass("daohang");
	  $("ul#navul").addClass("daohang1");
	  $('.daohang-li').css({width:'40%','margin-left':'30%'});
	}
/* 	$('#example-navbar-collapse a:first').tab('show');	*/
})


function playPause()
{ 
var myVideo=document.getElementById("myvideo");
if (myVideo.paused) 
  myVideo.play(); 
else 
  myVideo.pause(); 
} 

function makeBig()
{ 
var myVideo=document.getElementById("myvideo");
myVideo.width=1200; 
} 

function makeSmall()
{ 
var myVideo=document.getElementById("myvideo");
myVideo.width=320; 
} 

function makeNormal()
{ 
var myVideo=document.getElementById("myvideo");
myVideo.width=800; 
} 
function shousuo(){
	x=$(window).width();
	if (x<767){
    $('#navul').slideUp();
	$("#navbutton").attr("aria-expanded","false");
		
	}
}
function sliddown(){
	$("#navbutton").attr("aria-expanded","false");
	$('#navul').slideDown();
}

