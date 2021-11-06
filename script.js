/*
! Prototype property
* function are object
* function contains:
    ? Methods
    ? Properties
    ? 'prototypes' Accessible
* Initial value 'prototype' empty object
* Augment prototype
*/

// ! Function are object
function player() {}
console.log(typeof player); // function
// but in this function you can access to methods and property just like object
// ? for example some methods you cann access with this function
player.call();
player.apply();
// ? for example some property you cann access with this methods
console.log(player.length); // give how many arg in function
// ? when you create a function you can access prototype and make it object
console.log(typeof player.prototype); // object
// * Initial value 'prototype' empty object its like you create a new object (player.prototype = {}) een if the function is contain some code

// * Augment prototype (add some properties and methods)
player.prototype = {
  firstName: "Jhon",
  lastName: "Doe",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(player.prototype.fullName()); // Jhon Doe

// ! Info : function player and player.prototype are separete (you can't access function from object and the opposite is true)

// * you can access the elements of prototype if you create an constructor
const player_1 = new player();
console.log(player_1.fullName());
