// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numbers2 = numbers.map(num => num * 100);
console.log(numbers2);

var numbers3 = numbers.map(function (number) {
  return number * 100;
});
console.log(numbers3);


var numbers4 = numbers.map(times100);
function times100(num) {
  return num * 100;
}
console.log(numbers4);

var numbers5 = numbers.map(num => {
   return num * 100;
});
console.log(numbers5);