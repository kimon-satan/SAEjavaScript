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


//challenge 3: you can select elements from urls by simply adding selectors to the end as strings
//eg. myDoc.html + ' #myid'
//use this method to display only the description and not the title for each ninja


//challenge 4: add  an event handler to #biography to make the background color change with mouseover