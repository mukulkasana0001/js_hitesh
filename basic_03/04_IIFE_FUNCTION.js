// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// WITHOUT NAME IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// WE CAN PASS ARGUMENT LIKE AS HERE WE PASS 'HITESH'  TO "NAME" PARAMETER 