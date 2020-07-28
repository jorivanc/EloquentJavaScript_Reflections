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
// → ["a", "b", "d", "e"]
concat glue arrays together.  if concat argument is not an array that element will be added to the array as a one-element-array.

listOfNumber.includes(8)  //true   checks whether a given value exists in the array
Array loops:
for-of
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
the 'in' operator tells if an object has a property of that name. :                     console.log("squirrel" in day1);   //true
hasOwnPropertyis an alternative for 'in' operator: (ignores the object prototype)       day1.hasOwnProperty("squirrel");   //true
to find the keys or properties of an object (not in the prototype):                     Object.keys(OBJECT);   //["key1","key2",...,"keyN",]
to copy all properties (or replace if already exist) of an ObjectB to an Object A use:  Object.assign(objectA, objectB);
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
------------------------------------------------------------------------------------------------------------------------

Higher Order Functions
HOF are function that operate on other functions either as arguments or by returning them.(very useful for data processing)

HOF standard array methods
Arrays HOF methods:
findIndex:      returns the position(index) of the first element in the array that satisfies functionTest    array.findIndex(functionTest);
some:           returns a boolean if at leas one element of the array passes functionTest   array.some(functionTest(element){});
forEach:        array.forEach(function);        (does not return anything) is an array built-in fucntion that provides something like for-of as a HOF   (i.e  ["A", "B"].forEach(l => console.log(l));)    code unit 16 bits same as length method and accessing with string[1] or string.charCodeAt(position != (string.codePointAt(position)) or for-of) both use 2 units
filter:         array.filter(functionTest);     returns a new array with the elements that passed the functionTest
map:            array.map(transformFunction);   returns a new array after applying the transformFunction to all the elements of the original array
reduce:         array.reduce(reducerFunction, intialValue);   returns a single output value after executing a reducerFunction on each element
                reducerFunction(accumulator,currentElement){...}
                examples:
                let scores = [90,30,20,75,85,95,0,55];
                let total = scores.reduce((accumulator,element) => accumulator+element,0);   //typical use of reduce.
                let minMax = scores.reduce((acc,score)=> [Math.min(acc[0],score), Math.max(acc[1],score)] ,[Infinity,0]);    //reduce can return a different type of value inthis case [min,max]

                const students = [
                    {userid:'stevenh',
                    name:'steve',
                    passFail:true
                    },
                    {userid:'debbw',
                    name:'deb',             //we want to access an object using the userid: studentsObj.debbw = {Object with debbw info}
                    passFail:true
                    },
                    {userid:'maxv',
                    name:'Max',
                    passFail:false
                    }
                ];
                let studentsObj = students.reduce(function(acc,person){
                return {...acc, [person.userid]: person}
            },{});
            ------------------------------------------------------------------------------------------------------------------------

The Secret Life Of objects
This:
        When a function is called as a method—looked up as a property and immediately called, as in object.method()—the binding called this in its body automatically points at the object that it was called on.
call:   Think of "this" as an extra parameter that is passed in a different way. If you want to pass it explicitly, you can use a function’s "call" method, which takes the this value as its first argument and treats further arguments as normal parameters. method.call(thisDesiredObject,methodParameters);
        speak.call(hungryRabbit, "Burp!");     where function speak(str){console.log(str);}    and     hungryRabbit = {type: "hungry", speak};
        Arrow functions do not bind their own 'this' but can see the 'this' binding of the scope around them
            function normalize() {
                             \/------------------------| reference to the surrounding scope
                console.log(this.coords.map(n => n / this.length));
            }
            normalize.call({coords: [0, 2, 3], length: 5});         // → [0, 0.4, 0.6]
Prototype:

Object.prototype is at the root of tree-shapped structure. it provides a few methods that show up in all object such as object.toString(); (only constructor functions have a .property, INSTANCES DO NOT have a .prototype they have a __proto__)
Functions derive from Function.prototype, and arrays derive from Array.prototype.
getPrototypeOf:     returns the prototype of an object. Object.getPrototypeOf(object);  (if object = {} then // Object.prototype  == {})
setPrototypeOf:     sets a prototype of an object. (use create instead) Object.setPrototypeOf(object, prototypeObject);
creating objects
create:             You can use Object.create to create an object with a specific prototype. let newObject = Object.create(prototypeObject);
                    let newObj = {
                        property1: value1,
                        property2: value2,
                        method1(){ method1Body},                        //shorthand way of defining a method
                        method2: function(paramMethod2){ method2Body}
                    }

                    let newObj = new Object();  // create and object with Object constructor and then add properties and methods
                    newObj.property1 = value1;
                    newObj.method1 = function(){}

                    function objConstructor(paramConstructor){
                        this.property1 = value1;
                        this.property2 = value2;                        this properties will be directly on the object constructor not on the prototype
                        this.method1 = function(){};
                    }
                    let newObj = new objConstructor(paramConstructor)

Classes: (function declarations are hoisted (can be declared after being used, classes declarations are NOT))
a class defines the shape of a type of object. the constructor makes sure the instances derived from the class have defined their own properties and the proper prototype assigned.
    function makeRabbit(type) {
        let rabbit = Object.create(protoRabbit);
        rabbit.type = type;
        return rabbit;
    }
Class Notation: (methods and only methods will be added to the prototype during class declaration (they can be added later), the constructor will have a special treatment)
    class Rabbit {
      constructor(type) {
        this.type = type;
      }
      speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
      }
    }
    let killerRabbit = new Rabbit("killer");

Constructor: (constructor names are Capitalized.   constructors prototype = Function.prototype.    instances prototype = constructor.protottype)
using NEW in front of a function will treat the function as a constructor (This means that an object with the right prototype is automatically created, bound to this in the function, and returned at the end of the function.)
    function Rabbit(type) {
        this.type = type;
        }
        Rabbit.prototype.speak = function(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    };
    let weirdRabbit = new Rabbit("weird");

Map: (use for-of to return an array [key, value]) some methods of map: get(key), has(key), set(key,value), delete(key)
is dangerous using objects as maps i.e let objMap = { pedro: 35}; be careful because ("toString" in objMap) == true
posible solutions:
- create an object without a prototype:     let newObj = Object.create(null)
- create a Map: (allows any type of keys)   let newObj = new Map();     newObj.set("pedro",39);   newObj["pedro"] = 39;

Symbols: symbols are unique and can be used as property names (pair symbol as property, value will not be displayed with for-in loop, also will be ignored with JSON.stringify) always use saque braquets when using symbols as property name
let sym = Symbol("name");               //The string you pass to Symbol is included when you convert it to a string with sym.toString()
console.log(sym == Symbol("name"));     // → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);          // → 55

Iterator:
if an object is iterable then it means that it has a method named with the Symbol.iterator symbol. when called, that method should return an object that provides a second interface, 'iterator'. This is the actual thing that iterates. It has a next method that returns the next result. That result should be an object with a value property that provides the next value, if there is one, and a done property, which should be true when there are no more results and false otherwise
    let okIterator = "OK"[Symbol.iterator]();
    console.log(okIterator.next());             // → {value: "O", done: false}
    console.log(okIterator.next());             // → {value: "K", done: false}
    console.log(okIterator.next());             // → {value: undefined, done: true}

Getters:
properties that are accessed directly may hide a method call. Such methods are called getters.
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};
console.log(varyingSize.size);      // → 73    its called as a property not as a method

Setter:
change or mutate properties
    const person = {
        firstName : "jorge",
        lastName : "castano",
        get fullName(){
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value){
            let [first,last] = value.split(" ");
            this.firstName = first;
            this.lastName = last;
        }
    }
    console.log(person.fullName);               //jorge castano
    person.fullName = "carlos ramirez";
    console.log(person.fullName);               //carlos ramirez

Static: does not require an instance to be create in order to be used. it needs to be called directly on the class i.e Console.log() or Math.random() usually utility functions

Inheritance:
    class SubClass extends SuperClass{
        constructor(arguments){
            super(arguments){...
            }
        }
        methodToModify(arguments){//this will override the old method
            super.methodToModify();
        }
    }

instanceOf:     let you know if an object is derived from a specific class. i.e console.log([1] instanceof Array);      // → true

SEARCH
    - difference between for-in (loop over properties names in Objects or "0" , "1", ... in arrays) / for-of (loop over values) mostly used for arrays. the object is expected to be 'iterable'
    - DEBUGGING javascript
    - interfaces javascript
    - .reduce function Javascript
    - destructuring
    - new javascrip class (is a just function?)
    - Objects private variables (using # still in proposal?)

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
