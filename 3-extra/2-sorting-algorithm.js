/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

function sortAges(arr) {
  let newArr = [...arr];
  let modified = false;
  while (!(typeof newArr[0] === "number")) {
    newArr.shift();
  }
  for (let i = 0; i < newArr.length; i++) {
    while (!(typeof newArr[Number(i) + 1] === "number")) {
      newArr.splice(Number(i) + 1, 1);
      if (Number(i) + 1 === newArr.length) break;
    }
    // console.log("i=", newArr[i]);
    // console.log("i+1=", newArr[i+1]);
    // console.log("i > i+1=", newArr[i] > newArr[i+1]);
    if (i < newArr.length && newArr[i] > newArr[Number(i) + 1]) {
      newArr.splice(i, 2, newArr[Number(i) + 1], newArr[i]);
      modified = true;
    }
    // console.log("i=", i);
    // console.log("'i' is arr.length-1", i === newArr.length-1);
    // console.log("modified=", modified);
    if (i === newArr.length - 1 && modified === true) {
      // console.log("repeating loop");
      modified = false;
      i = -1;
    }
  }
  return newArr;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

test("sortAges function works - case 1", () => {
  expect(sortAges(agesCase1)).toEqual([23, 45, 55, 66, 100]);
});

test("sortAges function works - case 2", () => {
  expect(sortAges(agesCase2)).toEqual([55, 60, 100]);
});
