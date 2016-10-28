/**
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