$(document).ready(function() {
  $.getJSON('ninjas.json', 
    function(data) {
      alert('Fetched ' + data.length + ' ninjas !');
      console.log(data);
    });
});


//challenge 1: add more ninjas to ninjas.json

//challenge 2: make a client template function (just like example 1) 
//to display all the ninjas in a table instead of the alert box

//challenge 3:
//daisy chain the below code to the $.getJSON call to add some error handling

/*.done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
*/
