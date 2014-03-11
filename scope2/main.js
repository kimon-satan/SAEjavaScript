
var foo = function(){
   
   a = "a";  //this method is generally frowned upon
   window.b = "b"; 
   var c = "c";

}

foo();

document.write("the value of a is " + a);
document.write("<BR><BR>");
document.write("the value of b is " + b);
document.write("<BR><BR>");

try{
    document.write("the value of c is " + c);
}catch(e){
    document.write("but the value of c is not accessible globally"); 
}
