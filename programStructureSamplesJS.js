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
