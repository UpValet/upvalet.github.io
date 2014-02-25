$('#requestor-email').on("keypress", function(event){
	if(event.keyCode == 13){
		$('#requestor-email').hide();
		$('#requestor-thanks').show();
		return false;
	}
});

		$('#requestor-thanks').hide();