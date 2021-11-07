// ! check function, string, array, object methodes
console.dir(String.prototype);
console.dir(Function.prototype);
console.dir(Array.prototype);
console.dir(Object.prototype);

// ! create a built-in method for the String constructor
// * purpose of this built-in function is making the first character Uppercase
String.prototype.capitalize = function () {
  return `${this[0].toUpperCase()}${this.substr(1).toLowerCase()}`;
};

let lastName = "jhon";
lastName = lastName.capitalize();
console.log(lastName);
