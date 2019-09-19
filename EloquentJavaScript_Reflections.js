/*

- Javascript uses 64 bits to store a single number value. negative numbers use a bit to store the sign (-)
- CALCULATIONS WITH FRACTIONS ARE NOT PRECISE
- To prevent unexpected TYPE CONVERSION use a === b or a !== b, if both sides are the same type use == or !=
- To set DEFAULT VALUES use ||. console.log(name || "default"); if name is null or ""(empty string) then the default will be used

Types
  Numbers: can be represented by : 705, -705, 7.05, 7.05e2, Infinity, -Infinity, NAN (Not A Number, results when 0/0).
  Booleans: true, false ( 0 == false, 1 == true, '' == false)
  Strings: 'a string', "another string", `one more string`
    scaping characters with \: \n: new line, \t: tab, \\: backslash
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

Control Flow
  Conditional:
    if (expression) {
      statement
    } else if (){}
    
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
   }while(!yourName);
    
   let counter = 1; 
   while(counter < 10){
    console.log(counter++);
   }
    




*/
