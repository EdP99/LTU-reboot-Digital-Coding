//global scope

//local scope

var globalScope = "GLOBAL SCOPE";

console.log(globalScope);

function scope () {

    var localScope = 'LOCALSCOPE';

    console.log(globalScope);

    return localScope;

}

var scopeValue = scope();

console.log( scopeValue );
