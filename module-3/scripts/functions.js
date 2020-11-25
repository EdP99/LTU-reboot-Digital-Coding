/* 
Declaring a function


To declare a function, you use the function keyword, followed by the fucntion name, a list of parameters, and the function body.

function functionName ( parameters ) {

    function body

    CODE GOES HERE
}

*/


function greeting( name ) {

    console.log ( 'Hello ' + name );

}

greeting ('Ed');


function nameAndAge ( name, age ) {

    console.log ( name + ' is ' + age + ' years old.' )
}

nameAndAge('Alice', 8);

function message () {
    console.log ('I am new to this!');
}

message ();

// Returning a value

function say ( message ) {
    console.log ( message );
}

// var result = say('Hello');

// console.log ( 'Result', result )

function add ( a, b ) {

    return a + b;
}

console.log( add (1,2) );

var onePlusTwo = add ( 1,2 );

Var twoPlusTwo = add (2, 2)

console.log( onePlusTwo );

console.log( twoPlusTwo );