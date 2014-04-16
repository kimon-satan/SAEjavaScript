$(document).ready(function() {

	var ninjas = [];

  $.ajax({
    url: "ninjas",
    success: function(data){
     var urls = $(data).find("a:contains(.json)");
     alert(urls.length + " JSON Ninjas found !");
     
   }
 });

});


//challenge 1: use $getJSON to load each of the ninjas array

//challenge 2: copy the code from the previous example to load them into a table

//Longer challenge: make a game which uses JSON files for it's configuration
//eg. a maze game ... how would you construct your JSON to make tiled maze background ?


