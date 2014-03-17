var canFly = function(){return true;};
window.isDeadly = function(){return true;};
function isNimble(){ return true;}

//console.log(isNimble, canFly, isDeadly);
console.log(isNimble(), canFly(), isDeadly());

//Experiment 1: try cutting and pasting each of the functions below this comment
//which of them is able to run before it is defined in the code ?


//Experiment 2: try nesting that function inside an anonymous auto executing function
// can it be accessed outside the anonymous function ?

(function(){

    //this is an anonymous self-executing function
    //put the code you want to run here         
    
})();  




  
