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
*/
