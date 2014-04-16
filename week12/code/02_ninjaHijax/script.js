//IMPORTANT: You will need to run this from a webserver - localhost is fine

$(document).ready(function(){

	$('#biographies a').click(function(e) {
		var url = $(this).attr('href');
		$('#biography').load(url);
		e.preventDefault();
	});

});


//challenge 1: add extra html pages for the other ninjas

//challenge 2: make the new html slideDown & slideUp each time the biog is changed 
// You will need to use the callback function for load in the form ...
// $('#biography').load(url, function(){ });
