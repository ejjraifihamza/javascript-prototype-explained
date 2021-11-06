// ! create an object 'engine'
const engine = {
  type: "Blink",
  license: "GNU LGPL",
  status: "Active",
};

// ! create a constructor 'Browser'
function Browser() {}

// ! Reference an object 'engine' to the constructor 'Browser'
Browser.prototype = engine;

// ! Create a new instance of the 'Browser' constructor
const browser = new Browser();

// ! Give the selected propreties different values
browser.type = "Gecko";
browser.license = "Mozilla license";

// ? Access to these properties
console.log(browser.type); // Gecko
console.log(browser.license); // Mozilla license
console.log(browser); // {type: 'Gecko', license: 'Mozilla license'}

// ? Look for a property that doesn't exist in the 'browser' object
console.log(browser.status); // Active

// ? Access to the secret link that acces to the 'prototype' object
console.log(browser.__proto__); // {type: 'Blink', license: 'GNU LGPL', status: 'Active'}

// ? check if the object 'engine' referenced to the 'Browser.prototype'
// ? is the same as the object showed in 'browser.__proto__'
console.log(browser.__proto__ === engine); // true
