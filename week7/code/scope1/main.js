
//declaring three globals - in three ways

var a = "a";
b = "b"; //this method is generally frowned upon
window.c = "c";

document.write("global declared with var: value = " + a );
document.write("<BR><BR>"); 
document.write("global declared implicitly: value = " + b );
document.write("<BR><BR>");
document.write("global declared on window: value = " + c );
document.write("<BR><BR>");
document.write("<BR><BR>");

var foo = function(){
   
   var a = "local a";  
   b = "set from within a closure";
  
   //EXPERIMENT 1 : what happens if you make a local var c inside foo ?
   //EXPERIMENT 2 : how can you refer to both local c and global c ?

}

document.write("foo is called ...");

foo();


document.write("<BR><BR><BR><BR>");
document.write("the value of global a is still " + a);
document.write("<BR><BR>");
document.write("but the value of b is now " + b);
document.write("<BR><BR>");
document.write("and the value of c is now " + c);

