// Immediately Invoked Function Expressions (IIFE)   {it is use for prevent global variable pollution}


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
      // use semicolon

// WITHOUT NAME IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// WE CAN PASS ARGUMENT LIKE AS HERE WE PASS 'HITESH'  TO "NAME" PARAMETER 