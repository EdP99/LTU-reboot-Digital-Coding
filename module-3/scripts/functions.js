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