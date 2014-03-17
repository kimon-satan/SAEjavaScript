//Demostrating nearest scope and implicitily declared globals

var foo = function(){
   
   var a = "local to foo";

   var bar = function(){
     a = 12; //using this is okay if we are not using it to definine a new variable
     b = 24;  //there is no nearer scope than global so a new global is made on the window
   }

    bar();

    document.write( "bar has searched for the nearest scope which has a and set it's value to " + a );
    document.write("<BR><BR>");

}

foo();

//CHALLENGE : get rid of the nasty implicit declaration and make b a properly declared global variable

try{
    document.write("the value of a is " + a);
    document.write("<BR><BR>");
}catch(e){
    document.write("the value of a is still not accessible globally ");
    document.write("<BR><BR>"); 
}

try{
    document.write("the value of b is " + b);
    document.write("<BR><BR>");
}catch(e){
    document.write("the value of b is still not accessible globally ");
    document.write("<BR><BR>"); 
}




