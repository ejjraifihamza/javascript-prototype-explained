// ! create an 'engine' object, and performance
const engine = {
  type: "v8",
};

const performance = {
  value: "123mb",
};

// ! create a constructor 'Browser'
function Browser(name) {
  this._name = name;
}

// ! Reference the object 'engine' to the prototype of 'Browser'
Browser.prototype = engine;

// ! create an instance of the 'Browser' constructor
const browser = new Browser("google chrome");
console.log(browser.type); // v8
/*
 * so when you reference the obj 'engine' to the prototype of 'browser',
 * all properties of engine object are accessible from 'browser'
 */

// ! check if an object is a prototype of the constructor
console.log(engine.isPrototypeOf(browser)); // true
console.log(engine.isPrototypeOf(performance)); // false

// * other way
console.log(Object.getPrototypeOf(browser) == engine); // true
console.log(Object.getPrototypeOf(browser) == performance); // false
