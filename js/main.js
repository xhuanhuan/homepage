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
	if ($("#navbutton").css('display')=='none'){
	$("ul#navul li a").addClass("daohang");
	$('.daohang-li').css({width:'18%','margin-left':'2%'});
    $("ul#navul").removeClass("daohang1");
	$('#example-navbar-collapse').css({'background-color':'rgba(255,255,255,0)'});
	$('#navandtab').css({'margin-top':'3%'});
	}
	else {
		$("ul#navul li a").removeClass("daohang");
	  $("ul#navul").addClass("daohang1");
	  $('.daohang-li').css({width:'100%','margin-left':'0'});
	  $('#example-navbar-collapse').css({'background-color':'gray'});
	  $('#navandtab').css({'margin-top':'0'});
	};
	
	test();
});


  $(window).resize(function(){
	x=$(window).width();
	if ($("#navbutton").css('display')=='none')
	{
	$("ul#navul li a").addClass("daohang");
	$('.daohang-li').css({width:'18%','margin-left':'2%'});
    $("ul#navul").removeClass("daohang1");
    $('#example-navbar-collapse').css({'background-color':'rgba(255,255,255,0)'});
	$('#navandtab').css({'margin-top':'3%'});
	}
	else {
		$("ul#navul li a").removeClass("daohang");
	  $("ul#navul").addClass("daohang1");
	  $('.daohang-li').css({width:'100%','margin-left':'0'});
	  $('#example-navbar-collapse').css({'background-color':'gray'});
	  $('#navandtab').css({'margin-top':'0'});
	}
/* 	$('#example-navbar-collapse a:first').tab('show');	*/
    test();
})
$('#navandtab').resize(function(){
	test();
});

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
	var x=$(window).width();
	
	if ($("#navbutton").css('display')=='block'){
    $('#navul').slideUp();
/* 	$("#navbutton").attr("aria-expanded","false"); */
	$('#navbutton').click();
	}
	
	setTimeout("test()",200);
}
function sliddown(){
	$("#navbutton").attr("aria-expanded","false");
	$('#navul').slideDown();
	setTimeout("test()",200);
}

function test(){
var x=$('#navandtab').height()/$(window).height();
	if (x>0.8){
		
		$('.footer1').hide();
		$('.footer2').show();
	}
	else{
	/* 	alert('f1'); */
		$('.footer2').hide();
		$('.footer1').show();
	};
}
