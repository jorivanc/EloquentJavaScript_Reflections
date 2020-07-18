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
Rest Arguments: in order for a function to accept any number of arguments use ...   they are treated as an array. if there are other arguments their values are not part of the array (i.e function(x,y,...numbers){})
    function max(...numbers) {
        for (let number of numbers) {
        let numbers = [5, 1, 7];   max(...numbers); you can use rest argument notation(...) to call a function with an array of arguments. (it will extract the values from the array and pass them as individual arguments)
                                   It is possible to include an array like that along with other arguments, as in max(9, ...numbers, 2)
    Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.
    let words = ["never", "fully"];
    console.log(["will", ...words, "understand"]);      // ["will", "never", "fully", "understand"]

Closure:
    being able to reference a specific local binding in an enclosing scope. (a function that references bindings from local scopes around it)
    function rememberN(n){
        return () => n;
    }
    let remember5 = rememberN(5);
    console.log(remember5());               = 5

Recursion:
    a function that calls itself, but in Javascript recursion calls are 3 times slower than looping version.
------------------------------------------------------------------------------------------------------------------------
Data Structures Objects and Arrays
Arrays:
let listOfNumber = [2,5,7,9,8,2];
listOfNumber[0];    //2

listOfNumber.push(4);       [2,5,7,9,8,2,4]
listOfNumber.unshift(33);   [33,2,5,7,9,8,2,4]

listOfNumber.pop();     //4 and array is [33,2,5,7,9,8,2]
listOfNumber.shift();   //33 and array is [2,5,7,9,8,2]

listOfNumber.indexOf(2)         //0     will return -1 if the value is not on the array(could not find the index )
listOfNumberlastIndexOf(2)      //5     both methods can take a second optional argument where to start searching

listOfNumber.slice(2,4)         //[7,9]     slice(included,notIncluded)
listOfNumber.slice(2)           //[7, 9, 8, 2]     slice(included) until the end

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]  concat glue arrays together.  if concat argument is not an array that element will be added to the array as a one-element-array.

listOfNumber.includes(8)  //true   checks whether a given value exists in the array
Array loops:
    for (let i = 0; i < JOURNAL.length; i++) {                      for (let entry of JOURNAL) {
        let entry = JOURNAL[i];                         ===             console.log(`${entry.events.length} events.`);
        // Do something with entry                                   }
    }

Strings:
console.log("Jorge"[2]);                        // r       similar accessing characters as arrays accessing elements
console.log("coconuts".slice(4, 7));            // nut
console.log("one two three".indexOf("ee"));     // 11      indexOf can take search a string containing more than one character
console.log("  okay \n ".trim());               // okay    trim removes whitespace (spaces, new lines, tabs)
console.log(String(6).padStart(3, "0"));        // 006      padStart(total length, pad with this character)
console.log("LA".repeat(3));                    // LALALA

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");                            split deletes the character separator and add the words to an array
console.log(words);                             // ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));                  // Secretarybirds. specialize. in. stomping     takes the elements from the array and join them into a string using the argument as "separator"


Objects:
values of type object are arbitrary collection of properties.

Creating objects:
- with braces (list properties separated by commas, and each property has a name (invalid binding names need to be quoted) and a value after colon)
    let day1 = {
        squirrel:                   false,
        events:                     ["work","pizza","running"],
        "this is another property": "a property"
    };

to add properties or replace values of already existing properties in objects we can:   day1.wolf = false;
the in operator tells if an object has a property of that name. :       console.log("squirrel" in day1);   //true
to find the keys or properties of an object use:          Object.keys(OBJECT);   //["key1","key2",...,"keyN",]
to copy all properties (or replace if already exist) of an ObjectB to an Object A use:    Object.assign(objectA, objectB);
When you compare objects with JavaScript’s == operator, it compares by identity: it will produce true only if both objects are precisely the same value. Comparing different objects will return false, even if they have identical properties.

if a property name in brace notation isn’t followed by a value i.e{events:events, becameASquirrel:squirrel}, its value is taken from the binding with the same name.
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}


Math Object:
it provides mainly a namespace for math function names.
Math.max();
Math.min();
Math.sqrt();
Math.PI
Math.floor();
Math.ceil();
Math.round();
Math.abs();
Math.random();      returns a value between 0 (included) and 1 (expluded)

Destructuring Arrays and Objects:
Rename binding of an array argument
    function phi([n00, n01, n10 , n11]){
        now we can refer to table[0] as n00, table[1] as n01 ....
    }
    let table = [2,4,6,8];
    phi(table);

    let a,b,rest;
    [a, ,...rest] = [2,4,6,8,10];     //a=2  rest=[6,8,10]          //we can skip values but ...rest has to be on the right most position. to assign default value use [a,b=7] = [2]   //a=2 b=7
similar with objects
    let a,b,rest;
    ({a, b:newB, ...rest} = {a:2, b:4, c:6, d:8});     //a=2   b=undefined because we are renaming the bind to newB using "b:newB"   newB=4    rest={c:6, d:8}   //it has to be between () otherwise it will think its a block and will give an error

unpacking fields from objects passed as function parameters
    const user = {
        id: 42,
        displayName: 'jdoe',
        fullName: {
        firstName: 'John',
        lastName: 'Doe'
        }
    };
    function userId({id}) {
        return id;
    }
    function whois({displayName, fullName: {firstName: name}}) {
        return `${displayName} is ${name}`;
    }

JSON JavaScript Object Notation (property names have to be surrounded by "" and only simple data exressions are allowed) file.json
let string = JSON.stringify({squirrel: false,
                            events: ["weekend"]});      creates a string with valid JSON
console.log(string);                                    // {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);                 // ["weekend"]                                  returns as an object or array








SEARCH
    for-in / for-of difference
    .reduce function Javascript
    destructuring

Notes:

    Correlation Equation:
    ϕ =	n11n00 − n10n01/ squareRoot(n1• n0• n•1 n•0)    where n10 is the # of measurements where first variable true and second variable false
                                                        where n1• is the sum of of all measurements where the first variable is true
                                                        where n•0 is the sum of of all measurements where the second variable is false
    i.e     no squirrel no pizza 76           no squirrel pizza 9
            squirrel no pizza    4            squirrel pizza    1
            dividend 1×76−4×9 = 40            the divisor square root of 5×85×10×80, or √340000
            ϕ = 0.069 so there is no correlation eating pizza doesnt make you transform into a squirrel
*/
