//Task 1 - Declaring an Array

//const favoriteFoods = ["Cheese", "Chocolate", "Olives", "Anchovies"];
//1. Favorite Songs
//2. Profit From First Seven Days of the School of Code's Penny Doubling Pyramid Scheme 💰💰💰
//3. Friends

const favouriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"];

const profitFromFirstSevenDaysOfSoCpennyDoublingPyramid = [1, 2 , 4 , 8 , 16 , 32 , 64];

const nameAndSkill = [
    {name: "Chris", skill: "Changing lives."},
    {name: "Lizzie", skill: "Being friendly"},
    {name: "Ben",  skill: "Code rapping"},
    {name: "Tao", skill: "Hand raising"},
    {name: "Liz", skill: "Crochet"},
    {name: "Patrick", skill: "Call of Duty"},
    {name: "Tim", skill: "Analogies"},
    {name: "James", skill: "Friendship"},
    {name: "Joseph", skill: "Being positive"},
    {name: "Max", skill: "Papier-mache"}
];

console.log(nameAndSkill)

//Task 2 - Reading Array Values

//Using bracket notation and the correct index, for each person...
//Console.log the month in which you were born.
//Console.log the month your mother was born.
//Console.log your favorite month.

let options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] 

console.log(options[4]);
console.log(options[3]);
console.log(options[6]);

//Task 3 - Looping and Accessing
//We can use the useful loops we learned to access the items in an array.
//Declare an index variable and assign it the value of 0.✅
//In a while loop, console.log the array item at the current index and add 1 to the index variable.
//Have the while loop run until the index is equal to or greater than the array's length property.

let englishNumbers = ["one", "two", "three", "four", "five"];

console.log(englishNumbers.length); // length is 5
let index = 0; // declared an an index

while (index < englishNumbers) {
   console.log(englishNumbers[index]);
   index++; 
};

