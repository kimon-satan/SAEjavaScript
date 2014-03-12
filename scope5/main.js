
var me = {name: "Simon", age: 42};

(function(){
    
    var occupations = ["teacher", "plumber", "lawyer", "programmer"];
    var index = Math.random() * occupations.length;
    index = Math.floor(index);
    me.occupation = occupations[index];
    
})();

document.write(me.name + "," + me.age + "," + me.occupation);


//CHALLENGE 1: try passing an argument into the function
//CHALLENGE 2: try using a returned argument
//CHALLENGE 3: try wrapping all of your code in an anonymous function so that there are no global variables
