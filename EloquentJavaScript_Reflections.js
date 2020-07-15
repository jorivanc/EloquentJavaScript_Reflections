/*

- Javascript uses 64 bits to store a single number value. negative numbers use a bit to store the sign (-)
- CALCULATIONS WITH FRACTIONS ARE NOT PRECISE
- To prevent unexpected TYPE CONVERSION use a === b or a !== b, if both sides are the same type use == or !=
- To set DEFAULT VALUES use ||. console.log(name || "default"); if name is null or 0 or NaN or ""(empty string) then the default will be used

Types
  Numbers: can be represented by : 705, -705, 7.05, 7.05e2, Infinity, -Infinity, NAN (Not A Number, results when 0/0).
  Booleans: true, false ( 0 == false, 1 == true, '' == false)
  Strings: 'a string', "another string", `one more string`
    escaping characters with \: \n: new line, \t: tab, \\: backslash
    template literals: `${100/50} 100/50` will evaluate what is inside output: 2 100/50
  Empty Values: null, undefined (null == undefined)
    Testing for real Values: (null == Value) will be true only if value==null or value==undefined otherwise will be false

Operators:
  + addition with number and concatenation with strings
  - substraction
  * multiplication
  / division
  % module
  i+=2, i-=2, i*=2, i++, i--
  typeof VAR will specified the type of the variable VAR
  condition ? true : false; conditional operator.

  Comparison:
    >, <, >=, <=, ==, !=, ===, !==

  Logical Operators:
    &&, ||, ! (logical negation)

------------------------------------------------------------------------------------------------------------------------

Bindings
  var (pre-2015), let, const (useful for binding that give a name to a value i.e [const ONE = 1;])
  let x = 1, y =2;

  Casting:
    Number("100"); //returns the number 100 not the string "100", Number("") = 0, Number(true) = 1, Number(false || null) = 0
    String(Object)   or    Object.toString()
    Boolean()    Symbol()

Control Flow
  Conditional:
    if (expression) {
      statement
    } else if (){
  }else { }

    expression? true: false;

    switch(value){
      case "one":
        console.log("something less than 3");
      case "two":
        console.log("something less than 3");
        break;                                    will evaluate case "two" even though case "one" was evaluated because there is not a break clause
      default:
        console.log("something bigger than 3");
        break;
    }

  Loops:
    for(let i=0; i<10; i++){
      if (expression_1) break;          // break will terminate the 'for' and jump out of the loop
      if (expression_2) continue;       // continue will jump to the next iteration
      console.log(i);
    }

   let yourName;
   do{
    yourName = prompt("enter your name");
  }while(!yourName); console.log(yourName)

   let counter = 1;
   while(counter < 10){
    console.log(counter++);
   }

------------------------------------------------------------------------------------------------------------------------

Functions (how to declare)
declaration notation (does not need the ending semicolon and can be declared anywhere in the scope)
function square(){
    return x*x;
}

const square = function(x){
    return x*x;
}

Arrow functions
const square = (x) => { return x*x; };
const square = x => x*x;          when theres only one parameter, parenthesis can be omited. if the body is a single expression, that expression would be returned.
const power = (base, exp) => {
    let result = 1;
    for (let count = 0; count <= exp; count++){
        result*=base;
    }
    return result;
}

LET and CONST are local to the block {} where they are declare.
pre-2015 only functions created new scopes. so VAR is visible in the whole function even if declared inside a loop.
each local scope can see all local scopes that contain it.

function optional arguments
square(4, true, "more arguments"); the language doesnt complain and computes the square of the first argument. extra parameters are ignored. if you pass fewer parameters, the missing ones will get assigned the value undefined.
power (base, exp = 2){...}   to declare default parameter values use = sign. power(4) //16    power(2,6) //64

Closure:
    being able to reference a specific local binding in an enclosing scope. (a function that references bindings from local scopes around it)
    function rememberN(n){
        return () => n;
    }
    let remember5 = rememberN(5);
    console.log(remember5());               = 5

Recursion:
    a function that calls itself, but in Javascript recursion calls are 3 times slower than looping version.





SEARCH
    .reduce function Javascript
*/
