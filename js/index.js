$('#requestor-email').on("submit", function(event){
	$('#requestor-email').hide();
	$('#requestor-thanks').show();
	return false
});

$('#requestor-thanks').hide();


$(window).on('scroll',function(event){
	console.log("SCROLLING");
});

