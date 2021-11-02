// let score = 56 ;

// if (score >= 91) {
//     console.log('you got an A!');
// }
// else if(score >=81){
//     console.log('you got a B');
// }
// else{
//     console.log('you did not pass!');
// }

// Password Example.

// let Password = 'iwbfpwuwef';

// if (Password.length >= 6 ) {
//     if (Password.indexOf('') !== -1) {
//         console.log('password cannot conatin spaces');
//     } else {
//         console.log('valid password');
//     }

// } else {
//     console.log('password lenght is too short');
// }

// Logical Operators - && (and) , || (or) , ! (not).

// let color = 'purple';
// let animal = 'toad';

// if (color === 'purple' && animal === 'toad') {
//     console.log('congrats for purpletoad');
// } else {
//     console.log('boo');
// }

// let age = 60;

// if (age <= 6 || age >=70) {
//     console.log('free ticket');
// } else {
//     console.log('pay 10$');
// }

// Dealing with constants
// const colors = ['red' , 'orange' , 'purple']
// colors.push('green');
// console.log(colors);

// Nested Arrays

// const gameboard = [['x','x','o'],['x','o','o'],['x','o','x']]
// console.log(gameboard);

// gameboard[1][1] = 'S';
// console.log(gameboard);

// Objects

// const person = {age:17 , firstname:'jofra'};
// let personage = person.age
// person['Lastname'] = 'archer';
// console.log(person);

// LOOPS
// for (let i = 1; i < 10; i += 2) {
//   console.log("IN the LOOP , " + i);
// }

//Numbersquares
// for (let i = 1; i <= 20; i++) {
//   console.log(i * i);
// }

// 50 backwards
// for (let i = 50; i >= 0; i--) {
//   console.log(i);
// }

// While Loop

// let i = 50;
// while (i >= 40) {
//   console.log(i);
//   i--;
// }

// let password = "lol";
// let guess = prompt("enter the pass");
// while (guess !== password) {
//   prompt("enter password again");
// }
// console.log("got it right");

// const purchases = [20, 40, 60];
// let total = 0;
// for (let i = 0; i < purchases.length; i++) {
//   total += purchases[i];
//   console.log(purchases[i]);
// }

// console.log(`total is ${total}`);

// simpler version
// const purchases = [20, 40, 60];
// for (const purchase of purchases) {
//   console.log(purchase);
// } // for of can be used for just printing off the values in the array

// FUNCTIONS

// function laugh() {
//   console.log("hahahaha");
// }

// laugh(); // here you are calling the function

// let laughtoutloud = function name(params) { //function in a variable

// }
// function laugh(laughlevel, name) {
//   console.log(name + " says " + "ha".repeat(laughlevel));
// }
// laugh(7, "hi");

// **Returning values in Functions
// function square(num) {
//   return num ** 2;
// }
// function add(x, y) {
//   return x + y;
// }
// let sqnum = square(add(1, 5)); //type sqnum in console for 16

//Guessing Game!

function startgame() {
  const targetnum = randomint();
  let guess = getinput();

  while (guess !== targetnum) {
    if (guess > tagetnum) {
      console.log(`${guess} is too high`);
    } else {
      console.log(`${guess} is too low`);
    }
    guess = getinput();
  }
  alert("you win");
}

function randomint() {
  return Math.floor(Math.random() * 10) + 1;
}

function getinput() {
  let guess = parseInt(prompt("enter a number"));
  while (Number.isNaN(guess)) {
    guess = parseInt(prompt("Please Enter a Valid num"));
  }
  return guess;
}
startgame();
