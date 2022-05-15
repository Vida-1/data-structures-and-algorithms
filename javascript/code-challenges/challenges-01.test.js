'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */
let arr1Challenge1 = [5, 7, 11, 14, 18, 34];
let arr2Challenge1 = [];

const addOne = (arr1Challenge1) => {

  arr1Challenge1.forEach((value, idx) => {
    arr2Challenge1.push(value + 1)
  })
  return arr2Challenge1;
};

addOne(arr1Challenge1);

console.log(`Challenge #1: ` + arr2Challenge1);
//console.log(`Challenge #1: ` + addOne(arr2Challenge1));


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */
let arr1Challenge2 = [`John`, 'Just', 'Jumped'];
let arr2Challenge2 = [];

const addExclamation = (arr1Challenge2) => {
  arr1Challenge2.forEach((value, idx) => {
    arr2Challenge2.push(value + `!`)
  })
  return arr2Challenge2;
};

addExclamation(arr1Challenge2);

console.log(`Challenge #2: ` + arr2Challenge2);
//console.log(`Challenge #2: ` + addExclamation(arr1Challenge2));


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.

Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.
------------------------------------------------------------------------------------------------ */

let arr1Challenge3 = ['andorians', 'klingons', 'bajorans'];
let arr2Challenge3 = [];

const allUpperCase = (arr1Challenge3) => {
  arr1Challenge3.forEach((value, idx) => {
    arr2Challenge3.push(value.toUpperCase())
  });
  return arr2Challenge3;
};

allUpperCase(arr1Challenge3);

console.log(`Challenge #3: ` + allUpperCase(arr1Challenge1));
// console.log(`Challenge #3: ` + arr2Challenge3);


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4


/* Part 1: Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".*/

let word = 'Enterprise';

const greeting = (word) => {
  return ((word.toUpperCase()) + '!');
};

greeting(word);
console.log(`Challenge #4 pt1: ` + greeting(word));

// /* Part 2: Then, write a function named `speaker` that takes in an array of strings and a callback function. */

let words = ['Rayna Kapec', 'Zhat Vash', 'Kasidy Yates', 'Michael Sullivan'];
let arrNew = [];

const callback = (words) => {
  words.forEach((value, idx) => {
    console.log(value.length)
  })
  return;
};
callback(words);

// /* Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array. */

const speaker = (words, callback) => {
  const arrElem = words.forEach((value, idx) => {
    `My name,` + value + ` contains ` + callback(value) + ` letters.`
  });
  newArr.push(arrElem);
  return (arrNew);
};

speaker(callback(words));
console.log(arrNew);

/*
------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------ */

const addValues = (arr, value) => {
  // Solution code here...
};

const addNumbers = (num, arr, times, callback) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------

CHALLENGE 6

Write a function named createList that takes in an array of the current store intentory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */

const createList = (availableItems) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return an array with 1 added to each value of the original array', () => {
    expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array with an exclamation point added to each value of the original array', () => {
    expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of uppercase strings', () => {
    expect(allUpperCase(['hi', 'how', 'are', 'you'])).toStrictEqual(['HI', 'HOW', 'ARE', 'YOU']);
  });
});

describe('Testing challenge 4', () => {
  test('It should provide an array of strings, that get uppercased, and a "!" at the end', () => {
    expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
  });
});

describe('Testing challenge 5', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 7', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
