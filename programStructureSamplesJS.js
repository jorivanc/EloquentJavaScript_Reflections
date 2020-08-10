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

/*
EXERCISE #15
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/
// class Vec{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     plus(vector){
//         return new Vec(vector.x+this.x, vector.y+this.y);
//     }
//     minus(vector){
//         return new Vec(this.x-vector.x, this.y-vector.y);
//     }
//     get length(){
//         return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
//     }
// }
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));     // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));    // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);                  // → 5

/*
EXERCISE #16
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods.
Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

// class Group {
//   constructor(){
//       this.members = [];
//   }
//   add(value){
//        if(!this.members.includes(value))   //if (!this.has(value))
//         this.members.push(value);
//   }
//   delete(value){
//       if(this.members.includes(value)){
//           this.members.splice(this.members.indexOf(value),1);   //this.group = this.group.filter(v => v !== value);
//       }
//   }
//   has(value){
//       return this.members.includes(value);
//   }
//   static from(iterObj){
//       let group = new Group();
//       for(let element of iterObj){
//           group.add(element);
//       }
//       return group;
//   }
//   get printGroup(){
//       console.log(this.members.toString());
//   }
// }
// let group = Group.from([10, 20]);
// group.printGroup;
// console.log(group.has(10)); // → true
// console.log(group.has(30)); // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10)); // → false

/*
EXERCISE #17
Make the Group class from the previous exercise iterable. (to run, uncomment EXERCISE #16)
*/
// class GroupIterator{
//     constructor(group){
//         this.pos = 0;
//         this.group = group;
//     }
//     next(){
//         if(this.pos >= this.group.members.length)   return {done:true};
//         return {value: this.group.members[this.pos++], done:false}
//     }
// }
// Group.prototype[Symbol.iterator] = function(){
//     return new GroupIterator(this);
// };
// for (let value of Group.from(["a", "b", "c"])) {
//   console.log(value);
// } // → a // → b // → c

/*
EXERCISE #18
Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
*/
// let map = {one: true, two: true, hasOwnProperty: true};
// // Fix this call
// // console.log(map.hasOwnProperty("one"));
// console.log(Object.prototype.hasOwnProperty.call(map,"one"));   // → true


/*
PROJECT ROBOT
*/
//  Meadowfield: The village of Meadowfield isn’t very big. It consists of 11 places with 14 roads between them. It can be described with this array of roads:
// const roads = [
//   "Alice's House-Bob's House",   "Alice's House-Cabin",
//   "Alice's House-Post Office",   "Bob's House-Town Hall",
//   "Daria's House-Ernie's House", "Daria's House-Town Hall",
//   "Ernie's House-Grete's House", "Grete's House-Farm",
//   "Grete's House-Shop",          "Marketplace-Farm",
//   "Marketplace-Post Office",     "Marketplace-Shop",
//   "Marketplace-Town Hall",       "Shop-Town Hall"
// ];
//
// //  The network of roads in the village forms a graph. Let’s convert the list of roads to a data structure that, for each place, tells us what can be reached from there.
// function buildGraph(edges) {
//   let graph = Object.create(null);
//   function addEdge(from, to) {
//     if (graph[from] == null) {
//       graph[from] = [to];
//     } else {
//       graph[from].push(to);
//     }
//   }
//   for (let [from, to] of edges.map(r => r.split("-"))) {
//     addEdge(from, to);
//     addEdge(to, from);
//   }
//   return graph;
// }
// const roadGraph = buildGraph(roads);

/*  The task: Our robot will be moving around the village.
There are parcels in various places, each addressed to some other place.
The robot picks up parcels when it comes to them and delivers them when it arrives at their destinations
Let’s condense the village’s state down to the minimal set of values that define it. There’s the robot’s current location and the collection of undelivered parcels, each of which has a current location and a destination address
*/
// class VillageState {
//   constructor(place, parcels) {
//     this.place = place;
//     this.parcels = parcels;
//   }
//
//   move(destination) {                                     //It first checks whether there is a road going from the current place to the destination, and if not, it returns the old state since this is not a valid move
//     if (!roadGraph[this.place].includes(destination)) {
//       return this;
//     } else {
//       let parcels = this.parcels.map(p => {               //The call to map takes care of the moving
//         if (p.place != this.place) return p;
//         return {place: destination, address: p.address};
//     }).filter(p => p.place != p.address);                 //the call to filter does the delivering
//       return new VillageState(destination, parcels);
//     }
//   }
// }

// usage sample
// let first = new VillageState(
//   "Post Office",
//   [{place: "Post Office", address: "Alice's House"}]
// );
// let next = first.move("Alice's House");
// console.log(next.place);    // → Alice's House
// console.log(next.parcels);  // → []
// console.log(first.place);   // → Post Office

//Simulation
// function runRobot(state, robot, memory) {
//   for (let turn = 0;; turn++) {
//     if (state.parcels.length == 0) {
//       console.log(`Done in ${turn} turns`);
//       break;
//     }
//     let action = robot(state, memory);
//     state = state.move(action.direction);
//     memory = action.memory;
//     console.log(`Moved to ${action.direction}`);
//   }
// }

//Random Robot
// function randomPick(array) {
//   let choice = Math.floor(Math.random() * array.length);
//   return array[choice];
// }
// function randomRobot(state) {
//   return {direction: randomPick(roadGraph[state.place])};
// }

//Static method to create a new state with some parcels. (written here by directly adding a property to the constructor)
// VillageState.random = function(parcelCount = 5) {
//   let parcels = [];
//   for (let i = 0; i < parcelCount; i++) {
//     let address = randomPick(Object.keys(roadGraph));
//     let place;
//     do {
//       place = randomPick(Object.keys(roadGraph));
//   } while (place == address);                         //We don’t want any parcels that are sent from the same place that they are addressed to
//     parcels.push({place, address});
//   }
//   return new VillageState("Post Office", parcels);
// };
//
// //First Virtual World
// runRobot(VillageState.random(), randomRobot);
// // → Moved to Marketplace
// // → Moved to Town Hall
// // → …
// // → Done in 63 turns

//Need to figure out how to integrate animatevillage.js to make this run.
//runRobotAnimation(VillageState.random(), randomRobot);

//The mail truck’s route: If we find a route that passes all places in the village, the robot could run that route twice, at which point it is guaranteed to be done. Here is one such route (starting from the post office):
// const mailRoute = [
//   "Alice's House", "Cabin", "Alice's House", "Bob's House",
//   "Town Hall", "Daria's House", "Ernie's House",
//   "Grete's House", "Shop", "Grete's House", "Farm",
//   "Marketplace", "Post Office"
// ];
// function routeRobot(state, memory) {
//   if (memory.length == 0) {
//     memory = mailRoute;
//   }
//   return {direction: memory[0], memory: memory.slice(1)};
// }
// runRobot(VillageState.random(), routeRobot, []);
// //runRobotAnimation(VillageState.random(), routeRobot, []);

//Pathfinding
/*
we are mostly interested in the shortest route.
So we want to make sure we look at short routes before we look at longer ones.
A good approach would be to “grow” routes from the starting point, exploring every reachable place that hasn’t been visited yet, until a route reaches the goal
*/
// function findRoute(graph, from, to) {
//   let work = [{at: from, route: []}];
//   for (let i = 0; i < work.length; i++) {
//     let {at, route} = work[i];
//     for (let place of graph[at]) {
//       if (place == to) return route.concat(place);
//       if (!work.some(w => w.at == place)) {
//         work.push({at: place, route: route.concat(place)});
//       }
//     }
//   }
// }
// function goalOrientedRobot({place, parcels}, route) {
//   if (route.length == 0) {
//     let parcel = parcels[0];
//     if (parcel.place != place) {
//       route = findRoute(roadGraph, place, parcel.place);
//     } else {
//       route = findRoute(roadGraph, place, parcel.address);
//     }
//   }
//   return {direction: route[0], memory: route.slice(1)};
// }
// runRobot(VillageState.random(),goalOrientedRobot, []);
// //runRobotAnimation(VillageState.random(),goalOrientedRobot, []);



/*
EXERCISE #19        Measuring a robot
Write a function compareRobots that takes two robots (and their starting memory).
It should generate 100 tasks and let each of the robots solve each of these tasks.
When done, it should output the average number of steps each robot took per task
*/
// function runRobot(state, robot, memory) {
//   for (let turn = 0;; turn++) {
//     if (state.parcels.length == 0) return turn;
//     let action = robot(state, memory);
//     state = state.move(action.direction);
//     memory = action.memory;
//   }
// }
// function compareRobots(robot1, memory1, robot2, memory2) {
//   let avgStepsR1 = 0, avgStepsR2 = 0;
//
// //	runRobot(VillageState.random(), randomRobot);
//   for(let i = 0; i<99; i++){
//     let task = VillageState.random();
// 	avgStepsR1 += runRobot(task, robot1, []);
// 	avgStepsR2 += runRobot(task, robot2, []);
//   }
//   console.log(`the average of steps of ${robot1.name} was ${avgStepsR1/100}`);
//   console.log(`the average of steps of ${robot2.name} was ${avgStepsR2/100}`);
// }
// compareRobots(routeRobot, [], goalOrientedRobot, []);       //the average of steps of routeRobot was 17.97
//                                                             //the average of steps of goalOrientedRobot was 15.07

/*
EXERCISE #20        Robot efficiency
Can you write a robot that finishes the delivery task faster than goalOrientedRobot?
If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?
If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
*/
// function lazyRobot({place, parcels}, route) {
//   if (route.length == 0) {
//     // Describe a route for every parcel
//     let routes = parcels.map(parcel => {
//       if (parcel.place != place) {
//         return {route: findRoute(roadGraph, place, parcel.place),
//                 pickUp: true};
//       } else {
//         return {route: findRoute(roadGraph, place, parcel.address),
//                 pickUp: false};
//       }
//     });
//     // This determines the precedence a route gets when choosing.
//     // Route length counts negatively, routes that pick up a package
//     // get a small bonus.
//     function score({route, pickUp}) {
//       return (pickUp ? 0.5 : 0) - route.length;
//     }
//     route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
//   }
//
//   return {direction: route[0], memory: route.slice(1)};
// }
//
// //runRobotAnimation(VillageState.random(), lazyRobot, []);
// compareRobots(lazyRobot, [], goalOrientedRobot, []);       //the average of steps of routeRobot was 17.97

/*
EXERCISE #21        Persistent Group
Write a new class PGroup, similar to the Group class from Chapter 6, which stores a set of values. Like Group, it has add, delete, and has methods
Its add method, however, should return a new PGroup instance with the given member added and leave the old one unchanged. Similarly, delete creates a new instance without a given member.
The class should work for values of any type, not just strings. It does not have to be efficient when used with large amounts of values.
The constructor shouldn’t be part of the class’s interface (though you’ll definitely want to use it internally). Instead, there is an empty instance, PGroup.empty, that can be used as a starting value.
Why do you need only one PGroup.empty value, rather than having a function that creates a new, empty map every time?
ANSWER: You need only one empty instance because all empty groups are the same and instances of the class don’t change. You can create many different groups from that single empty group without affecting it.
*/
// class PGroup {
//   constructor(members) {
//     this.members = members;
//   }
//   add(value) {
//     if (this.has(value)) return this;
//     return new PGroup(this.members.concat([value]));
//   }
//   delete(value) {
//     if (!this.has(value)) return this;
//     return new PGroup(this.members.filter(m => m !== value));
//   }
//   has(value) {
//     return this.members.includes(value);
//   }
// }
// PGroup.empty = new PGroup([]);
//
// let a = PGroup.empty.add("a");
// let ab = a.add("b");
// let b = ab.delete("a");
// console.log(b.has("b"));    // → true
// console.log(a.has("b"));    // → false
// console.log(b.has("a"));    // → false

/*
EXERCISE #22
Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure.
Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
Make sure you handle only the exceptions you are trying to handle.
*/
// class MultiplicatorUnitFailure extends Error {}
//
// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }
// function reliableMultiply(a, b) { //Recursive solution
//     try{
//         return primitiveMultiply(a,b);
//     } catch (e){
//         if(e instanceof MultiplicatorUnitFailure){
//             console.log("The function primitiveMultiply produced an error MultiplicatorUnitFailure, let me try again");
//             return reliableMultiply(a,b);
//         }
//         else console.log(e);
//     }
// }
// //Non recursive Solution
// // function reliableMultiply(a, b) {
// //   for (;;) {
// //     try {
// //       return primitiveMultiply(a, b);
// //     } catch (e) {
// //       if (!(e instanceof MultiplicatorUnitFailure))
// //         throw e;
// //     }
// //   }
// // }
// console.log(reliableMultiply(8, 8));// → 64

/*
EXERCISE #23
Write a function called withBoxUnlocked that takes a function value as argument,
unlocks the box, runs the function, and then ensures that the box is locked again before returning,
regardless of whether the argument function returned normally or threw an exception.
*/
// const box = {
//   locked: true,
//   unlock() { this.locked = false; },
//   lock() { this.locked = true;  },
//   _content: [],
//   get content() {
//     if (this.locked) throw new Error("Locked!");
//     return this._content;
//   }
// };
// function withBoxUnlocked(body) {
//     let locked = box.locked;
//     if(!locked)  return body();
//     box.unlock();
//   try{
//       return body();
//   } finally {
//       box.lock();
//     }
// }
// withBoxUnlocked(function() {
//   box.content.push("gold piece");
// });
// try {
//   withBoxUnlocked(function() {
//     throw new Error("Pirates on the horizon! Abort!");
//   });
// } catch (e) {
//   console.log("Error raised: " + e);
// }
// console.log(box.locked);
// // → true

/*
EXERCISE #24
write a regular expression to test whether any of the given substrings occur in a string
    car and cat
    pop and prop
    ferret, ferry, and ferrari
    Any word ending in ious
    A whitespace character followed by a period, comma, colon, or semicolon
    A word longer than six letters
    A word without the letter e (or E)
*/
// function verify(regexp, yes, no) {
//   if (regexp.source == "...") {
//       console.log("you havent finished this exercise" + regexp.source);
//       return;
//   }
//   for (let str of yes) if (!regexp.test(str)) {
//     console.log(`Failure to match '${str}'`);
//   }
//   for (let str of no) if (regexp.test(str)) {
//     console.log(`Unexpected match for '${str}'`);
//   }
//   console.log("everything is working fine!")
// }
// verify(/ca[rt]/,
//        ["my car", "bad cats"],
//        ["camper", "high art"]);
// verify(/pr?op/,
//        ["pop culture", "mad props"],
//        ["plop", "prrrop"]);
// verify(/ferr(et|y|ari)/,
//        ["ferret", "ferry", "ferrari"],
//        ["ferrum", "transfer A"]);
// verify(/ious\b/,
//        ["how delicious", "spacious room"],
//        ["ruinous", "consciousness"]);
// verify(/\s[.,;:]/,
//        ["bad punctuation ."],
//        ["escape the period"]);
// verify(/\w{7,}/,
//        ["hottentottententen"],
//        ["no", "hotten totten tenten"]);
// verify(/\b[^\We]+\b/i,
//        ["red platypus", "wobbling nest"],
//        ["earth bed", "learning ape", "BEET"]);

/*
EXERCISE #25
Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.
Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.
*/
// let text = "'I'm the cook,' he said, 'it's my job.'";
// console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// // → "I'm the cook," he said, "it's my job."
/*

EXERCISE #26
Write an expression that matches only JavaScript-style numbers.
It must support an optional minus or plus sign in front of the number, the decimal dot, and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent.
Also note that it is not necessary for there to be digits in front of or after the dot, but the number cannot be a dot alone.
That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t.
*/               //[+-]
// let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
// // Tests: Will not display anything because it passes all the tests
// for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
//                  "1.3e2", "1E-4", "1e+12"]) {
//   if (!number.test(str)) {
//     console.log(`Failed to match '${str}'`);
//   }
// }
// for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
//                  ".5.", "1f5", "."]) {
//   if (number.test(str)) {
//     console.log(`Incorrectly accepted '${str}'`);
//   }
// }
