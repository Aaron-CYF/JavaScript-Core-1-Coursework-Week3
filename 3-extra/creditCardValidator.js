// take the arguments from the commandline and put them into a variable.
// output log of arguments if they exist.
var args = [...process.argv.slice(2)];
if (args.length > 0) console.log("numbers entered= ", args);

/* usage:
    run the the file using node and give each card number to validate as
    an argument on the command separated by spaces or commas.
    for example "node creditCardValidator.js 0000000000000001 8928437838590424"
*/

// set this to true to output the reasons why a number was invalidated to the console log.
const giveReasons = false;

// sends arguments to validator function if they exist
if (args.length > 0) {
  for (i in args) {
    console.log(args[i], validator(args[i]));
  }
}

// CCNum can be a string of numbers or a 16 digit number.
function validator(CCNum) {

  // initializes isValid to true. assumes the input number is valid before 
  // doing all of the conditional checks to see if it is valid.
  let isValid = true;

  // if number was sent directly to function and not a string then convert to 
  // string to make it easier to use.
  if (typeof CCNum === "number") {
    CCNum = CCNum.toString();
  }


  if (!(CCNum.length === 16)) {
    isValid = false;
    if (giveReasons) {
      console.log("incorrect length");
    }
  }

  /*
    each character in the string is split into an array element using .split("")
    .every() checks if every element in the array against my condition.
    Number() converts the string type to a number type.
    isNaN() checks if it was converted to a number correctly.
    the condition is negated with a NOT ! because every would stop searching 
    when you it gets to a false.
    the whole condition is also converted at with a NOT ! to get the desired output.
    this ends up reading like this:
    if NOT  every   character in numbers is NOT not-a-number
        !  .every()   char        CCNum      !    isNaN()
    meaning:
    if not every character in numbers is a number
  */
  if (!(CCNum.split("").every((char) => !isNaN(Number(char))))) {
    isValid = false;
    if (giveReasons) {
      console.log("invalid character(s)");
    }
  }

  /*
    CCNum.slice(1) is creating a string that doesn't contain the first character.
    .replace() is removing all the instances of the first character from the string.
    RegExp is used because you can't use a variable in a regular expression without it
    and the 'g' flag is set for 'global' which replaces all instances rather than just the first.
    The final string is checked to see if it is empty to make sure not all the characters were the same as the first.
  */
  if (CCNum.slice(1).replace(RegExp(CCNum[0], "g"), "") === "") {
    isValid = false;
    if (giveReasons) {
      console.log("all characters are the same");
    }
  }

  /*
    CCNum.slice(-1) is getting the last character in the string.
    % 2 is the modulo operator and is getting the remainder of the last character divided by 2.
    if the remainder is equal to 0 then it is even.
    the condition is negated with the NOT ! operator to check if it is odd.
  */
  if (!(CCNum.slice(-1) % 2 === 0)) {
    isValid = false;
    if (giveReasons) {
      console.log("last character is odd");
    }
  }

  /*
    CCNum.split("") is turning the string into an array.
    .reduce() is able to reduce the array to one data point.
    the reducer function is just adding all the numbers together
    but Number() has to be used because each character is a string 
    and they would be concatenated otherwise.
    then checks if the number is 16 or below to invalidate it.
  */
  if (CCNum.split("").reduce((a, b) => Number(a) + Number(b)) <= 16) {
    isValid = false;
    if (giveReasons) {
      console.log("characters do not to add up to be over 16");
    }
  }

  // if non of the conditions were met. isValid returns true as it was initialized.
  return isValid;
}
