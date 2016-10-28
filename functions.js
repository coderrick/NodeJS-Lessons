/**
 * Function Expression - var test = function() {};
 * Function Declaration - function test() {};
 * 
 */


/**
 * Regular function example
 */
function showOutput(){
    console.log('I am a regular function');
}

/**
 * Anonymous function example
 */
var a = function (){
    console.log('I am a regular function');
}

/**
 * http://gregfranko.com/blog/i-love-my-iife/ 
 * IIFE (Immediately Invokable Function Expressions) function example
 * wrapping function in parenthesis turns it into a function express see top of file
 */
(function(){
  // my special code
}());

/** 
 *  Method example.
 *  i.e A method in JavaScript is just a function that is a property of an object
 * 
 */
var anObject = {
    method: function justDoIt(){
        console.log('I am a method');
    }
}


/**
 * 
 * A callback function, also known as a higher-order function, is a function that is passed to another 
 * function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called
 * (or executed) inside the otherFunction
 * 
 */