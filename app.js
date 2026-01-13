console.log(`hello`);

// Create a for loop that runs 5 times. Log the current iteration to the console.

// for loops
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

// while loops
// while loops will run until the condition in their brackets is false. They’re useful when you don’t know how many times you want to run the loop. It may be that you only increment the counter on certain conditions, or that you want to run the loop until a random number that meets a certain condition is generated.

// ⛳️ Create a while loop that runs until the counter reaches 5. Log the current iteration to the console.

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

// ⛳️ Create a while loop that runs until Math.random() returns a value lower than 0.1. If the value is lower than 0.1, set keepLooping to true which will stop the loop.

// 📝 Note!

// Math.random() is a function inbuilt to JavaScript that returns a random floating point (similar to demcimal) value between 0 and 1.

let keepLooping = false;
let i = 0;
while (keepLooping == false) {
  console.log("Iteration", i);

  keepLooping = Math.random() < 0.1;
  i++;
}

// Looping over arrays
// ⛳️ Create an array of your favourite foods. Loop over the array and log each item to the console.

// Notice how the index used by the for loop is used to log out a different item in the array each time the loop iterates, and how the condition of the for loop is the length of the array.

const favouriteFoods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < favouriteFoods.length; i++) {
  console.log(favouriteFoods[i]);
}

// Alternative syntax for loops for arrays
// There are two other types of for loop in modern JavaScript you can use to iterate over arrays.

// The first is the for...of loop. It’s similar to the regular for loop, but it’s more concise and easier to read. It can be less versatile because it doesn’t give you access to the index of the item in the array.

const foods = ["pizaa", "chocolate", "ice cream", "cheese"];
for (let food of foods) {
  console.log(food);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

// The second is the forEach method. It’s a method on all arrays, and it accepts a function as an argument. The function is called for each item in the array, and is passed the item as an argument.

const foods1 = ["pizza", "chocolate", "ice cream", "cheese"];
foods1.forEach(function (foods1) {
  console.log(foods1);
});

// The forEach array method also passes the array index to the anonymous function, so you can use it if you need to.

const foods2 = ["pizza", "chocolate", "ice cream", "cheese"];
foods2.forEach(function (foods2, index) {
  console.log(index, foods2);
});

// Use as many loop types as you can to achieve the following

// Challenge 01:

// Create an array of your favourite animals, loop over the array and write it to the console.
// Try a for loop

// working with arrays and loops

const favouriteAnimals = [
  "cats",
  "dogs",
  "hippopotamuses",
  "lions",
  "tigers",
  "bears",
];
// the last index of the array is laways the length of the array minus 1.

console.log(favouriteAnimals.length);
// we can use i in getting each of our eleemtns out of the array - i already starts at 0; and our index starts at 0.
for (let i = 0; i < favouriteAnimals.length; i++) {
  console.log(favouriteAnimals[i]);
}

// Challenge 02:

// Create an array of your favourite colours, loop over the array and write it to the console.
// Try a forEach loop

// for each is an 'array method'
// it takes a function as an argument

const favouriteColours = ["pink", "blue", "green", "yellow"];
console.log(favouriteColours.length);
favouriteColours.forEach(function (item) {
  console.log(`In my foreach loop, I'm logging ${item}`);
});

// Challenge 03:

// Create an array of your favourite numbers, loop over the array and log each item to the console. Infinity is a number in JavaScript. (But learn how to kill your browser tabs in task/activity manager before you loop until i = Infinity!)
// Try a while loop

// WHILE
let favouritenumbers = ["1", "3", "9", "4"];
// while the condition is true, do this
while (favouritenumbers <= 10) {
  console.log(`Running favourite ${favouritenumbers} value`);
}
