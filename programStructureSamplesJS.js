/*
  EXERCISE #1
  Write a loop that makes seven calls to console.log to output the following triangle:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/

// for (let line = "#"; line.length < 8; line+="#")
//   console.log(line);

/*
EXERCISE #2
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// for (let num = 1; num <= 100; num++){
//   let printThis = "";
//   if (num % 3 == 0) printThis += "Fizz";
//   if (num % 5 == 0) printThis += "Buzz";
//   console.log(printThis || num);
// }

/*
EXERCISE #3
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

//let board = "";
//let size = 8;
//for (let x = 0; x < size ; x++){
//  for(let y = 0; y < size; y++){
//    if ((x+y) % 2 == 0) board+="_";
//    else board+="#";
// }
// board+="\n";
//}
//console.log(board);

/*
EXERCISE #4
Write a function min that takes two arguments and returns their minimum.
*/

//function min(x,y){
//    return (x<y?x:y)
//}
//console.log(min(0,10));
//console.log(min(0,-10));

/*
EXERCISE #5
-Zero is even.
-One is odd.
-For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive,
whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// function isEven(num){
//     if (num == 0) return true;
//     else if (num == 1) return false;
//     else if (num < 0) return isEven(-num);
//     else return isEven(num - 2);
// }
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-10));

/*
EXERCISE #6
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/
// function countBs(str){
//     let counter = 0;
//     for(let i = 0; i< str.length ; i++){
//         if (str[i] == "B")
//             counter++;
//     }
//     return counter;
// }
// console.log(countBs("BBCbBB"));

// function countChar(str,char){
//     let counter = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i]==char)
//             counter++;
//     }
//     return counter;
// }
// console.log(countChar("kakkerlakkK", "k"));

/*
EXERCISE #7
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior
*/
// function range(st,end,step= st < end ? 1 : -1 ){
//     let array = [];
//     if (step>0){
//         for(let i=st; i<=end; i+=step) array.push(i);
//     } else {
//         for(let i=st; i>=end; i+=step) array.push(i);
//     }
//     return array;
// }
// function sum(array){
//     let s = 0;
//     for (let num of array){
//         s += num;
//     }
//     return s;
// }
// console.log(range(1, 10));          // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));       // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));     // → 55

/*
EXERCISE #8
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
*/
// function reverseArray(array){
//     let newArray = [];
//     for (let element of array) newArray.unshift(element);
//     return newArray;
// }
// function reverseArrayInPlace(array){
//     for(let i=0; i<Math.floor(array.length/2); i++){
//         let temp = array[array.length-1-i];
//         array[array.length-1-i]=array[i];
//         array[i]=temp;
//     }
//     return array;
// }
// console.log(reverseArray(["A", "B", "C"]));         // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);                            // → [5, 4, 3, 2, 1]

/*
EXERCISE #9
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
Also write a listToArray function that produces an array from a list.
Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
*/
// function arrayToList(array){
//     let list = null;
//     for(let i = array.length-1; i>=0 ; i--){
//         list = {value: array[i], rest: list};
//     }
//     return list;
// }
// function listToArray(list){
//     let array = [];
//     for(let node=list; node ; node=node.rest){
//         array.push(node.value);
//     }
//     return array;
// }
// function prepend(value,list){
//     return {value, rest:list};
// }
// function nth(list,n){
//     let element = undefined;
//     let node = list;
//     for(let i = 0; i<=n ; i++){
//         if (node.rest==null && i!=n) return undefined;   //it reached the last node (and i!=n) so there are less than n nodes which means it doesnt exist.
//         element = node.value;
//         node = node.rest;
//     }
//     return element;
// }
// function nthRecursive(list,n){
//     if(!list) return undefined;
//     else if(n==0) return list.value;
//     else return nthRecursive(list.rest,n-1);
// }
// console.log(arrayToList([10, 20]));                     // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));    // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));            // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 4));         // → undefined
// console.log(nthRecursive(arrayToList([10, 20, 30]), 0));// → 10
/*
EXERCISE #10
Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual
*/
// function deepEqual(a,b){
//     if(a===b) return true;
//     if(a==null || typeof a!="object" || b==null || typeof b!="object") return false;
//     let keysA = Object.keys(a), keysB=Object.keys(b);
//     if(keysA.length != keysB.length) return false;
//     for(let key of keysA){
//         if(!keysB.includes(key) || !deepEqual(a[key],b[key])) return false;
//     }
//     return true;
// }
// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));                           // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));          // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // → true

/*
EXERCISE #11
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/
// let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(arrays.reduce((acc,element) => acc.concat(element),[]));        // → [1, 2, 3, 4, 5, 6]

/*
EXERCISE #12
Write a higher-order function loop that provides something like a for loop statement.
It takes a value, a test function, an update function, and a body function.
Each iteration, it first runs the test function on the current loop value and stops if that returns false.
Then it calls the body function, giving it the current value.
Finally, it calls the update function to create a new value and starts from the beginning.
When defining the function, you can use a regular loop to do the actual looping.
*/
// function loop(value,testFunc,updateFunc,bodyFunc){
//     for(; testFunc(value); value = updateFunc(value)){
//         bodyFunc(value);
//     }
// }
// loop(3, n => n > 0, n => n - 1, console.log);   // → 3  // → 2  // → 1

/*
EXERCISE #13
Analogous to the some method, arrays also have an every method.
This one returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
Implement every as a function that takes an array and a predicate function as parameters.
Write two versions, one using a loop and one using the some method.
*/
// function every(array, test) {
//   for(let element of array){
//       if(!test(element)) return false;
//   }
//   return true;
// }
// function every2(array,test) {
//     if(array.length == 0) return true;
//     if(array.length == 1 && array.some(test))
//         return true;
//         else{
//             const [a,...rest] = array;
//             return [a].some(test) && every(rest,test)
//     }
// }
// function every3(array, test) {
//   return !array.some(element => !test(element));
// }
// console.log(every3([1, 3, 5], n => n < 10));        // → true
// console.log(every3([2, 4, 16], n => n < 10));       // → false
// console.log(every3([], n => n < 10));               // → true

/*
EXERCISE #14
Write a function that computes the dominant writing direction in a string of text.
Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters that have a script associated with them.
The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/
// require('./scripts.js');
// // console.log(SCRIPTS[0]);
// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => {
//       return code >= from && code < to;
//     })) {
//       return script;
//     }
//   }
//   return null;
// }
// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({name, count: 1});
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }
// function dominantDirection(text) {
//     let scripts = countBy(text, char => {
//         let script = characterScript(char.codePointAt(0));
//         return script? script.direction: "space";
//     }).filter(({name}) => name != "space");
//     return scripts.reduce((acc,element) => acc.count>element.count? acc.name: element.name,{name:"nothing",count:0});
// }
// function dominantDirection2(text) {
//   let counted = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none";
//   }).filter(({name}) => name != "none");
//   if (counted.length == 0) return "ltr";
//   return counted.reduce((a, b) => a.count > b.count ? a : b).name;
// }
// console.log(dominantDirection("Hello!"));               // → ltr
// console.log(dominantDirection("Hey, مساء الخير"));      // → rtl
