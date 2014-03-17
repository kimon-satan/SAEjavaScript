function yell(n){ 
      return n > 0 ? yell(n-1) + "a" : "hiy"; 
} 

console.log(yell(4));

//Exercise 1: cut paste and modify to make the above function an anonymous function of the property yell in the object ninja. Add a function call using console.log() to test it works


var ninja = {
    
    yell: null;
    
};

//Exercise 2: point samurai's yell to ninja's yell. Test it out with console.log();

var samurai = {

    yell: null;

};

//Exercise 3: uncomment the below to set ninja to an empty object. 
//Does the samurai's yell still work ? 
//What about if you try and run it after ninja has been set to an empty object ? 
//var ninja = {};

//Exercise 4: try making ninja's yell property a named function and see if it solves the problem. 

