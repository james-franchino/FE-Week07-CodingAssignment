// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // Declare array

console.log(`Ages = ${ages}`); // Log the array

// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!

let result = ages[ages.length - 1] - ages[0]; // Subtracting

// Logging the result
console.log(`Result of subtracting ages = ${result}`);

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Dynamically handle the addition of a new age and repeat subtraction logic.

ages.push(67); // Pushing a new element to the array

console.log(`Updated ages = ${ages}`);

// Checking to see if it's dynamic
let newResult = ages[ages.length - 1] - ages[0];

// Logging the new result
console.log(`New result = ${newResult}`);

// Use a loop to iterate through the array and calculate the average age.
let sumAge = 0; // Placeholder for calculated sum of ages

// for...of loop to get the sum of the array
for (const age of ages) {
  sumAge += age;
}

// Obtaining the average
let averageAge = sumAge / ages.length;

// logging the average
console.log(`Average age = ${averageAge}`);

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

// Creating the names array
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Use a loop to iterate through the array and calculate the average number of letters per name.

// Variable to store the total number of letters
let totalLetters = 0;

// Use a for...of loop to iterate through the array
for (const name of names) {
  totalLetters += name.length; // Add the length of each name to totalLetters
}

// Calculate the average by dividing the total number of letters by the number of elements in the array
const averageLetters = totalLetters / names.length;

/* Rounding the result to 1 decimal
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round */
const averageLettersRounded = Math.round(averageLetters * 10) / 10;

// Logging the result
console.log(
  `The average number of letters per name is: ${averageLettersRounded}`
);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatenatedNames = ""; // Initialize an empty string

// Use a for...of loop to iterate through the array
for (const name of names) {
  concatenatedNames += name + " "; // Add each name followed by a space
}

/* Remove the trailing space
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim */
concatenatedNames = concatenatedNames.trim();

console.log(`Concatenated names: "${concatenatedNames}"`);

// How do you access the last element of any array?
// Write the logic here as a comment or code

// array[array.length - 1];

// How do you access the first element of any array?
// Write the logic here as a comment or code

// array[0];

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array
// and add the length of each name to the nameLengths array.
let nameLengths = []; // Creating the array

// for...of loop to iterate over names and get their length
for (const name of names) {
  nameLengths.push(name.length);
}

console.log(`Length of names = ${nameLengths}`);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumOfNameLengths = 0; // Placeholder for sum of name lengths

// for...of loop to iterate through the nameLengths array
for (const length of nameLengths) {
  sumOfNameLengths += length;
}

console.log(`Sum of name lengths = ${sumOfNameLengths}`);

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

function repeatWord(word, n) {
  let result = ""; // Empty string to store result
  for (let i = 0; i < n; i++) {
    result += word; // Add the word to the result n times
  }
  return result; // return the final string
}

// Testing function
console.log(repeatWord("Function", 5));

// Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.

function createFullName(firstName, lastName) {
  // Concatenating firstName and lastName
  return firstName + " " + lastName;
}

// Testing function
console.log(createFullName("Jon", "Doe"));

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan100(numbers) {
  let sum = 0; // Starting sum of 0
  for (const number of numbers) {
    sum += number; // Add each number in the array to the sum
  }
  return sum > 100; // Return true if the sum is greater than 100, otherwise false
}

// Testing function
console.log(isSumGreaterThan100([10, 20, 30, 40])); // Output: false
console.log(isSumGreaterThan100([50, 60, 10])); // Output: true

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calculateAverage(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number; // Adding numbers in array to the sum
  }
  return sum / numbers.length; // Dividing to get the average
}

// Testing the function
console.log(calculateAverage([10, 20, 30, 40])); // Output: 25
console.log(calculateAverage([5, 15, 25])); // Output: 15

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array
// is greater than the average of the elements in the second array.

function compareAverages(array1, array2) {
  // Calculate the sum of elements in the first array
  let sum1 = 0;
  for (const number of array1) {
    sum1 += number;
  }
  const avg1 = sum1 / array1.length; // Calculate the average of the first array

  // Calculate the sum of elements in the second array
  let sum2 = 0;
  for (const number of array2) {
    sum2 += number;
  }
  const avg2 = sum2 / array2.length; // Calculate the average of the second array

  // Compare the averages
  return avg1 > avg2;
}

// Testing
console.log(compareAverages([10, 20, 30], [15, 25, 35])); // Output: false
console.log(compareAverages([50, 60, 70], [10, 20, 30])); // Output: true

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
  // Check if it is hot outside and moneyInPocket is greater than 10.50
  return isHotOutside && moneyInPocket > 10.5;
}

// Testing
console.log(willBuyDrink(true, 15)); // Output: true (It's hot and there's enough money)
console.log(willBuyDrink(true, 5)); // Output: false (It's hot but not enough money)
console.log(willBuyDrink(false, 20)); // Output: false (Not hot outside)

// Create a function of your own that solves a problem.
// In comments, write what the function does and why you created it.

/* I've created a simple function that takes two parameters; exercisedAllWeek and ateHealthyAllWeek. If both are true, the output tells me that I can have a break from my diet. If either is false, the output tells me that I need to work a little bit harder before I can earn that break. I've used a simple if/else statement to check. The reason I created it is because the holiday season is about to end and I will start taking my fitness and nutrition seriously again after a nice break.*/

function canHaveCheatDay(exercisedAllWeek, ateHealthyAllWeek) {
  // Check if both conditions are true
  if (exercisedAllWeek && ateHealthyAllWeek) {
    return "Go ahead, you've earned it!";
  } else {
    return "You need to work a little bit harder before you can have a cheat day.";
  }
}

// Testing
console.log(canHaveCheatDay(true, true)); // Output: "Go ahead, you've earned it!"
console.log(canHaveCheatDay(true, false)); // Output: "You need to work a little bit harder before you can have a cheat day."
console.log(canHaveCheatDay(true, true)); // Output: "Go ahead, you've earned it!"
console.log(canHaveCheatDay(false, false)); // Output: "You need to work a little bit harder before you can have a cheat day."
