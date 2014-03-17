//which of the variables are global and which are local


var foo = function(){
   
   a = "a";  //this method is generally frowned upon
   window.b = "b"; 
   var c = "c";

}

foo(); 

//CHALLENGE 1: modify foo so that c can be read from outside of the function
//CHALLENGE 2: make b local 

document.write("the value of a is " + a);
document.write("<BR><BR>");
document.write("the value of b is " + b);
document.write("<BR><BR>");

try{
    document.write("the value of c is " + c);
}catch(e){
    document.write("but the value of c is not accessible globally"); 
}


